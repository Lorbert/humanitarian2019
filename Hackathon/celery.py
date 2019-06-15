from __future__ import absolute_import
import os

from celery import Celery
from django.conf import settings

# set the default Django settings module for the 'celery' program.
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'Hackathon.settings')

app = Celery(settings.CELERY_NAME)

# Using a string here means the worker will not have to pickle the object when using Windows.
app.config_from_object('django.conf:settings', namespace="CELERY")
app.autodiscover_tasks(('Hackathon',))


@app.on_after_configure.connect
def setup_periodic_tasks(sender, **kwargs):
    app.conf.beat_schedule = {
        'refresh_instagram_posts': {
            'task': 'Hackathon.tasks.refresh_instagram_posts',
            'schedule': 60.0,
            'args': ()
        }
    }
