# from django.shortcuts import render
# from django.http import JsonResponse
# from .models import UserMessage, BotResponse

import os
from dotenv import load_dotenv
import google.generativeai as gen_ai
# Create your views here.
load_dotenv()

gen_ai.configure(api_key = os.getenv('API_KEY'))

model = gen_ai.GenerativeModel("gemini-1.5-flash")
response = model.generate_content("Write a story about a magic backpack.")
print(response.text)
# def send_message(request):
#     if request.method == 'POST':
#         message = request.POST.get
