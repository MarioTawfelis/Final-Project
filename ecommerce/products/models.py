from django.db import models


class Product(models.Model):
    id = models.AutoField(primary_key=True)
    sku = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    tags = models.ManyToManyField('Tag')
    description = models.TextField()
    has_sizes = models.BooleanField()
    inventory_count = models.IntegerField()
    retail_price = models.DecimalField(max_digits=10, decimal_places=2)
    image = models.ImageField(upload_to='product_image')
    image_url = models.URLField()
    rating = models.DecimalField(max_digits=2, decimal_places=1)


class Tag(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)
    friendly_name = models.CharField(max_length=255)
