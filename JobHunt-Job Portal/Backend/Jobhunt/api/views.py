from django.shortcuts import render
from django.http import HttpResponse
from .serializer import UserSerializer
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK,HTTP_400_BAD_REQUEST
from rest_framework.decorators import api_view
# Create your views here.

def home(request):
    return HttpResponse('Home page for api')

@api_view(['POST'])
def registeruser(request):
    if request.method == 'POST':
        serializer_obj=UserSerializer(data=request.data)
        if serializer_obj.is_valid():
            uobj=serializer_obj.save()
            uobj.set_password(serializer_obj.validated_data['password'])
            uobj.save()
            Token.objects.get_or_create(user=uobj)
            return Response(status=HTTP_200_OK)
        else:
            return Response(serializer_obj.errors,status=HTTP_400_BAD_REQUEST)
            
    