import json
from django.core.management.base import BaseCommand
from products.models import Product, Tag


class Command(BaseCommand):
    def handle(self, *args, **kwargs):
        # Load categories data
        with open('products/fixtures/categories.json') as f:
            categories_data = json.load(f)

        # Create categories
        for category_data in categories_data:
            category, _ = Tag.objects.get_or_create(
                name=category_data['fields']['name'],
                friendly_name=category_data['fields']['friendly_name']
            )

        # Load products data
        with open('products/fixtures/products.json') as f:
            products_data = json.load(f)

        for product in products_data:
            tag_name = product['fields'].pop('category', None)  # Remove tag from product data if it exists

            # Create product
            product_obj, _ = Product.objects.get_or_create(
                sku=product['fields']['sku'],
                name=product['fields']['name'],
                description=product['fields']['description'],
                retail_price=product['fields']['retail_price'],
                rating=product['fields']['rating'],
                image_url=product['fields']['image_url'],
                image=product['fields']['image']
            )

            # Add tag to product if it exists
            if tag_name:
                tag, _ = Tag.objects.get_or_create(name=tag_name)
                product_obj.tag.add(tag)