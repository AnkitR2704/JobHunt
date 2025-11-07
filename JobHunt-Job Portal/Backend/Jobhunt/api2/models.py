# api2/models.py
from django.db import models
from api.models import CustomUser  # import the existing user model

# Example: a profile or additional info model for api2
class JobProfile(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE)
    resume = models.FileField(upload_to='resumes/', null=True, blank=True)
    experience = models.IntegerField(default=0)

    def __str__(self):
        return f"{self.user.username}'s profile"
