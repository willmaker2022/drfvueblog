# Generated by Django 3.2.9 on 2021-12-11 11:17

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('storage', '0018_alter_avatar_options'),
    ]

    operations = [
        migrations.AlterField(
            model_name='lendstorage',
            name='avatar',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='storage', to='storage.avatar'),
        ),
    ]
