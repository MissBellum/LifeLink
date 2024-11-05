from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('lifelinkbot/', views.generate, name='lifelinkbot'),
    
]