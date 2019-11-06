import json
import os

with open(f'cloudformation/template-config.json') as ins:
    config = json.load(ins)


source = 'html/'
target= f"s3://{config['FrontendBucketName']}/"

cmd = ['aws', 's3', 'sync', source, target]

os.system(' '.join(cmd))