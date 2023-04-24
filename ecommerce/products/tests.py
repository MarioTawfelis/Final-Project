from django.test import TestCase
from products.models import Product, Tag


# Create your tests here.

class ModelTests(TestCase):

    def setUp(self):
        sku = 'testsku'
        name = 'test product name'
        description = 'test description'
        has_sizes = True
        inventory_count = 2
        retail_price = 10.95
        rating = 2

        self.product = Product.objects.create(
            sku=sku,
            name=name,
            description=description,
            has_sizes=True,
            inventory_count=inventory_count,
            retail_price=retail_price,
            rating=rating
        )

        self.assertEqual(str(self.product), name)
        products = Product.objects.all()
        self.assertEqual(len(products), 1)

    def test_add_tags_to_product_creates_tag_in_db(self):
        tag1 = Tag.objects.create(
            name='Tag 1',
            friendly_name='Friendly Tag 1'
        )

        tag2 = Tag.objects.create(
            name='Tag 2',
            friendly_name='Friendly Tag 2'
        )

        self.product.tags.add(tag1, tag2)

        self.assertEqual(str(tag1), tag1.name)
        self.assertEqual(str(tag2), tag2.name)

        product = Product.objects.get(id=self.product.id)
        self.assertEqual(len(product.tags.all()), 1)
