from django.contrib import admin
from django.contrib.admin import AdminSite
from django.template.response import TemplateResponse
from django.urls import path

# # Register your models here.
from .models import Category,Product,Tag,Ad,Review,Order,OrderItem,Carts,Offer

# class CategoryAdmin(admin.ModelAdmin):
#     list_display = ('name', )
#     search_fields = ('name','image')

# admin.site.register(Category, CategoryAdmin)

# class ProductAdmin(admin.ModelAdmin):
#     list_display = ['name', 'category', 'price']
#     list_filter = ['category']

# admin.site.register(Product)


# class OfferAdmin(admin.ModelAdmin):
#     list_display = ['get_product_name', 'discount_percentage', 'start_date', 'end_date']
#     search_fields = ['product__name', 'description', 'promo_code']
#     list_filter = ['start_date', 'end_date']
#     readonly_fields = ['offers'] 

#     def get_product_name(self, obj):
#         return obj.product.name

#     get_product_name.short_description = 'Product Name'

# admin.site.register(Tag)
# admin.site.register(Ad)
# admin.site.register(Review)
# admin.site.register(Carts)
# admin.site.register(Order)
# admin.site.register(OrderItem)
# admin.site.register(Offer)