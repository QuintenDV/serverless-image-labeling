import boto3
import os
import requests
from io import StringIO,BytesIO
import urllib.request

s3 = boto3.client('s3')

try:
    srcBucket = os.environ["SourceBucketName"]
    destBucket = os.environ["TargetBucketName"]
except:
    print("Could not import ENV variables")

def handler(event, context):
    if 'source_key' in event:
        return label(event, context)
    elif 'imageUrl' in event:
        return upload(event, context)
    else:
        return getListImages(event, context)


def label(event, context):

    project = event["project"]
    source_key = event["source_key"]
    label = event["label"]

    params = {
        'CopySource': srcBucket + '/' + project + '/unlabeled/' + source_key,
        'Bucket': destBucket,
        'Key': project + '/' + label + '/' + source_key
    }

    try:
        s3.copy_object(**params)
    except Exception as e:
        print(e)
        return 'error'

    return 'ok'

def getListImages(event, context):

    project = event["project"]

    params = {
        "Bucket": srcBucket,
        "Prefix": project + '/unlabeled/',
        "MaxKeys": 50
    }

    try:
        data = s3.list_objects(**params)
    except Exception as e:
        return str(e)



    result = []
    if 'Contents' in data:
        for entry in data['Contents']:
            if entry['Key'] != params['Prefix']:
                result.append(entry['Key'])

    return result


def upload(event, context):

    project = event["project"]
    imageUrl = event["imageUrl"]

    target_key = imageUrl.split('/')[-1]

    # Get base64
    data = BytesIO(urllib.request.urlopen(imageUrl).read()).read()

    params = {
        "Body": data,
        "Bucket": srcBucket,
        "Key": f'{project}/unlabeled/{target_key}'
        }

    try:
        s3.put_object(**params)
    except Exception as e:
        return e
    return "OK"

if __name__ == "__main__":
    os.environ["SourceBucketName"] = "source-bucket-image-labeling"
    os.environ["TargetBucketName"] = "target-bucket-image-labeling"

    label_test_event = {
        "project": "test_project",
        "imageUrl": "https://hips.hearstapps.com/ghk.h-cdn.co/assets/17/30/2560x1280/landscape-1500925839-golden-retriever-puppy.jpg"
    }
    print(upload(label_test_event, None))

    list_test_event = {
        "project": "test_project",
    }
    print(getListImages(list_test_event, None))

    label_test_event = {
        "project": "test_project",
        # "imageUrl": "https://hips.hearstapps.com/ghk.h-cdn.co/assets/17/30/2560x1280/landscape-1500925839-golden-retriever-puppy.jpg"
        "source_key": "landscape-1500925839-golden-retriever-puppy.jpg",
        "label": "testing"

    }
    print(label(label_test_event, None))