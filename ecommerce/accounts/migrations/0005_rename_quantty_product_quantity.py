# Generated by Django 5.0.3 on 2024-04-27 15:48

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0004_rename_qty_product_quantty'),
    ]

    operations = [
        migrations.RenameField(
            model_name='product',
            old_name='quantty',
            new_name='quantity',
        ),
    ]
