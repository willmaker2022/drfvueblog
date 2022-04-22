# Generated by Django 3.2.9 on 2022-04-21 16:13

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('productplan', '0033_auto_20220421_1550'),
    ]

    operations = [
        migrations.CreateModel(
            name='ProcessBilling',
            fields=[
                ('startday', models.DateField(null=True, verbose_name='下单时间')),
                ('endday', models.DateField(null=True, verbose_name='交货时间')),
                ('remark', models.TextField(default='', verbose_name='备注')),
                ('status', models.CharField(choices=[('pending', '未开始'), ('process', '进行中'), ('finish', '已完成')], default='pending', max_length=10, verbose_name='订单状态')),
                ('orderid', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, primary_key=True, related_name='probi', serialize=False, to='productplan.productplan', verbose_name='订单号')),
                ('updated', models.DateTimeField(auto_now=True)),
            ],
            options={
                'verbose_name_plural': '开票',
                'ordering': ('-updated',),
            },
        ),
        migrations.CreateModel(
            name='ProcessDeliver',
            fields=[
                ('startday', models.DateField(null=True, verbose_name='下单时间')),
                ('endday', models.DateField(null=True, verbose_name='交货时间')),
                ('remark', models.TextField(default='', verbose_name='备注')),
                ('status', models.CharField(choices=[('pending', '未开始'), ('process', '进行中'), ('finish', '已完成')], default='pending', max_length=10, verbose_name='订单状态')),
                ('orderid', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, primary_key=True, related_name='prodi', serialize=False, to='productplan.productplan', verbose_name='订单号')),
                ('updated', models.DateTimeField(auto_now=True)),
            ],
            options={
                'verbose_name_plural': '发货',
                'ordering': ('-updated',),
            },
        ),
        migrations.CreateModel(
            name='ProcessPayment',
            fields=[
                ('startday', models.DateField(null=True, verbose_name='下单时间')),
                ('endday', models.DateField(null=True, verbose_name='交货时间')),
                ('remark', models.TextField(default='', verbose_name='备注')),
                ('status', models.CharField(choices=[('pending', '未开始'), ('process', '进行中'), ('finish', '已完成')], default='pending', max_length=10, verbose_name='订单状态')),
                ('orderid', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, primary_key=True, related_name='propm', serialize=False, to='productplan.productplan', verbose_name='订单号')),
                ('updated', models.DateTimeField(auto_now=True)),
            ],
            options={
                'verbose_name_plural': '付款',
                'ordering': ('-updated',),
            },
        ),
        migrations.CreateModel(
            name='ProcessSoftware',
            fields=[
                ('startday', models.DateField(null=True, verbose_name='下单时间')),
                ('endday', models.DateField(null=True, verbose_name='交货时间')),
                ('remark', models.TextField(default='', verbose_name='备注')),
                ('status', models.CharField(choices=[('pending', '未开始'), ('process', '进行中'), ('finish', '已完成')], default='pending', max_length=10, verbose_name='订单状态')),
                ('orderid', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, primary_key=True, related_name='prosw', serialize=False, to='productplan.productplan', verbose_name='订单号')),
                ('updated', models.DateTimeField(auto_now=True)),
            ],
            options={
                'verbose_name_plural': '软件',
                'ordering': ('-updated',),
            },
        ),
    ]