from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    # path('get-help/', views.get_help, name='get-help'),
    
]