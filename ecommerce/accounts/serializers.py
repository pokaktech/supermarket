from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Category,Product,Review,Offer,Ad,Tag


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id','username','email','password']

    def create(self, validated_data):
        return  User.objects.create_user(**validated_data)  
    
class PasswordResetSerializer(serializers.Serializer):
    username = serializers.CharField()


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = '__all__'


class ProductSerializer(serializers.ModelSerializer):
    category = serializers.StringRelatedField()
    class Meta:
        model = Product
        fields = ['id', 'name', 'category', 'description', 'price', 'image', 'quantity_in_stock', 'barcode', 'tags', 'related_products']


class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review


class OfferSerializer(serializers.ModelSerializer):
    product_name = serializers.CharField(source='product.name', read_only=True)

    class Meta:
        model = Offer
        fields = ['id', 'product', 'product_name', 'title', 'description', 'discount_percentage', 'promo_code', 'image', 'start_date', 'end_date']

class AdSerializer(serializers.ModelSerializer):

    class Meta:
        model = Ad
        fields = ['title','url','image','descripthon']