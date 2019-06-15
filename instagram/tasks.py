from instagram.api_client import InstagramApiClient
from instagram.serializers.client_serializer import ClientSerializer


def refresh_instagram_posts_runner():
    api_client = InstagramApiClient()
    posts = api_client.get_posts()
    for post in posts:
        serializer = ClientSerializer(post)
        if serializer.is_valid():
            serializer.save()
    return False
