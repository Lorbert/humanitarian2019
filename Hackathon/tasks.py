from __future__ import absolute_import

from Hackathon.celery import app
from instagram.tasks import refresh_instagram_posts_runner


@app.task(bind=True)
def refresh_instagram_posts(self):
    return refresh_instagram_posts_runner()
