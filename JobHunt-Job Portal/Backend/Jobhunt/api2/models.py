# api2/models.py
from django.db import models
from api.models import CustomUser  # import the existing user model
from django.conf import settings   # <-- Use this instead of User model directly
#from django.contrib.auth.models import User
from django.conf import settings

# Example: a profile or additional info model for api2
class JobProfile(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE)
    resume = models.FileField(upload_to='resumes/', null=True, blank=True)
    experience = models.IntegerField(default=0)

    def __str__(self):
        return f"{self.user.username}'s profile"



class CompanyProfile(models.Model):
    employer = models.OneToOneField(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="company_profile"
    )

    company_name = models.CharField(max_length=200)
    description = models.TextField()
    domain = models.CharField(max_length=200)
    location = models.CharField(max_length=200)

    company_size = models.CharField(max_length=50)
    founded_year = models.IntegerField()

    website = models.URLField()
    email = models.EmailField()
    contact = models.CharField(max_length=20)

    def __str__(self):
        return self.company_name

class Job(models.Model):
    employer = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    job_title = models.CharField(max_length=200)
    description = models.TextField()
    location = models.CharField(max_length=200)
    salary = models.CharField(max_length=100, blank=True, null=True)
    experience = models.CharField(max_length=100, blank=True, null=True)
    skills_required = models.CharField(max_length=300)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.job_title
