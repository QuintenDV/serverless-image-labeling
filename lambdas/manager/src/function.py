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
    if "action-upload" in event:
        return upload(event, context)
    if "action-label" in event:
        return label(event, context)
    if "action-list-images" in event:
        return listImages(event, context)
    if "action-projects" in event:
        return listProjects(event, context)
    if "action-new-project" in event:
        return new_project(event, context)
    raise Exception("Invalid request")

def new_project(event, context):
    project_name = event['body']['project_name']
    labels = event['body']['labels']

    data_json = {
        "labels": labels
    }

    params = {
        "Body": json.dumps(data_json),
        "Bucket": srcBucket,
        "Key": f'{event["body"]["project_name"]}/config.json'
        }

    try:
        s3.put_object(**params)
    except Exception as e:
        return e


def label(event, context):
    project = event['body']["project"]
    source_key = event['body']["source_key"]
    label = event['body']["label"]

    params = {
        'CopySource': f'{srcBucket}/{project}/unlabeled/{source_key}',
        'Bucket': destBucket,
        'Key': f'{project}/{label}/{source_key}'
    }

    try:
        s3.copy_object(**params)
    except Exception as e:
        raise e

def listImages(event, context):
    params = {
        "Bucket": srcBucket,
        "Prefix": f'{event["body"]["project"]}/unlabeled/',
        "MaxKeys": 50
    }

    try:
        data = s3.list_objects(**params)
    except Exception as e:
        raise e

    result = []
    if 'Contents' in data:
        for entry in data['Contents']:
            if entry['Key'] != params['Prefix']:
                result.append(entry['Key'])

    return result


def upload(event, context):
    imageUrl = event['body']["imageUrl"]
    target_key = imageUrl.split('/')[-1]

    # Get base64
    data = BytesIO(urllib.request.urlopen(imageUrl).read()).read()

    params = {
        "Body": data,
        "Bucket": srcBucket,
        "Key": f'{event["body"]["project"]}/unlabeled/{target_key}'
        }

    try:
        s3.put_object(**params)
    except Exception as e:
        return e

def listProjects(event, context):
    params = {
        "Bucket": srcBucket,
        "Prefix": "",
        "Delimiter": "/",
        "MaxKeys": 50
    }
    try:
        data = s3.list_objects(**params)
    except Exception as e:
        return str(e)

    projects = []
    for entry in data['CommonPrefixes']:
        projects.append(entry['Prefix'][:-1])

    results = dict()

    for proj in projects:
        with BytesIO() as f:
            try:
                s3.download_fileobj(
                    srcBucket,
                    os.path.join(proj, 'config.json'),
                    f)
            except:
                continue
            f.seek(0)
            results[proj] = json.loads(f.read().decode())

    return results

if __name__ == "__main__":
    os.environ["SourceBucketName"] = "source-bucket-image-labeling"
    os.environ["TargetBucketName"] = "target-bucket-image-labeling"

    #######
    # upload_test_event = {
    #     "project": "test_project",
    #     "imageUrl": "https://hips.hearstapps.com/ghk.h-cdn.co/assets/17/30/2560x1280/landscape-1500925839-golden-retriever-puppy.jpg"
    # }
    # print(upload(upload_test_event, None))

    # #######
    # list_test_event = {
    #     "project": "test_project",
    # }
    # print(listImages(list_test_event, None))

    # #######
    # label_test_event = {
    #     "project": "test_project",
    #     "source_key": "landscape-1500925839-golden-retriever-puppy.jpg",
    #     "label": "testing"

    # }
    # print(label(label_test_event, None))

    #######
    print(listProjects(None, None))

    #######
    # new_project_test_event = {
    #     "body" : {
    #     "project_name": "another_test",
    #     "labels": ["yes", "no"]
    #     }
    # }
    # new_project(new_project_test_event, None)