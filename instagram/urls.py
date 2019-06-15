from rest_framework.routers import SimpleRouter

from instagram.views.post_viewset import PostViewSet

router = SimpleRouter()
router.register("instagram_posts", PostViewSet, basename="instagram_posts")
