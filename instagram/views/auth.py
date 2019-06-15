import os

import redis as redis
import requests
from urllib.parse import quote

from django.shortcuts import redirect


def handle_login(request):
    client_id = os.getenv('INSTAGRAM_CLIENT_ID', '')
    redirect_uri = quote('http://localhost:8000/redirect')
    response_type = 'code'
    url_querystring = 'client_id={}&redirect_uri={}&response_type={}'.format(
        client_id,
        redirect_uri,
        response_type
    )
    auth_url = 'https://api.instagram.com/oauth/authorize/?{}'.format(url_querystring)
    return redirect(auth_url)


def handle_redirect(request):
    api_code = request.GET.get('code')
    access_token_url = 'https://api.instagram.com/oauth/access_token'
    access_token_body = {
        "code": api_code,
        "client_id": os.getenv('INSTAGRAM_CLIENT_ID', ''),
        "client_secret": os.getenv('INSTAGRAM_CLIENT_SECRET', ''),
        "grant_type": "authorization_code",
        "redirect_uri": "http://localhost:8000/redirect"
    }
    response = requests.post(
        url=access_token_url,
        data=access_token_body,
    )
    print()
    auth_response = response.json()
    print(auth_response)
    r = redis.Redis(host='redis', port=6379, db=1, password=os.getenv('REDIS_PASSWORD', ''))
    r.set('INSTAGRAM_API_TOKEN', auth_response.get('access_token'), ex=3600)
    return redirect('http://localhost:3000')
