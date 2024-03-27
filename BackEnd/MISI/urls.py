from django.urls import path
from .views import HeroSlider,SpecialEvent,Service,Award
urlpatterns =[
    path('hero-slider/',HeroSlider.as_view()),
    path('award/',Award.as_view()),
    path('special-event/',SpecialEvent.as_view()),
    path('service/',Service.as_view()),
]