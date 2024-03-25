from django.db import models

# Create your models here.
# Hero slider dynamic
class HeroSlider (models.Model):
    title = models.CharField(max_length=500)
    subTitle = models.CharField(max_length=900)
    heroImage = models.ImageField(upload_to='Hero')
    def __str__(self):
        return self.title
    
class SpecialEvent(models.Model):
    title = models.CharField(max_length=500)
    description = models.TextField(blank=True)
    image = models.ImageField(upload_to='Event')
    startDate = models.DateField()
    endDate = models.DateField()
    def __str__(self):
        return self.title