from django.urls import path
from .views import HeroSlider
urlpatterns =[
    path('hero-slider/',HeroSlider.as_view()),
]