from django.shortcuts import render
from .models import HeroSlider
from .serializers import HeroSlideSerializer
from rest_framework.generics import GenericAPIView
from rest_framework.mixins import ListModelMixin
# Create your views here.
class HeroSlider(GenericAPIView, ListModelMixin):
    queryset = HeroSlider.objects.all()
    serializer_class = HeroSlideSerializer
    
    def get(self, req ,*args, **kwargs ):
        return self.list(req ,*args, **kwargs)