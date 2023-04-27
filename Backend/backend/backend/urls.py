from django.contrib import admin
from django.urls import path,include
from rest_framework.authtoken import views

urlpatterns = [
  path('admin/', admin.site.urls),
  path('api/', include('meeting.urls')),
  path('',include('tasks.urls')),
  path('',include('schedule.urls')),
  path('',include('scheduler.urls')),
  path('',include('quickstart.urls')),
  path('api-token-auth', views.obtain_auth_token)
]