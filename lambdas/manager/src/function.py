import boto3
import json
import os
import requests
from io import StringIO,BytesIO
import urllib.request

s3 = boto3.client('s3')

try:
    srcBucket = os.environ["SourceBucketName"]
    destBucket = os.environ["TargetBucketName"]
except:
    raise Exception("Could not import ENV variables")

def handler(event, context):
    # Could use ApiGateway template mapping for this
    # But that's for in version 2.0
    if "imageUrl" in event:
        return upload(event, context)
    if "label" in event:
        return label(event, context)
    else:
        return listImages(event, context)


# Move image from the source bucket to the
# target bucket with the correct prefix
# corresponding to the label
def label(event, context):
    source_key = event["source_key"]
    label = event["label"]

    copy_params = {
        'CopySource': f'{srcBucket}/unlabeled/{source_key}',
        'Bucket': destBucket,
        'Key': f'{label}/{source_key}'
    }
    delete_params = {
        'Bucket': srcBucket,
        'Key': f'unlabeled/{source_key}'
    }

    try:
        s3.copy_object(**copy_params)
        s3.delete_object(**delete_params)
    except Exception as e:
        # TODO
        raise e

    return {'status': 'success'}

# Return a list of images that still need to be labeled
def listImages(event, context):
    params = {
        "Bucket": srcBucket,
        "Prefix": 'unlabeled/',
        "MaxKeys": 50
    }

    try:
        data = s3.list_objects(**params)
    except Exception as e:
        # TODO
        raise e

    # Get the keys of the images
    images = []
    if 'Contents' in data:
        for entry in data['Contents']:
            if entry['Key'] != params['Prefix']:
                images.append(entry['Key'])

    # Generate a presigned url for the images that is valid for 1hr
    result = []
    for image in images:
        url = s3.generate_presigned_url(
                'get_object',
                Params={ 'Bucket': srcBucket, 'Key': image },
                ExpiresIn=3600 )

        result.append({
            "key": image.split('/')[-1],
            "url": url
            })

    return result

# Upload an image to the source bucket
# TODO allow uploading of multiple images at once
def upload(event, context):
    imageUrl = event["imageUrl"]
    target_key = imageUrl.split('/')[-1]

    # Get base64
    data = BytesIO(urllib.request.urlopen(imageUrl).read()).read()

    params = {
        "Body": data,
        "Bucket": srcBucket,
        "Key": f'unlabeled/{target_key}'
        }

    try:
        s3.put_object(**params)
    except Exception as e:
        # TODO
        return e
    return {'status': 'ok'}

if __name__ == "__main__":
    os.environ["SourceBucketName"] = "source-bucket-image-labeling"
    os.environ["TargetBucketName"] = "target-bucket-image-labeling"

    ######
    upload_test_event = {
        "imageUrl": "https://hips.hearstapps.com/ghk.h-cdn.co/assets/17/30/2560x1280/landscape-1500925839-golden-retriever-puppy.jpg"
    }
    print(upload(upload_test_event, None))

    #######
    list_test_event = {
    }
    print(listImages(list_test_event, None))

    #######
    label_test_event = {
        "source_key": "landscape-1500925839-golden-retriever-puppy.jpg",
        "label": "testing"

    }
    print(label(label_test_event, None))