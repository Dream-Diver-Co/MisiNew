from rest_framework import serializers
from .models import HeroSlider,SpecialEvent

class HeroSlideSerializer(serializers.ModelSerializer):
    class Meta:
        model = HeroSlider 
        fields = '__all__'  
        
class SpecialEventSerializer(serializers.ModelSerializer):
    class Meta:
        model = SpecialEvent
        fields = '__all__'
