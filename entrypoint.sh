#!/bin/sh

rm celerybeat.pid celerybeat-schedule
pip install -r requirements.txt
python manage.py makemigrations
python manage.py migrate
celery worker -A Hackathon &
celery beat -A Hackathon &
python manage.py runserver 0.0.0.0:8000
