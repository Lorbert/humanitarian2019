from django.db import models


class Post(models.Model):
    latitude = models.FloatField()
    longitude = models.FloatField()
    insta_id = models.CharField(max_length=64)
    insta_username = models.CharField(max_length=128)
    insta_link = models.URLField()
    insta_image_link = models.URLField()
    insta_caption = models.CharField(max_length=2048)
