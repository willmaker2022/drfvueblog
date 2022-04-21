# Generated by Django 3.2.9 on 2021-11-22 04:57

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Productplan',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('orderid', models.CharField(max_length=10)),
                ('productid', models.CharField(max_length=10)),
                ('serial', models.IntegerField()),
                ('customer', models.CharField(max_length=20)),
                ('startday', models.DateField(auto_now=True)),
                ('endday', models.DateField()),
                ('updated', models.DateTimeField(auto_now=True)),
            ],
        ),
    ]
