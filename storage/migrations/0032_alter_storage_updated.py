# Generated by Django 3.2.9 on 2022-02-06 22:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('storage', '0031_auto_20220108_2223'),
    ]

    operations = [
        migrations.AlterField(
            model_name='storage',
            name='updated',
            field=models.DateField(auto_now=True, null=True, verbose_name='更新时间'),
        ),
    ]
