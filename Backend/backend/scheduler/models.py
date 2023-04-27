from django.db import models

class Scheduler(models.Model):
    Meeting_id = models.AutoField(primary_key=True),
    Meeting_name = models.CharField(max_length=256),
    Meeting_type = models.CharField(max_length=256),
    Meeting_date = models.DateField(),
    Meeting_time = models.TimeField(),
    Meeting_duration = models.CharField(max_length=256),
    Meeting_attendees = models.TextField(),
    Meeting_notes = models.TextField(),
    Meeting_deleted = models.BooleanField(),