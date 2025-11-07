from django.shortcuts import render
from django.http import HttpResponse
from .serializer import UserSerializer
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK,HTTP_400_BAD_REQUEST
from rest_framework.decorators import api_view
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import authentication_classes,permission_classes
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth import authenticate
from .models import CustomUser

# Create your views here.


@api_view(['POST'])
def registeruser(request):
    if request.method == 'POST':
        print(request.data)
        serializer_obj=UserSerializer(data=request.data)   
        if serializer_obj.is_valid():
            uobj=serializer_obj.save()
            uobj.set_password(serializer_obj.validated_data['password'])
            uobj.save()
            Token.objects.get_or_create(user=uobj)
            return Response(status=HTTP_200_OK)
        else:
            return Response(serializer_obj.errors,status=HTTP_400_BAD_REQUEST)
 

@api_view(['POST'])
@csrf_exempt             
def loginuser(request):
    
    username = request.data.get('username')
    password = request.data.get('password')
    print(username)
    print(password)
    if not username or not password:
        return Response({'error': 'Username and password are required'}, status=HTTP_400_BAD_REQUEST)

    user = authenticate(username=username, password=password)
    print("User object returned:", user)
    print("User model class:", type(user))

    if user is not None:
        token, _ =Token.objects.get_or_create(user=user)
        print(user)
        print(user.role)
        resp_data = {
            "token":token.key,
            "username":user.username,
            "role":user.role
        }
        print(resp_data)
        return Response(resp_data,status=HTTP_200_OK,content_type='application/json')
    else:
        return Response(status=HTTP_400_BAD_REQUEST)


@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated]) 
def home(request):
    return HttpResponse('Home page for api')
