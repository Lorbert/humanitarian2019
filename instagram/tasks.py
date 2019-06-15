from instagram.api_client import InstagramApiClient
from instagram.serializers.client_serializer import ClientSerializer


def refresh_instagram_posts_runner():
    api_client = InstagramApiClient()
    posts = api_client.get_posts()
    print(posts)
    print(posts['data'])
    for post in posts['data']:
        print(post)
        serializer = ClientSerializer(post)
        if serializer.is_valid():
            serializer.save()
    print("Insta Posts Refreshed")
    return False
