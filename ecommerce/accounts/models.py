from django.db import models


from django.contrib.auth.models import User
# Create your models here.

class Category(models.Model):
    name = models.CharField(max_length=100)
    image = models.ImageField(upload_to='cat_images/', null=True, blank=True)
    description = models.TextField(blank=True, null=True)

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
    
class Offer(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    discount_percentage = models.DecimalField(max_digits=5, decimal_places=2)
    promo_code = models.CharField(max_length=50)
    image = models.ImageField(upload_to='offer_images/', null=True, blank=True)
    start_date = models.DateField()
    end_date = models.DateField()
    ads = models.ForeignKey(Ad, on_delete=models.SET_NULL, null=True, blank=True)

    def __str__(self):
        return f"{self.title} - {self.product.name}"
    
    

class Product(models.Model):
    name = models.CharField(max_length=100)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    description = models.TextField(blank=True, null=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    image = models.ImageField(upload_to='product_images/', null=True, blank=True)
    quantity = models.IntegerField()
    quantity_in_stock = models.PositiveIntegerField(default=0)
    barcode = models.CharField(max_length=100, unique=True)
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
    


