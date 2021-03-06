# Generated by Django 3.2.9 on 2022-02-23 07:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Service', '0004_auto_20220223_1538'),
    ]

    operations = [
        migrations.AddField(
            model_name='service',
            name='actions',
            field=models.TextField(blank=True, default='', null=True, verbose_name='操作内容'),
        ),
        migrations.AddField(
            model_name='service',
            name='results',
            field=models.CharField(choices=[('process', '进行中'), ('finish', '已完成')], default='process', max_length=10, verbose_name='维修结果'),
        ),
    ]
