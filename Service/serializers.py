import datetime
from rest_framework import serializers
from .models import Service,BatchNo
from user_info.serializers import UserDescSerializer
from productplan.serializers import ProductplanSerializer

#维修报告
class ServiceSerializer(serializers.HyperlinkedModelSerializer):
    id = serializers.IntegerField(read_only=True)
    orderid = ProductplanSerializer(read_only=True)
    orderid_id = serializers.IntegerField(write_only=True, allow_null=True, required=False)
    user = UserDescSerializer(read_only=True)
    class Meta:
        model = Service
        fields = '__all__'


#编号生成
class BatchNoSerializer(serializers.HyperlinkedModelSerializer):
    id = serializers.IntegerField(read_only=True)
    class Meta:
        model = BatchNo
        fields = '__all__'