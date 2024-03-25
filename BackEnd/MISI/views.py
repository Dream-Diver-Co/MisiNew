from django.shortcuts import render
from .models import HeroSlider,SpecialEvent
from .serializers import HeroSlideSerializer,SpecialEventSerializer
from rest_framework.generics import GenericAPIView
from rest_framework.mixins import ListModelMixin
# Create your views here.
class HeroSlider(GenericAPIView, ListModelMixin):
    queryset = HeroSlider.objects.all()
    serializer_class = HeroSlideSerializer
    
    def get(self, req ,*args, **kwargs ):
        return self.list(req ,*args, **kwargs)
class SpecialEvent(GenericAPIView, ListModelMixin):
    queryset = SpecialEvent.objects.all()
    serializer_class = SpecialEventSerializer
    
    def get(self, req ,*args, **kwargs ):
        return self.list(req ,*args, **kwargs)