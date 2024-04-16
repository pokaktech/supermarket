from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Category,Product,Review


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


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['id', 'name', 'category', 'description', 'price', 'image', 'quantity_in_stock', 'barcode', 'tags', 'related_products']


class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review

