from django.urls import path
from .views import TaskCreateView

urlpatterns = [
    path('task/', TaskCreateView.as_view(), name='task_create')
]
