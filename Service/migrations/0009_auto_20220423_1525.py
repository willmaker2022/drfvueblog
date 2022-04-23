# Generated by Django 3.2.9 on 2022-04-23 07:25

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('Service', '0008_alter_service_created'),
    ]

    operations = [
        migrations.AlterField(
            model_name='batchno',
            name='created',
            field=models.DateTimeField(default=datetime.datetime(2022, 4, 23, 7, 25, 53, 216841, tzinfo=utc), null=True, verbose_name='创建时间'),
        ),
        migrations.AlterField(
            model_name='service',
            name='created',
            field=models.DateTimeField(default=datetime.datetime(2022, 4, 23, 7, 25, 53, 215846, tzinfo=utc), null=True, verbose_name='创建时间'),
        ),
    ]