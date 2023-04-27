from rest_framework import serializers
from .models import Product, Tag


class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ('name', 'friendly_name')



class ProductSerializer(serializers.ModelSerializer):
    print(333)
  
    tags = TagSerializer(many=True, required=False)

    class Meta:
        model = Product
        fields = '__all__'
        #['sku', 'name', 'description', 'has_sizes', 'inventory_count', 'price', 'image', 'image_url', 'rating']
        print(fields)

    def create(self, validated_data):
        tags = validated_data.pop('tags', [])
        product = Product.objects.create(**validated_data)
        
        return product   


