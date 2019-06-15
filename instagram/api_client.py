import os

import redis
import requests


class InstagramApiClient:

    def __init__(self):
        r = redis.Redis(host='redis', port=6379, db=1, password=os.getenv('REDIS_PASSWORD', ''))
        self.can_connect = r.get('INSTAGRAM_API_TOKEN') is not None
        if self.can_connect:
            self.token = r.get('INSTAGRAM_API_TOKEN').decode()
        else:
            self.token = None

    def get_posts(self):
        if self.can_connect:
            resp = requests.get(
                'https://api.instagram.com/v1/users/self/media/recent/?access_token={}'.format(
                    self.token
                )
            )
            return resp.json()
        else:
            return {'data': []}
