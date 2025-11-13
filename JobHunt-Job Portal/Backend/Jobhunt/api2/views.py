from rest_framework.decorators import api_view,permission_classes
from rest_framework.authentication import TokenAuthentication

from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK, HTTP_400_BAD_REQUEST,HTTP_201_CREATED
from rest_framework.authtoken.models import Token
from .serializers import RegisterSerializer, LoginSerializer
from django.views.decorators.csrf import csrf_exempt
from rest_framework.views import APIView

from .serializers import JobSerializer
from .models import Job

from rest_framework.permissions import AllowAny
from rest_framework.decorators import permission_classes


from rest_framework.permissions import IsAuthenticated
from .models import CompanyProfile
from .serializers import CompanyProfileSerializer

# Registration view
@api_view(['POST'])
@permission_classes([AllowAny])
def register_user(request):
    serializer = RegisterSerializer(data=request.data)
    if serializer.is_valid():
        user = serializer.save()
        Token.objects.get_or_create(user=user)
        return Response({'message': 'User registered successfully'}, status=HTTP_200_OK)
    return Response(serializer.errors, status=HTTP_400_BAD_REQUEST)

# Login view
@csrf_exempt
@api_view(['POST'])
@permission_classes([AllowAny])  
def login_user(request):
    serializer = LoginSerializer(data=request.data)
    if serializer.is_valid():
        user = serializer.validated_data['user']
        token, _ = Token.objects.get_or_create(user=user)
        return Response({
            'token': token.key,
            'username': user.username,
            'role': user.role
        }, status=HTTP_200_OK)
    return Response(serializer.errors, status=HTTP_400_BAD_REQUEST)


# @api_view(['POST'])
# @permission_classes([IsAuthenticated])
# def save_company_profile(request):
#     user = request.user  # logged in user
#     data = request.data

#     try:
#         profile = CompanyProfile.objects.get(employer=user)
#         serializer = CompanyProfileSerializer(profile, data=data, partial=True)
#     except CompanyProfile.DoesNotExist:
#         serializer = CompanyProfileSerializer(data={**data, "employer": user.id})

#     if serializer.is_valid():
#         serializer.save()
#         return Response({"message": "Company Profile Saved Successfully", "data": serializer.data})
    
#     return Response(serializer.errors, status=400)

class CompanyProfileSave(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        # If profile exists → update, else create
        profile, created = CompanyProfile.objects.get_or_create(
            employer=request.user
        )
        serializer = CompanyProfileSerializer(profile, data=request.data, partial=True)

        if serializer.is_valid():
            serializer.save(employer=request.user)
            return Response(serializer.data, status=200)

        return Response(serializer.errors, status=400)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_company_profile(request):
    user = request.user
    try:
        profile = CompanyProfile.objects.get(employer=user)
        serializer = CompanyProfileSerializer(profile)
        return Response(serializer.data)
    except CompanyProfile.DoesNotExist:
        return Response({"message": "No Company Profile Found"}, status=404)
    
    
class PostJob(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        serializer = JobSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(employer=request.user)
            return Response(serializer.data, status=HTTP_201_CREATED)
        return Response(serializer.errors, status=HTTP_400_BAD_REQUEST)
    
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def job_list(request):
    jobs = Job.objects.filter(employer=request.user).order_by('-created_at')
    serializer = JobSerializer(jobs, many=True)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def job_detail(request, job_id):
    try:
        job = Job.objects.get(id=job_id)
        serializer = JobSerializer(job)
        return Response(serializer.data)
    except Job.DoesNotExist:
        return Response({"error": "Job not found"}, status=404)


# Delete job
@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def delete_job(request,job_id):
    try:
        job = Job.objects.get(id=job_id, employer=request.user)
        job.delete()
        return Response({"message": "Job deleted successfully"}, status=204)
    except Job.DoesNotExist:
        return Response({"error": "Job not found or unauthorized"}, status=404)

@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def update_job(request, job_id):
    try:
        job = Job.objects.get(id=job_id, employer=request.user)
    except Job.DoesNotExist:
        return Response({"error": "Job not found or unauthorized"}, status=404)

    serializer = JobSerializer(job, data=request.data, partial=True)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=400)
