from django.shortcuts import render
from .serializers import ProductplanSerializer, ProcessTestingSerializer, \
    ProcessAssembleSerializer, ProcessElPrepareSerializer, ProcessMePrepareSerializer, \
    ProcessScPrepareSerializer, ProductHistorySerializer, ProcessDueingSerializer,\
    ProcessSoftwareSerializer, ProcessPaymentSerializer, ProcessDeliverSerializer, ProcessBillingSerializer

# Create your views here.
from rest_framework import viewsets
from .models import Productplan, ProcessTesting, ProcessAssemble, ProcessElPrepare, \
    ProcessMePrepare, ProcessScPrepare, ProductHistory, ProcessSoftware, ProcessBilling, \
    ProcessPayment, ProcessDeliver, ProcessDueing

from rest_framework import filters


# 订单计划表
class ProductViewSet(viewsets.ModelViewSet):
    queryset = Productplan.objects.all()
    serializer_class = ProductplanSerializer

    filter_backends = [filters.SearchFilter]
    # search_fields = ['orderid__orderid', 'orderid__customer']
    search_fields = ['orderid', 'customer']


# 电路板
class ProcessElPrepareViewSet(viewsets.ModelViewSet):
    queryset = ProcessElPrepare.objects.all()
    serializer_class = ProcessElPrepareSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['orderid__orderid', 'orderid__customer']


# 机械件
class ProcessMePrepareViewSet(viewsets.ModelViewSet):
    queryset = ProcessMePrepare.objects.all()
    serializer_class = ProcessMePrepareSerializer

    filter_backends = [filters.SearchFilter]
    search_fields = ['orderid__orderid', 'orderid__customer']


# 干涉仪
class ProcessScPrepareViewSet(viewsets.ModelViewSet):
    queryset = ProcessScPrepare.objects.all()
    serializer_class = ProcessScPrepareSerializer

    filter_backends = [filters.SearchFilter]
    search_fields = ['orderid__orderid', 'orderid__customer']


# 装配
class ProcessAssembleViewSet(viewsets.ModelViewSet):
    queryset = ProcessAssemble.objects.all()
    serializer_class = ProcessAssembleSerializer

    filter_backends = [filters.SearchFilter]
    search_fields = ['orderid__orderid', 'orderid__customer']


# 测试
class ProcessTestingViewSet(viewsets.ModelViewSet):
    queryset = ProcessTesting.objects.all()
    serializer_class = ProcessTestingSerializer

    filter_backends = [filters.SearchFilter]
    search_fields = ['orderid__orderid', 'orderid__customer']


# 软件
class ProcessSoftwareViewSet(viewsets.ModelViewSet):
    queryset = ProcessSoftware.objects.all()
    serializer_class = ProcessSoftwareSerializer

    filter_backends = [filters.SearchFilter]
    search_fields = ['orderid__orderid', 'orderid__customer']


# 付款
class ProcessPaymentViewSet(viewsets.ModelViewSet):
    queryset = ProcessPayment.objects.all()
    serializer_class = ProcessPaymentSerializer

    filter_backends = [filters.SearchFilter]
    search_fields = ['orderid__orderid', 'orderid__customer']


# 发货
class ProcessDeliverViewSet(viewsets.ModelViewSet):
    queryset = ProcessDeliver.objects.all()
    serializer_class = ProcessDeliverSerializer

    filter_backends = [filters.SearchFilter]
    search_fields = ['orderid__orderid', 'orderid__customer']


# 开票
class ProcessBillingViewSet(viewsets.ModelViewSet):
    queryset = ProcessBilling.objects.all()
    serializer_class = ProcessBillingSerializer

    filter_backends = [filters.SearchFilter]
    search_fields = ['orderid__orderid', 'orderid__customer']


# 尾款
class ProcessDueingViewSet(viewsets.ModelViewSet):
    queryset = ProcessDueing.objects.all()
    serializer_class = ProcessDueingSerializer

    filter_backends = [filters.SearchFilter]
    search_fields = ['orderid__orderid', 'orderid__customer']


# 订单历史
class ProductHistoryViewSet(viewsets.ModelViewSet):
    queryset = ProductHistory.objects.all()
    serializer_class = ProductHistorySerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['orderid__orderid']

    def perform_create(self, serializer):
        # print(self.request.user)
        serializer.save(user=self.request.user)
