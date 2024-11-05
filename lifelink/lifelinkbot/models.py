from django.db import models

# Create your models here.

class UserMessage(models.Model):
    message = models.TextField(max_length=800)
    created_at = models.TimeField(auto_now_add=True)
    
    def __str__(self):
        return f'{self.message}, {self.created_at}'
    
    
class BotResponse(models.Model):
    response = models.TextField()
    # help_type = models.Choices()
    
    def __str__(self):
        return self.response
    
