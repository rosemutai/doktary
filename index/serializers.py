from email import message
from enum import unique
from pyexpat import model
from rest_framework import serializers
from rest_framework.serializers import ValidationError
from rest_framework.validators import UniqueForDateValidator

from .models import Contact, Appointment

class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = '__all__'

class BookAppointmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Appointment
        fields = '__all__'

        validators = [
            UniqueForDateValidator(
                queryset=Appointment.objects.all(),
                field='appointmentdate',
                date_field='appointmentdate',
                message='The date is already taken, choose another one'

            )
        ]