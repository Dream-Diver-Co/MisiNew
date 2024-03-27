from rest_framework import serializers
from .models import HeroSlider,SpecialEvent,Service,Award

class HeroSlideSerializer(serializers.ModelSerializer):
    class Meta:
        model = HeroSlider 
        fields = '__all__'  
class AwardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Award 
        fields = '__all__'  
        
class SpecialEventSerializer(serializers.ModelSerializer):
    class Meta:
        model = SpecialEvent
        fields = '__all__'
class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = '__all__'
