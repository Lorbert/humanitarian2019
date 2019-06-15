from rest_framework import viewsets
from rest_framework.parsers import JSONParser
from rest_framework.response import Response

from instagram.models import Post
from instagram.serializers.post_serializer import PostSerializer


class PostViewSet(viewsets.GenericViewSet):
    parser_classes = (JSONParser,)
    queryset = Post.objects.all()
    serializer_class = PostSerializer

    def list(self, request):
        post_queryset = Post.objects.all()
        serializer = PostSerializer(post_queryset, many=True)
        return Response(serializer.data)
