<<<<<<< HEAD
# Generated by Django 4.1 on 2023-04-26 14:36
=======
# Generated by Django 4.1 on 2023-04-25 10:50
>>>>>>> bfc185580229cf8bc86f0fd9c93b8fd137773a81

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Tag',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('friendly_name', models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sku', models.CharField(max_length=255)),
                ('name', models.CharField(max_length=255)),
                ('description', models.TextField()),
                ('has_sizes', models.BooleanField()),
                ('inventory_count', models.IntegerField()),
                ('retail_price', models.DecimalField(decimal_places=2, max_digits=10)),
                ('image', models.ImageField(blank=True, null=True, upload_to='product_image')),
                ('image_url', models.URLField(blank=True, null=True)),
                ('rating', models.DecimalField(decimal_places=1, max_digits=2)),
                ('tags', models.ManyToManyField(blank=True, null=True, to='products.tag')),
            ],
        ),
    ]
