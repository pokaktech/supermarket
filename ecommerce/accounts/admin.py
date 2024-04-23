from django.contrib import admin

# Register your models here.
from .models import Category,Product,Offer,Tag,Ad,Review

class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'description')
    search_fields = ('name', 'description','image')

admin.site.register(Category, CategoryAdmin)

class ProductAdmin(admin.ModelAdmin):
    list_display = ['name', 'category', 'price']
    list_filter = ['category']

admin.site.register(Product)


class OfferAdmin(admin.ModelAdmin):
    list_display = ['get_product_name', 'discount_percentage', 'start_date', 'end_date']
    search_fields = ['product__name', 'description', 'promo_code']
    list_filter = ['start_date', 'end_date']

    def get_product_name(self, obj):
        return obj.product.name

    get_product_name.short_description = 'Product Name'

admin.site.register(Tag)
admin.site.register(Ad)
admin.site.register(Review)