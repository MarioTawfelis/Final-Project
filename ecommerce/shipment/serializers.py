from rest_framework import serializers
from .models import Shipment, ShipmentLineItem
from products.serializers import ProductSerializer


class ShipmentSerializer(serializers.ModelSerializer):
    shipmentlineitem_set = serializers.PrimaryKeyRelatedField(
        many=True, read_only=True
    )

    class Meta:
        model = Shipment
        fields = "__all__"


class ShipmentLineItemSerializer(serializers.ModelSerializer):
    product = ProductSerializer

    class Meta:
        model = ShipmentLineItem
        fields = "__all__"
