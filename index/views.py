from django.http import HttpResponse
from django.shortcuts import render
from django.core.mail import send_mail, BadHeaderError
from django.http import HttpResponse, HttpResponseNotFound
import os
from django.views import View
from django.views.generic import TemplateView
from django.views.decorators.cache import never_cache


from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .serializers import ContactSerializer, BookAppointmentSerializer

# Create your views here.

# Serve Single Page Application
index = never_cache(TemplateView.as_view(template_name='index.html'))

@api_view(['POST', ])
def contact_view(request):
    if request.method == 'POST':
        serializer_class = ContactSerializer(data=request.data)
        if serializer_class.is_valid():
            name = request.POST.get('name')
            email = request.POST.get('email')
            subject = request.POST.get('subject')
            message = request.POST.get('message')
            try:
                send_mail(
                    # "Email from: " + name,
                    subject,
                    message,
                    email,
                    ['debrawrites03@gmail.com'],
                    fail_silently=False,
                )
            except BadHeaderError:
                return HttpResponse('Invalid header found')
            serializer_class.save()
            return Response(serializer_class.data, status=status.HTTP_201_CREATED)
        return Response(serializer_class.errors, status=status.HTTP_400_BAD_REQUEST)
 
@api_view(['POST',])
def book_appointment(request):
    if request.method == 'POST':
        serializer_class = BookAppointmentSerializer(data=request.data)
        if serializer_class.is_valid():
            firstname = request.POST.get('firstname')
            lastname = request.POST.get('lastname')
            email = request.POST.get('email')
            phone = request.POST.get('phone')
            appointmentdate  = request.POST.get('appointmentdate')
            
            # if appointmentdate.exists:
            #     print("Date already taken")
            serializer_class.save()
            return Response(serializer_class.data, status=status.HTTP_201_CREATED)
        return Response(serializer_class.errors, status=status.HTTP_400_BAD_REQUEST)

class Assets(View):

    def get(self, _request, filename):
        path = os.path.join(os.path.dirname(__file__), 'static', filename)

        if os.path.isfile(path):
            with open(path, 'rb') as file:
                return HttpResponse(file.read(), content_type='application/javascript')
        else:
            return HttpResponseNotFound()