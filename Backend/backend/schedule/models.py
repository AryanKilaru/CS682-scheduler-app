from django.db import models

class Schedule(models.Model):
    meeting_id = models.AutoField(primary_key=True),
    meeting_name = models.CharField(max_length=255),
    meeting_type = models.CharField(max_length=255),
    meeting_date = models.DateField(),
    meeting_time = models.TimeField(),
    meeting_duration = models.CharField(max_length=255),
    meeting_attendees = models.TextField(),
    meeting_notes = models.TextField(),
    meeting_deleted = models.BooleanField(),