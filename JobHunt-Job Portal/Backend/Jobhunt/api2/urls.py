from django.urls import path
from .views import register_user, login_user,get_company_profile,CompanyProfileSave,PostJob,job_list,job_detail,delete_job,update_job # use the correct function names

urlpatterns = [
    path('register/', register_user, name='register'),
    path('login/', login_user, name='login'),
    path('company-profile/save/', CompanyProfileSave.as_view()),
    path('company-profile/get/', get_company_profile),
    path('job/post/', PostJob.as_view()),
    path('job/list/', job_list),
    path('job/<int:job_id>/', job_detail, name='job_detail'),
    path('job/<int:job_id>/delete/', delete_job),
    path('job/<int:job_id>/update/', update_job),


]
