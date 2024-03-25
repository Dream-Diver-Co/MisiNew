from rest_framework import serializers
from .models import HeroSlider 

class HeroSlideSerializer(serializers.ModelSerializer):
    class Meta:
        model = HeroSlider 
        fields = '__all__'  
