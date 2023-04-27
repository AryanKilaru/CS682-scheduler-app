from django.urls import path
from .views import MeetingList, MeetingDetail

urlpatterns = [
    path('meeting/', MeetingList.as_view()),
    path('meeting/<int:pk>/', MeetingDetail.as_view()),
]
