from django.urls import path
from django.views.generic import TemplateView
from . import views

urlpatterns = [
    path('', TemplateView.as_view(template_name='react/index.html'), name='index'),
    # path('get-help/', views.get_help, name='get-help'),
    
]