from rest_framework import serializers
from .models import Product, Tag


class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ('name', 'friendly_name')



class ProductSerializer(serializers.ModelSerializer):


    tags = TagSerializer()

    def create(self, validated_data):
        tags = validated_data.pop('tags')
        product = Product.objects.create(**validated_data)
        Tag.objects.create(product=product, **tags)
        return product


    class Meta:
        model = Product
        fields = '__all__'
