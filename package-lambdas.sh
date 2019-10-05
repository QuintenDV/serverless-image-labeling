#!/bin/bash

# Package the lambdas into a zip file that can then be deployed on AWS Lambda
for lambda in lambdas/* ; do
    rm -r $lambda/target/*

    mkdir $lambda/target/packages
    touch $lambda/target/packages/__init__.py # So dir isn't empty
    ls $lambda
    if [ -f "$lambda/requirements.txt" ]; then
        pip install -r $lambda/requirements.txt --target $lambda/target/packages
    fi

    (
        cd $lambda/target/packages &&
        zip -r ../package.zip *
    )

    (
        cd $lambda/src &&
        zip -r ../target/package.zip *
    )
done