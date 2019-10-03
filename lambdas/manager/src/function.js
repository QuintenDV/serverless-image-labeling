// Load the AWS SDK
const aws = require('aws-sdk');
const s3 = new aws.S3();

// Define 2 new variables for the source and destination buckets
var srcBucket = "source-bucket-image-labeling";
var destBucket = "target-bucket-image-labeling";

//Main function
exports.handler = (event, context, callback) => {
    if ('source_key' in event) {
        label(event, context, callback);
    } else if ('imageUrl' in event) {
        upload(event, context, callback);
    } else {
        getListImages(event, context, callback);
    }
}

label = (event, context, callback) => {

    var project = event["project"];
    var source_key = event["source_key"];
    var label = event["label"];

    s3.copyObject({
        CopySource: srcBucket + '/' + project + '/unlabeled/' + source_key,
        Bucket: destBucket,
        Key: project + '/' + label + '/' + source_key
        }, function(copyErr, copyData){
        if (copyErr) {
                console.log("Error: " + copyErr);
                callback(null, 'error');
            } else {
                console.log('Copied OK');
                callback(null, "Done");
            }
        });
    };

getListImages = (event, context, callback) => {

    var project = event["project"];

    var params = {
        Bucket: srcBucket, /* required */
        Prefix: project + '/unlabeled/',  // Can be your folder name
        MaxKeys: 50
    };
    s3.listObjectsV2(params, function(err, data) {
        if (err) {
            console.log(err, err.stack); // an error occurred
            callback(null, 'error');
        }
        result = [];
        data['Contents'].forEach(function(entry) {
            if (entry['Key'] != params['Prefix'])
                result.push(entry['Key']);
        });
        callback(null, result);
    });
}

upload = (event, context, callback) => {

    var project = event["project"];
    var imageUrl = event["imageUrl"];

    var split_url = imageUrl.split('/');
    target_key = split_url[split_url.length -1];

    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    var xmlHTTP = new XMLHttpRequest();
    xmlHTTP.open('GET', url, true);
    xmlHTTP.responseType = 'arraybuffer';
    xmlHTTP.onload = function(e) {
        var arr = new Uint8Array(this.response);
        var raw = String.fromCharCode.apply(null,arr);
        var b64 = base64.encode(raw);
    };
    var data = xmlHTTP.send();


    s3.putObject({
        Bucket: destBucket,
        Key: project + '/unlabeled/' + target_key,
        Body: data,
        }, function(putErr, copyData){
        if (putErr) {
                console.log("Error: " + putErr);
                callback(null, 'error');
            } else {
                console.log('Copied OK');
                callback(null, "Done");
            }
        });
    };
