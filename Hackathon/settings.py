from .base import *

# Database
# https://docs.djangoproject.com/en/2.2/ref/settings/#databases

DEBUG = False

ALLOWED_HOSTS = ['localhost', '127.0.0.1', '::1']

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'hackathon',
        'USER': 'hackathon',
        'PASSWORD': 'password',
        'HOST': 'db',
    }
}
