from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import SchedulerViewSet

router = DefaultRouter()
router.register(r'scheduler', SchedulerViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
