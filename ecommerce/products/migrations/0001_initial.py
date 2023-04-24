# Generated by Django 4.2 on 2023-04-24 11:34

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Tag',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=255)),
                ('friendly_name', models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('sku', models.CharField(max_length=255)),
                ('name', models.CharField(max_length=255)),
                ('description', models.TextField()),
                ('has_sizes', models.BooleanField()),
                ('inventory_count', models.IntegerField()),
                ('retail_price', models.DecimalField(decimal_places=2, max_digits=10)),
                ('image', models.ImageField(upload_to='product_image')),
                ('image_url', models.URLField()),
                ('rating', models.DecimalField(decimal_places=1, max_digits=2)),
                ('tags', models.ManyToManyField(to='products.tag')),
            ],
        ),
    ]