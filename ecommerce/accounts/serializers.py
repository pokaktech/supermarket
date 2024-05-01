from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Category,Product,Review,Offer,Ad,Tag,Order,OrderItem,Carts


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

class OfferSerializer(serializers.ModelSerializer):
    class Meta:
        model = Offer
        fields = '__all__'


class ProductSerializer(serializers.ModelSerializer):
    category = serializers.StringRelatedField()
    offers = OfferSerializer(many=True)

    class Meta:
        model = Product
        fields = ['id', 'name', 'category', 'description', 'price', 'image','quantity','quantity_in_stock', 'tags', 'related_products','offers']


# class CartItemSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = CartItem
#         fields = ['id', 'cart', 'product', 'date', 'status', 'qty']

# class CartSerializer(serializers.ModelSerializer):
#     items = CartItemSerializer(many=True, read_only=True)

#     class Meta:
#         model = Cart
#         fields = ['id', 'user', 'items', 'created_at']
class CartSerializer(serializers.ModelSerializer):
    user = serializers.CharField(read_only=True)
    product = ProductSerializer(read_only=True)
    date = serializers.CharField(read_only=True)
    status = serializers.CharField(read_only=True)
    qty = serializers.IntegerField()  # "qty" field marked as required

    class Meta:
        model = Carts
        fields = ["id", "user", "product", "date", "status", "qty"]


class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review




class AdSerializer(serializers.ModelSerializer):

    class Meta:
        model = Ad
        fields = ['title','url','image','descripthon']

class OrderItemSerializer(serializers.ModelSerializer):
    product = ProductSerializer(read_only=True)

    class Meta:
        model = OrderItem
        fields = ['id', 'order', 'product', 'qty']

class OrderSerializer(serializers.ModelSerializer):
    order_items = OrderItemSerializer(many=True, read_only=True)
    total_price = serializers.ReadOnlyField() 
    
    class Meta:
        model = Order
        fields = ['id', 'date', 'delivery_date', 'delivery_time', 'address', 'total_price', 'order_items', 'status']

   