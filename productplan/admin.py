from django.contrib import admin
from .models import Productplan, ProcessAssemble, ProcessElPrepare, ProcessMePrepare, \
    ProcessScPrepare, ProcessTesting, ProductHistory, ProcessBilling, ProcessDeliver, \
    ProcessPayment, ProcessSoftware, ProcessDueing

# Register your models here.
admin.site.register(Productplan)
admin.site.register(ProcessAssemble)
admin.site.register(ProcessElPrepare)
admin.site.register(ProcessMePrepare)
admin.site.register(ProcessScPrepare)
admin.site.register(ProcessTesting)
admin.site.register(ProductHistory)
admin.site.register(ProcessSoftware)
admin.site.register(ProcessDeliver)
admin.site.register(ProcessPayment)
admin.site.register(ProcessBilling)
admin.site.register(ProcessDueing)
