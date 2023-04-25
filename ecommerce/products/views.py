from django.shortcuts import render
from rest_framework import viewsets
from .models import Product
from .serializers import ProductSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    basename = 'product'

    @api_view(['GET', 'POST'])
    def product_list(request, format=None):
      
        if request.method == 'GET':

            #get all the Products
            queryset = Product.objects.all()

            #serialize them
            serializer_class = ProductSerializer(queryset, many=True)

            #return json
            #return JsonResponse({'products': serializer_class.data}, safe=False)

            #or return in the browser admin version
            return Response(serializer_class.data)

        if request.method == 'POST':
            serializer_class = ProductSerializer(data=request.data)
            if serializer_class.is_valid():
                serializer_class.save()
                return Response(serializer_class.data, status=status.HTTP_201_CREATED)

    @api_view(['GET', 'PUT', 'DELETE'])
    def product_detail(request, id, format=None):

        try:
            queryset = Product.objects.get(pk=id)
        except Product.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        if request.method == 'GET':
            serializer_class = ProductSerializer(queryset)
            return Response(serializer_class.data)

        elif request.method == 'PUT':
            serializer_class = ProductSerializer(queryset, data=request.data)
            if serializer_class.is_valid():
                serializer_class.save()
                return Response(serializer_class.data, status=status.HTTP_201_CREATED)
            return Response(serializer_class.errors, status=status.HTTP_400_BAD_REQUEST)

        elif request.method == 'DELETE':
            serializer_class = ProductSerializer(queryset)
            queryset.delete()
            return Response(serializer_class.data, status=status.HTTP_204_NO_CONTENT)
