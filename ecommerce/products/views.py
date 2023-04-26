from django.shortcuts import render
from rest_framework import viewsets
from .models import Product, Tag
from .serializers import ProductSerializer, TagSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
import json

@api_view(['GET', 'POST'])
def product_list(request, id=None, format=None):
    if request.method == 'GET' and id is None:
        # get all the Products
        queryset = Product.objects.all()
        print(555)
        # serialize them
        serializer_class = ProductSerializer(queryset, many=True)

        # return json
        # return JsonResponse({'products': serializer_class.data}, safe=False)

        # or return in the browser admin version
        return Response(serializer_class.data)

    elif request.method == 'POST' and id is None:
        serializer_class = ProductSerializer(data=request.data['fields'])

        #is_json(serializer_class)
        if serializer_class.is_valid():
            print('Serializer is valid')
            serializer_class.save()
            return Response(serializer_class.data, status=status.HTTP_201_CREATED)
        else:
            
            return Response(serializer_class.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def product_detail(request, id, format=None):
   
    if request.method == 'GET':
        if id is not None:
            try:
                queryset = Product.objects.get(pk=id)
            except Product.DoesNotExist:
                return Response(status=status.HTTP_404_NOT_FOUND)

        serializer_class = ProductSerializer(queryset)
        return Response(serializer_class.data)

    elif request.method == 'PUT':

        try:
            queryset = Product.objects.get(pk=id)
        except Product.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer_class = ProductSerializer(queryset, data=request.data)
        if serializer_class.is_valid():
            serializer_class.save()
            return Response(serializer_class.data, status=status.HTTP_201_CREATED)
        return Response(serializer_class.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':

        try:
            queryset = Product.objects.get(pk=id)
            serializer_class = ProductSerializer(queryset)
            queryset.delete()
            message = {'message': 'Product has been deleted'}
            return Response(message, status=status.HTTP_204_NO_CONTENT)
        except Product.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)




# def is_json(value):
#     try:
#         json.loads(value)
#         print(222)
#     except (ValueError, TypeError):
#         print(111)
#         return False
#     return True


class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    basename = 'product'




class TagViewSet(viewsets.ModelViewSet):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer
    basename = 'tag'

    @api_view(['GET', 'POST'])
    def tag_list(request, format=None):

        if request.method == 'GET':
            # get all the Tags
            queryset = Tag.objects.all()

            # serialize them
            serializer_class = TagSerializer(queryset, many=True)

            # or return in the browser admin version
            return Response(serializer_class.data)

        if request.method == 'POST':
            serializer_class = TagSerializer(data=request.data)
            if serializer_class.is_valid():
                serializer_class.save()
                return Response(serializer_class.data, status=status.HTTP_201_CREATED)