from django.db import models

# Create your models here.
# Hero slider dynamic
class HeroSlider (models.Model):
    title = models.TextField()
    subTitle = models.TextField()
    heroImage = models.ImageField(upload_to='Hero')
    def __str__(self):
        return self.name