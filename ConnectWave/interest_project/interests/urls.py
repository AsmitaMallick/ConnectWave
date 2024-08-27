from django.urls import path
from . import views

urlpatterns = [
    path('send/', views.SendInterestView.as_view(), name='send_interest'),
    path('received/', views.ReceivedInterestsView.as_view(), name='received_interests'),
]
