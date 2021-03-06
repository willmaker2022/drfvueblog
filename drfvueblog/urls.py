"""drfvueblog URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include

from rest_framework.routers import DefaultRouter
from django.conf import settings
from django.conf.urls.static import static
from user_info.views import UserViewSet
from productplan.views import ProductViewSet, ProcessTestingViewSet, ProcessAssembleViewSet, \
    ProcessElPrepareViewSet, ProcessMePrepareViewSet, ProcessScPrepareViewSet, ProductHistoryViewSet, \
    ProcessSoftwareViewSet, ProcessBillingViewSet, ProcessDeliverViewSet, ProcessPaymentViewSet, ProcessDueingViewSet
from storage.views import StorageViewSet, InOutStorageViewSet
from Service.views import ServiceViewSet, BatchNoViewSet
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

router = DefaultRouter()
router.register(r'user', UserViewSet)
# 订单管理
router.register(r'home/product', ProductViewSet)
router.register(r'home/processelprepare', ProcessElPrepareViewSet)
router.register(r'home/processmeprepare', ProcessMePrepareViewSet)
router.register(r'home/processscprepare', ProcessScPrepareViewSet)
router.register(r'home/processassemble', ProcessAssembleViewSet)
router.register(r'home/processpayment', ProcessPaymentViewSet)
router.register(r'home/processtesting', ProcessTestingViewSet)
router.register(r'home/processdeliver', ProcessDeliverViewSet)
router.register(r'home/processsoftware', ProcessSoftwareViewSet)
router.register(r'home/processbilling', ProcessBillingViewSet)
router.register(r'home/processdueing', ProcessDueingViewSet)
router.register(r'home/producthistory', ProductHistoryViewSet)
# 库存管理
router.register(r'home/storage', StorageViewSet)
router.register(r'home/inoutstorage', InOutStorageViewSet)
# 维修记录
router.register(r'home/service', ServiceViewSet)
router.register(r'home/batchno', BatchNoViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('api/', include(router.urls)),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
