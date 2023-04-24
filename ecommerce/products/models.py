from django.db import models


class Product(models.Model):
    sku = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    tags = models.ManyToManyField('Tag', blank=True)
    description = models.TextField()
    has_sizes = models.BooleanField()
    inventory_count = models.IntegerField()
    retail_price = models.DecimalField(max_digits=10, decimal_places=2)
    image = models.ImageField(upload_to='product_image', null=True, blank=True)
    image_url = models.URLField(null=True, blank=True)
    rating = models.DecimalField(max_digits=2, decimal_places=1)

    def __str__(self):
        return self.name


class Tag(models.Model):
    name = models.CharField(max_length=255)
    friendly_name = models.CharField(max_length=255)


    def __str__(self):
        return self.name
