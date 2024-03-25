from django.db import models

# Create your models here.
# Hero slider dynamic
class HeroSlider (models.Model):
    title = models.CharField(max_length=500)
    subTitle = models.CharField(max_length=900)
    heroImage = models.ImageField(upload_to='Hero')
    def __str__(self):
        return self.title