import json
import os

with open(f'template-config.json') as ins:
    config = json.load(ins)


with open(f'reddit_creds.json') as ins:
    config = { **json.load(ins), **config }

params = [f'{k}={v}' for k,v in config.items()]
parameters_package = ','.join(params)
parameters_deploy = ' '.join(params)

package_cmd = [
    'aws cloudformation package',
    '--output-template serverless.yaml',
    '--s3-bucket serverless-build-artifacts',
    '--s3-prefix image-labeling',
    '--template-file template.yaml',
    f'--metadata {parameters_package}'
    ]

deploy_cmd = [
    'aws cloudformation deploy',
    '--stack-name image-labeling',
    '--template-file serverless.yaml',
    '--capabilities CAPABILITY_NAMED_IAM',
    f'--parameter-overrides {parameters_deploy}'
    ]

os.system(' '.join(package_cmd))
os.system(' '.join(deploy_cmd))
