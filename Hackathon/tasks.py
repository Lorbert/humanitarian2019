from __future__ import absolute_import

import requests

from Hackathon.celery import app


@app.task(bind=True)
def refresh_instagram_posts(self):
    print("INSTA POSTS REFGRESHED")
    return False
