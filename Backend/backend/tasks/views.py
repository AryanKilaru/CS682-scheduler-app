from rest_framework import viewsets
# from rest_framework.pagination import PageNumberPagination
from .models import Task
from .serializers import TaskSerializer
from django.http import HttpResponse

from rest_framework.pagination import PageNumberPagination

class AllResultsPagination(PageNumberPagination):
    page_size = 100000  # Set a large number to retrieve all results at once

class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    # pagination_class = PageNumberPagination
    # PAGE_SIZE = 100  # or any other value you want
    pagination_class = AllResultsPagination  # Use custom pagination class

    def my_view(request):
        response = HttpResponse()
        response['Access-Control-Allow-Origin'] = 'http://localhost:3000'
        return response
