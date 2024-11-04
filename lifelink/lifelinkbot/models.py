from django.db import models

# Create your models here.

class UserMessage(models.Model):
    message = models.TextField(max_length=800)
    created_at = models.TimeField(auto_now_add=True)
    
class BotResponse(models.Model):
    response = models.TextField()
