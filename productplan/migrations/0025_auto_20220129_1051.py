# Generated by Django 3.2.9 on 2022-01-29 10:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('productplan', '0024_auto_20220129_1049'),
    ]

    operations = [
        migrations.AlterField(
            model_name='processassemble',
            name='startday',
            field=models.DateField(null=True, verbose_name='下单时间'),
        ),
        migrations.AlterField(
            model_name='processelprepare',
            name='startday',
            field=models.DateField(null=True, verbose_name='下单时间'),
        ),
        migrations.AlterField(
            model_name='processmeprepare',
            name='startday',
            field=models.DateField(null=True, verbose_name='下单时间'),
        ),
        migrations.AlterField(
            model_name='processscprepare',
            name='startday',
            field=models.DateField(null=True, verbose_name='下单时间'),
        ),
        migrations.AlterField(
            model_name='processtesting',
            name='startday',
            field=models.DateField(null=True, verbose_name='下单时间'),
        ),
        migrations.AlterField(
            model_name='productplan',
            name='startday',
            field=models.DateField(null=True, verbose_name='下单时间'),
        ),
    ]
