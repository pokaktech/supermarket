from django.db import models
from decimal import Decimal

from django.contrib.auth.models import User
# Create your models here.

class Category(models.Model):
    name = models.CharField(max_length=100 , unique=True)
    image = models.ImageField(upload_to='cat_images', null=True, blank=True)


    def __str__(self):
        return self.name
    
class Tag(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name
    
class Ad(models.Model):
    title = models.CharField(max_length=100)
    url = models.URLField()
    image = models.ImageField(upload_to='ad_images/')
    description = models.TextField()

    def __str__(self):
        return self.title
    
# class Offer(models.Model):
#     title = models.CharField(max_length=255)
#     description = models.TextField()
#     discount_percentage = models.DecimalField(max_digits=5, decimal_places=2)
#     promo_code = models.CharField(max_length=50)
#     image = models.ImageField(upload_to='offer_images/', null=True, blank=True)
#     start_date = models.DateField()
#     end_date = models.DateField()
#     ads = models.ForeignKey(Ad, on_delete=models.SET_NULL, null=True, blank=True)

#     def __str__(self):
#         return f"{self.title} - {self.product.name}"
    
class Offer(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    discount_percentage = models.DecimalField(max_digits=5, decimal_places=2)
    promo_code = models.CharField(max_length=50)
    image = models.ImageField(upload_to='offer_images/', null=True, blank=True)
    start_date = models.DateField()
    end_date = models.DateField()

    def __str__(self):
        return self.title




class Product(models.Model):
    name = models.CharField(max_length=100)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    description = models.TextField(blank=True, null=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    image = models.ImageField(upload_to='product_images/', null=True, blank=True)
    quantity = models.IntegerField()
    quantity_in_stock = models.PositiveIntegerField(default=0)
    tags = models.ManyToManyField(Tag, blank=True)
    related_products = models.ManyToManyField('self', blank=True)
    offers = models.ManyToManyField(Offer)
   
    
    def __str__(self):
        return self.name
   

class Review(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='reviews')
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    rating = models.IntegerField() 
    comment = models.TextField()

    def __str__(self):
        return f"{self.product.name} - {self.user.username}"
    
# class Cart(models.Model):
#     user = models.ForeignKey(User, on_delete=models.CASCADE)
#     items = models.ManyToManyField(Product, through='CartItem')
#     created_at = models.DateTimeField(auto_now_add=True)

#     def __str__(self):
#         return f"Cart #{self.pk} - {self.user.username}"

# class CartItem(models.Model):
#     cart = models.ForeignKey(Cart, on_delete=models.CASCADE)
#     product = models.ForeignKey(Product, on_delete=models.CASCADE)
#     date = models.DateTimeField(auto_now_add=True)
#     status_options = (
#         ("in-cart", "In Cart"),
#         ("order-placed", "Order Placed"),
#         ("cancelled", "Cancelled")
#     )
#     status = models.CharField(max_length=200, choices=status_options, default="in-cart")
#     qty = models.PositiveIntegerField()

#     def __str__(self):
#         return f"{self.qty}x {self.product.name} in Cart #{self.cart.pk}"

class Carts(models.Model):
    user=models.ForeignKey(User,on_delete=models.CASCADE)
    product=models.ForeignKey(Product,on_delete=models.CASCADE)
    date=models.DateTimeField(auto_now_add=True)
    statusoptions=(
        ("in-cart","in-cart"),
        ("order-placed","order-placed"),
        ("cancelled","cancelled")
    )

    status=models.CharField(max_length=200,choices=statusoptions,default="in-cart")
    qty=models.PositiveIntegerField()



class Order(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    date = models.DateTimeField(auto_now_add=True)
    delivery_date = models.DateField(null=True, blank=True)
    delivery_time = models.CharField(max_length=200, null=True, blank=True)
    address = models.CharField(max_length=300)
    
    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('processing', 'Processing'),
        ('shipped', 'Shipped'),
        ('delivered', 'Delivered'),
        ('cancelled', 'Cancelled'),
    ]
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending')
    
    # @property
    # def total_price(self):
    #     return sum(item.total_price for item in self.orderitem_set.all())

class OrderItem(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE)     
    product = models.ForeignKey(Product, on_delete=models.CASCADE) 
    qty = models.PositiveIntegerField(default=1)

    # @property
    # def total_price(self):
    #     return self.product.price * self.qty
