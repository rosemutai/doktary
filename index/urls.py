from django.urls import path
from .views import contact_view, book_appointment, index
from django.contrib.staticfiles.urls import staticfiles_urlpatterns


urlpatterns = [
    path('', index, name='index'),
    path('contact/', contact_view, name="contact"),
    path('book-appointment/', book_appointment, name="book-appointment")
]
urlpatterns += staticfiles_urlpatterns()