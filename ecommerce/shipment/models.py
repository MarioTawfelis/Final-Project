from django.db import models
from products.models import Product
from users.models import UserProfile


class ShipmentLineItem(models.Model):

    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    product_size = models.CharField(max_length=2)
    shipment = models.ForeignKey("Shipment", on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField()
    retailprice_total = models.DecimalField(decimal_places=2, max_digits=25)

    def __str__(self) -> str:
        return self.product

class Shipment(models.Model):

    shipment_number = models.CharField(max_length=20)
    user_profile = models.ForeignKey(UserProfile, on_delete=models.CASCADE)
    customer_name = models.CharField(max_length=255)
    email_address = models.CharField(max_length=255)
    phone_number = models.PositiveBigIntegerField()
    street_address1 = models.CharField(max_length=255, null=True)
    street_address2 = models.CharField(max_length=255, null=True)
    town_or_city = models.CharField(max_length=255, null=True)
    country = models.CharField(max_length=100, null=True)
    postcode = models.CharField(max_length=50)
    delivery_cost = models.DecimalField(decimal_places=2, max_digits=10)
    order_total = models.DecimalField(decimal_places=2, max_digits=25)
    grand_total = models.DecimalField(decimal_places=2, max_digits=25)
    order_data = models.DateTimeField()

    def __str__(self) -> str:
        return self.customer_name
