from django.urls import path
from .views import register_user, login_user,get_company_profile,CompanyProfileSave,PostJob,job_list,job_detail,delete_job,update_job,get_jobseeker_profile,save_jobseeker_profile ,get_all_jobs,apply_for_job,get_applied_jobs,employer_view_applicants
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
    path('jobseeker-profile/get/', get_jobseeker_profile, name='get_jobseeker_profile'),
    path('jobseeker-profile/save/', save_jobseeker_profile, name='save_jobseeker_profile'),
    path('jobs/', get_all_jobs, name='get_all_jobs'),
    path('apply-job/<int:job_id>/', apply_for_job, name='apply_for_job'),
    path('applied-jobs/', get_applied_jobs, name='get_applied_jobs'),
   
    path("employer/applicants/", employer_view_applicants),


]
