# Generated by Django 3.2.9 on 2021-12-09 14:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('storage', '0003_auto_20211209_2220'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='storage',
            options={'ordering': ('-updated',)},
        ),
        migrations.AddField(
            model_name='storage',
            name='updated',
            field=models.DateTimeField(auto_now=True, null=True),
        ),
    ]
