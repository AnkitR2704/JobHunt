from rest_framework import serializers
from api.models import CustomUser  # import from api, not api2
from django.contrib.auth import authenticate
from .models import CompanyProfile,Job


# Registration Serializer
class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = CustomUser
        fields = ['username', 'email', 'password', 'role']

    def create(self, validated_data):
        user = CustomUser.objects.create(
            username=validated_data['username'],
            email=validated_data['email'],
            role=validated_data['role']
        )
        user.set_password(validated_data['password'])
        user.save()
        return user

# Login Serializer
class LoginSerializer(serializers.Serializer):
    username = serializers.CharField(required=True)
    password = serializers.CharField(required=True, write_only=True)

    def validate(self, data):
        user = authenticate(username=data['username'], password=data['password'])
        if user and user.is_active:
            data['user'] = user
            return data
        raise serializers.ValidationError("Invalid username or password")


class CompanyProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = CompanyProfile
        fields = "__all__"
        read_only_fields = ['employer']


class JobSerializer(serializers.ModelSerializer):
    class Meta:
        model = Job
        fields = "__all__"
        read_only_fields = ['employer']

from rest_framework import serializers
from .models import JobSeekerProfile

class JobSeekerProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = JobSeekerProfile
        fields = '__all__'
        read_only_fields = ['user']


from rest_framework import serializers
from .models import AppliedJob

# class AppliedJobSerializer(serializers.ModelSerializer):
#     job_title = serializers.CharField(source='job.job_title', read_only=True)
#     location = serializers.CharField(source='job.location', read_only=True)
#     salary = serializers.CharField(source='job.salary', read_only=True)

#     class Meta:
#         model = AppliedJob
#         fields = ['id', 'job_title', 'location', 'salary', 'applied_at']

class AppliedJobSerializer(serializers.ModelSerializer):
    job_title = serializers.CharField(source='job.job_title')
    location = serializers.CharField(source='job.location')
    salary = serializers.CharField(source='job.salary')
    skills = serializers.CharField(source='job.skills')
    company = serializers.CharField(source='job.company.company_name', default="N/A")

    class Meta:
        model = AppliedJob
        fields = ['id', 'job_title', 'location', 'salary', 'skills', 'company', 'applied_at']



# serializers.py

# class ApplicantSerializer(serializers.ModelSerializer):
#     applicant_name = serializers.CharField(source="jobseeker.username")
#     full_name = serializers.CharField(source="jobseeker.jobseekerprofile.full_name", default="")
#     email = serializers.CharField(source="jobseeker.jobseekerprofile.email", default="")
#     contact = serializers.CharField(source="jobseeker.jobseekerprofile.contact", default="")
#     location = serializers.CharField(source="jobseeker.jobseekerprofile.location", default="")
#     skills = serializers.CharField(source="jobseeker.jobseekerprofile.skills", default="")
    
#     job_title = serializers.CharField(source="job.job_title")
#     company = serializers.CharField(source="job.company.company_name")

#     class Meta:
#         model = AppliedJob
#         fields = [
#             "id",
#             "applicant_name",
#             "full_name",
#             "email",
#             "contact",
#             "location",
#             "skills",
#             "job_title",
#             "company",
#             "applied_at",
#         ]


class ApplicantListSerializer(serializers.ModelSerializer):
    applicant_name = serializers.CharField(source="jobseeker.username")
    applicant_email = serializers.CharField(source="jobseeker.email")
    applied_role = serializers.CharField(source="job.job_title")
    job_id = serializers.IntegerField(source="job.id")

    class Meta:
        model = AppliedJob
        fields = ["id", "applicant_name", "applicant_email", "applied_role", "job_id", "applied_at"]
