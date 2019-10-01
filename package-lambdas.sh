#!/bin/bash

# Package the lambdas into a zip file that can then be deployed on AWS Lambda
for lambda in lambdas/* ; do
    rm -r $lambda/target
    mkdir $lambda/target

    (
        cd $lambda/src &&
        zip -r ../target/package.zip *
    )
done