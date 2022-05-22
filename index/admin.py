from django.contrib import admin
from .models import Contact, Appointment

# Register your models here.
class ContactAdmin(admin.ModelAdmin):
    list_display = ( 'email', 'subject' )

class AppointmentAdmin(admin.ModelAdmin):
    readonly_fields = ('appointmentdate', 'phone')

admin.site.register(Contact, ContactAdmin)
admin.site.register(Appointment, AppointmentAdmin)