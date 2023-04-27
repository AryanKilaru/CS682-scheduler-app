from django.db import models

class Meeting(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)
    type = models.CharField(max_length=255)
    date = models.DateField()
    time = models.TimeField()
    duration = models.CharField(max_length=255)
    attendees = models.TextField()
    notes = models.TextField()
    deleted = models.BooleanField()
