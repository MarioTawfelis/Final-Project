from django.shortcuts import render
from rest_framework import generics
from .models import Shipment, ShipmentLineItem
from .serializers import ShipmentSerializer, ShipmentLineItemSerializer


class ShipmentListCreateView(generics.ListCreateAPIView):
    queryset = Shipment.objects.all()
    serializer_class = ShipmentSerializer


class ShipmentRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Shipment.objects.all()
    serializer_class = ShipmentSerializer


class ShipmentLineItemListCreateView(generics.ListCreateAPIView):
    queryset = ShipmentLineItem.objects.all()
    serializer_class = ShipmentLineItemSerializer


class ShipmentLineItemRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = ShipmentLineItem.objects.all()
    serializer_class = ShipmentLineItemSerializer
