# Generated by Django 3.2.9 on 2021-12-11 11:16

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('storage', '0017_auto_20211211_1914'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='avatar',
            options={'ordering': ('-updated',)},
        ),
    ]
