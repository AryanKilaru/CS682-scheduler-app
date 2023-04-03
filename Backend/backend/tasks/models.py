from django.db import models

class Task(models.Model):
    task_id = models.AutoField(primary_key=True)
    task_name = models.CharField(max_length=255)
    employee_name = models.CharField(max_length=255)
    start_date = models.DateField()
    end_date = models.DateField()
    is_delete = models.BooleanField(default=False)
    is_completed = models.BooleanField(default=False)
