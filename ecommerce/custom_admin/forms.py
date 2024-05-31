from django import forms
from .models import Product

class ProductForm(forms.ModelForm):
    class Meta:
        model = Product
        fields = [
            'name', 'category', 'description', 'price', 'image', 'quantity', 
            'quantity_in_stock', 'stock', 'tags', 'related_products', 'offers'
        ]