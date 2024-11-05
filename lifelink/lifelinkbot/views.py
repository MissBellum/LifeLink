from django.shortcuts import render
from django.http import JsonResponse
from .models import UserMessage, BotResponse

import os
from dotenv import load_dotenv
import google.generativeai as gen_ai
# Create your views here.
load_dotenv()

gen_ai.configure(api_key = os.getenv('API_KEY'))

def generate(prompt):
    model = gen_ai.GenerativeModel("gemini-1.5-flash")
    response = model.generate_content(prompt)
    return prompt

# print(response.text)

def home(request):
    return render(request, 'home.html')

def get_help(request):
    if request.method == 'POST':
        prompt = request.POST.get('prompt')
        user_prompt = UserMessage.objects.create(prompt=prompt)
        response = generate(prompt)
        return JsonResponse({'response': response})
    
