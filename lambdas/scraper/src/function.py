import os
import json
import praw
import requests


def reddit_login():
    # Load credentials from env variables
    SECRET = os.environ['PRAW_SECRET']
    CLIENT_ID = os.environ['PRAW_CLIENT_ID']

    reddit_client = praw.Reddit(
                        client_id=CLIENT_ID,
                        client_secret=SECRET,
                        user_agent='Finding images',
                        )
    return reddit_client

def process_submission(subm):
    # If it's a video, skip it.
    if subm.is_video:
        return None

    url = (subm.url)

    # Urls hould contain a '/'
    if not '/' in url:
        return None

    # Get the filename from the url
    file_name = url.split("/")[-1]

    # Check if it's a jpeg or png
    # We're not actually checking mimetype of the file, so this is not very safe
    if "." not in file_name or not any([file_name.endswith(ext) for ext in ['jpg', 'png']]):
        return None

    return url

def extract_images_from_subreddit(reddit, subr, n_images):
    print(f"extracting images from {subr}", end="\r")
    images = set()
    # set limit to n_images*5 because all posts without an image will be ignored.
    for submission in reddit.subreddit(subr).top('day', limit=n_images*5):
        image_url = process_submission(submission)
        if not image_url is None:
            images.add(image_url)
            if len(images) >= n_images:
                break
    print(f"extracting images from {subr} - found {len(images)} images")
    return images


def process(event, context):
    # Connect to Reddit
    reddit = reddit_login()

    subreddits_to_scrap = event['subreddits']
    n_images = 50
    if 'number' in event:
        n_images = min(200, event['number'])

    # Gather images
    images = set()
    for subr in subreddits_to_scrap:
        image_urls = extract_images_from_subreddit(reddit, subr, n_images)
        images = images.union(image_urls)


    # Upload them to the bucket
    base_url = os.environ["API_BASE_URL"]
    endpoint = "image/upload"

    for image_url in images:
        # We don't care about the response. Just send the request
        try:
            requests.post(
                os.path.join(base_url,endpoint),
                data = json.dumps({
                    "imageUrl": image_url
                    }),
                timeout=0.1)
        except requests.exceptions.ReadTimeout:
            pass

if __name__ == "__main__":
    event = {
         'subreddits': [ 'aww', 'eyebleach' ],
        'project': 'test_project',
        'number': 10
    }
    process(event,None)