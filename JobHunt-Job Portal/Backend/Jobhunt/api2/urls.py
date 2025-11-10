from django.urls import path
from .views import register_user, login_user,get_company_profile,CompanyProfileSave  # use the correct function names

urlpatterns = [
    path('register/', register_user, name='register'),
    path('login/', login_user, name='login'),
    path('company-profile/save/', CompanyProfileSave.as_view()),
    path('company-profile/get/', get_company_profile),
]
