from django.urls import path
from . import views
from rest_framework.authtoken.views import obtain_auth_token

urlpatterns = [
    path('home/',views.home),
    path('register/',views.registeruser),
    path('login/',obtain_auth_token)
]


