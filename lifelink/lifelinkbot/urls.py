from django.urls import path
from . import views

urlpatterns = [
    # path('', views.home, name='home'),
    path('get-help/', views.get_help, name='get-help'),
    
]