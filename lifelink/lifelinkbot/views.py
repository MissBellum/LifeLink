from django.shortcuts import render
# from django.http import JsonResponse
# from .models import UserMessage, BotResponse

import os
from dotenv import load_dotenv
import google.generativeai as gen_ai
from time import timezone
# Create your views here.
load_dotenv()

gen_ai.configure(api_key = os.getenv('API_KEY'))

def generate(prompt):
    model = gen_ai.GenerativeModel("gemini-1.5-flash")
    response = model.generate_content(prompt)
    return response.text

# print(generate('tell me a story about Chisom in 10 lines'))


# async def get_help(request):
#     if request.method == 'POST':
#         prompt = request.POST.get('prompt')
        
#         # create user prompt and store in database
#         user_prompt = UserMessage.objects.create(message=prompt, created_at=timezone.now())
#         user_prompt.save()
        
#         # generate AI response
#         response =  await generate(prompt)
        
#         # create and store bot response
#         bot_response = BotResponse.objects.create(response=response)
#         bot_response.save()
        
#         return JsonResponse({'response': response})
    
