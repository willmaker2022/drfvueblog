import datetime

from rest_framework import serializers
from .models import Productplan, ProcessTesting, ProcessScPrepare, \
    ProcessMePrepare, ProcessElPrepare, ProcessAssemble, ProductHistory, \
    ProcessBilling, ProcessDeliver, ProcessPayment, ProcessSoftware
from user_info.serializers import UserDescSerializer


# 订单计划
class ProductplanSerializer(serializers.HyperlinkedModelSerializer):
    url = serializers.HyperlinkedIdentityField(view_name='productplan-detail')
    id = serializers.IntegerField(read_only=True)
    # 获取干涉仪状态
    scsta = serializers.SerializerMethodField()
    # 获取电路板状态
    elsta = serializers.SerializerMethodField()
    # 获取机械件状态
    mesta = serializers.SerializerMethodField()
    # 获取装配状态
    assta = serializers.SerializerMethodField()
    # 获取测试状态
    tssta = serializers.SerializerMethodField()
    # 获取软件状态
    swsta = serializers.SerializerMethodField()
    # 获取付款状态
    pmsta = serializers.SerializerMethodField()
    # 获取发货状态
    dista = serializers.SerializerMethodField()
    # 获取开票状态
    bista = serializers.SerializerMethodField()
    # 获取订单历史状态
    producthistory = serializers.SerializerMethodField()

    class Meta:
        model = Productplan
        fields = '__all__'

    def get_scsta(self, productplan_obj):
        try:
            status = productplan_obj.prosc
        except :
            status = None
        if status:
            return status.status
        return 'pending'

    def get_elsta(self, productplan_obj):
        try:
            status = productplan_obj.proel
        except :
            status = None
        if status:
            return status.status
        return 'pending'

    def get_mesta(self, productplan_obj):
        try:
            status = productplan_obj.prome
        except :
            status = None
        if status:
            return status.status
        return 'pending'

    def get_assta(self, productplan_obj):
        try:
            status = productplan_obj.proas
        except :
            status = None
        if status:
            return status.status
        return 'pending'

    def get_tssta(self, productplan_obj):
        try:
            status = productplan_obj.prots
        except :
            status = None
        if status:
            return status.status
        return 'pending'

    def get_swsta(self, productplan_obj):
        try:
            status = productplan_obj.prosw
        except :
            status = None
        if status:
            return status.status
        return 'pending'

    def get_pmsta(self, productplan_obj):
        try:
            status = productplan_obj.propm
        except :
            status = None
        if status:
            return status.status
        return 'pending'

    def get_dista(self, productplan_obj):
        try:
            status = productplan_obj.prodi
        except :
            status = None
        if status:
            return status.status
        return 'pending'

    def get_bista(self, productplan_obj):
        try:
            status = productplan_obj.probi
        except :
            status = None
        if status:
            return status.status
        return 'pending'

    def get_producthistory(self, productplan_obj):
        query_set = productplan_obj.product_history.all()
        return [{'proitem': obj.proitem, 'user': obj.user.username, 'newcontent': obj.newcontent,
                 'operateday': obj.operateday + datetime.timedelta(hours=8)
                 } for obj in query_set]


# 干涉仪
class ProcessScPrepareSerializer(serializers.HyperlinkedModelSerializer):
    id = serializers.IntegerField(read_only=True)
    orderid = ProductplanSerializer(read_only=True)
    orderid_id = serializers.IntegerField(write_only=True, allow_null=False, required=True)

    class Meta:
        model = ProcessScPrepare
        fields = '__all__'


# 机械件
class ProcessMePrepareSerializer(serializers.HyperlinkedModelSerializer):
    id = serializers.IntegerField(read_only=True)
    orderid = ProductplanSerializer(read_only=True)
    orderid_id = serializers.IntegerField(write_only=True, allow_null=False, required=True)

    class Meta:
        model = ProcessMePrepare
        fields = '__all__'


# 电路板
class ProcessElPrepareSerializer(serializers.HyperlinkedModelSerializer):
    id = serializers.IntegerField(read_only=True)
    orderid = ProductplanSerializer(read_only=True)
    orderid_id = serializers.IntegerField(write_only=True, allow_null=False, required=True)

    class Meta:
        model = ProcessElPrepare
        fields = '__all__'


# 装配
class ProcessAssembleSerializer(serializers.HyperlinkedModelSerializer):
    id = serializers.IntegerField(read_only=True)
    orderid = ProductplanSerializer(read_only=True)
    orderid_id = serializers.IntegerField(write_only=True, allow_null=False, required=True)

    class Meta:
        model = ProcessAssemble
        fields = '__all__'


# 测试
class ProcessTestingSerializer(serializers.HyperlinkedModelSerializer):
    id = serializers.IntegerField(read_only=True)
    orderid = ProductplanSerializer(read_only=True)
    orderid_id = serializers.IntegerField(write_only=True, allow_null=False, required=True)

    class Meta:
        model = ProcessTesting
        fields = '__all__'


# 付款
class ProcessPaymentSerializer(serializers.HyperlinkedModelSerializer):
    id = serializers.IntegerField(read_only=True)
    orderid = ProductplanSerializer(read_only=True)
    orderid_id = serializers.IntegerField(write_only=True, allow_null=False, required=True)

    class Meta:
        model = ProcessPayment
        fields = '__all__'


# # 软件
class ProcessSoftwareSerializer(serializers.HyperlinkedModelSerializer):
    id = serializers.IntegerField(read_only=True)
    orderid = ProductplanSerializer(read_only=True)
    orderid_id = serializers.IntegerField(write_only=True, allow_null=False, required=True)

    class Meta:
        model = ProcessSoftware
        fields = '__all__'


# 发货
class ProcessDeliverSerializer(serializers.HyperlinkedModelSerializer):
    id = serializers.IntegerField(read_only=True)
    orderid = ProductplanSerializer(read_only=True)
    orderid_id = serializers.IntegerField(write_only=True, allow_null=False, required=True)

    class Meta:
        model = ProcessDeliver
        fields = '__all__'


# 开票
class ProcessBillingSerializer(serializers.HyperlinkedModelSerializer):
    id = serializers.IntegerField(read_only=True)
    orderid = ProductplanSerializer(read_only=True)
    orderid_id = serializers.IntegerField(write_only=True, allow_null=False, required=True)

    class Meta:
        model = ProcessBilling
        fields = '__all__'


# 订单历史
class ProductHistorySerializer(serializers.HyperlinkedModelSerializer):
    id = serializers.IntegerField(read_only=True)
    orderid = ProductplanSerializer(read_only=True)
    orderid_id = serializers.IntegerField(write_only=True, allow_null=False, required=True)
    user = UserDescSerializer(read_only=True)

    class Meta:
        model = ProductHistory
        fields = '__all__'
