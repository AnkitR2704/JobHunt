from django.urls import path
from .views import register_user, login_user  # use the correct function names

urlpatterns = [
    path('register/', register_user, name='register'),
    path('login/', login_user, name='login'),
]
