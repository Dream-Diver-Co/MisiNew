# Generated by Django 5.0.3 on 2024-03-27 04:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('MISI', '0004_service_alter_specialevent_description'),
    ]

    operations = [
        migrations.AlterField(
            model_name='service',
            name='image',
            field=models.ImageField(upload_to='Service'),
        ),
    ]