from rest_framework.parsers import JSONParser, MultiPartParser
from django.shortcuts import render, HttpResponse
from rest_framework import viewsets
from .models import Service,BatchNo
from .serializers import ServiceSerializer,BatchNoSerializer
from rest_framework import filters
# Create your views here.
#维修报告
class ServiceViewSet(viewsets.ModelViewSet):

    queryset = Service.objects.all()
    serializer_class = ServiceSerializer

    filter_backends = [filters.SearchFilter]
    search_fields = ['orderid__orderid', 'orderid__customer','orderid__serial']

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

#编号生产
class BatchNoViewSet(viewsets.ModelViewSet):

    queryset = BatchNo.objects.all()
    serializer_class = BatchNoSerializer

    filter_backends = [filters.SearchFilter]
    search_fields = ['description', 'batchno']
