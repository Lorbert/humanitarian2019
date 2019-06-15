from django.db import models


class Post(models.Model):
    latitude = models.FloatField()
    longitude = models.FloatField()
    source = models.URLField()
