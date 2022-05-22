from django.urls import path
from .views import contact_view, book_appointment, index

urlpatterns = [
    path('', index, name='index'),
    path('contact/', contact_view, name="contact"),
    path('book-appointment/', book_appointment, name="book-appointment")
]