from django.contrib import admin
from .models import Shipment, ShipmentLineItem

admin.site.register(Shipment)
admin.site.register(ShipmentLineItem)
