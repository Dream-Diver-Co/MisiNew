from django.shortcuts import render
from .models import HeroSlider,SpecialEvent,Service
from .serializers import HeroSlideSerializer,SpecialEventSerializer,ServiceSerializer
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
class Service(GenericAPIView, ListModelMixin):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer
    
    def get(self, req ,*args, **kwargs ):
        return self.list(req ,*args, **kwargs)