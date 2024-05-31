from django.db import models
from django.apps import apps
from django.contrib import admin
from accounts.models import Product, Category, Order, OrderItem


class CustomAdminModel(models.Model):
    name = models.CharField(max_length=100)
    # other fields

def get_admin_model():
    CustomAdminModelAdmin = apps.get_model('custom_admin', 'CustomAdminModelAdmin')
    return CustomAdminModelAdmin

class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'description')
    search_fields = ('name',)
    ordering = ('name')

class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'category', 'price', 'stock', 'created_at')
    list_filter = ('category',)
    search_fields = ('name', 'description')
    list_editable = ('price', 'stock')

class OrderItemInline(admin.TabularInline):
    model = OrderItem
    extra = 1
    
class OrderAdmin(admin.ModelAdmin):
    list_display = ('id', 'user', 'date', 'delivery_date', 'status')
    list_filter = ('status',)
    search_fields = ('user__username', 'address')
    inlines = [OrderItemInline]
    
admin.site.register(Category, CategoryAdmin)
admin.site.register(Product, ProductAdmin)
admin.site.register(Order, OrderAdmin)
