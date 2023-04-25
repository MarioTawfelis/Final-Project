from rest_framework import serializers
from .models import Product, Tag

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ('id', 'name', 'friendly_name')

class ProductSerializer(serializers.ModelSerializer):
    tags = TagSerializer(many=True, read_only=True)

    class Meta:
        model = Product
        fields = ('id', 'sku', 'name', 'tags', 'description', 'has_sizes', 'inventory_count', 'retail_price', 'image', 'image_url', 'rating')
