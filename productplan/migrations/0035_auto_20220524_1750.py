# Generated by Django 3.2.9 on 2022-05-24 17:50

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('productplan', '0034_auto_20220423_2357'),
    ]

    operations = [
        migrations.CreateModel(
            name='ProcessDueing',
            fields=[
                ('startday', models.DateField(null=True, verbose_name='下单时间')),
                ('endday', models.DateField(null=True, verbose_name='交货时间')),
                ('remark', models.TextField(default='', verbose_name='备注')),
                ('status', models.CharField(choices=[('pending', '未开始'), ('process', '进行中'), ('finish', '已完成')], default='pending', max_length=10, verbose_name='订单状态')),
                ('orderid', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, primary_key=True, related_name='produe', serialize=False, to='productplan.productplan')),
                ('updated', models.DateTimeField(auto_now=True)),
            ],
            options={
                'verbose_name_plural': '尾款',
                'ordering': ('-updated',),
            },
        ),
        migrations.AddField(
            model_name='productplan',
            name='conffile',
            field=models.FileField(blank=True, upload_to='service_files/%Y%m%d/'),
        ),
    ]
