from django.contrib import admin
from .models import HeroSlider,SpecialEvent,Service,Award
# Register your models here.
admin.site.register(HeroSlider)
admin.site.register(Award)
admin.site.register(SpecialEvent)
admin.site.register(Service)