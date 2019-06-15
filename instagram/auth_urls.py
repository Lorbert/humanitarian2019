from django.conf.urls import url

from instagram.views.auth import handle_login, handle_redirect

urlpatterns = [
    url(r'^login$', handle_login, name='handle_login'),
    url(r'^redirect$', handle_redirect, name='handle_redirect'),
]
