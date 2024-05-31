from django.contrib import admin
# from custom_admin.models import CustomAdminModel
from accounts.models import Category, Product, Order, OrderItem
# from custom_admin.models import CustomAdminModel  # Remove this

admin.site.unregister(Category)
admin.site.unregister(Product) 
admin.site.unregister(Order)

class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'image')  # Ensure 'description' is a field in Category

class ProductAdmin(admin.ModelAdmin):
    # list_display = ('name', 'price', 'category', 'stock', 'created_at')  # Ensure these fields exist in Product
    # list_editable = ('price', 'stock')  # Ensure 'stock' is a field in Product
    list_display = ('name', 'category', 'price', 'quantity', 'quantity_in_stock', 'stock', 'created_at')
    list_filter = ('category', 'created_at')
    search_fields = ('name', 'description')
    list_editable = ('price', 'quantity', 'quantity_in_stock', 'stock')
    filter_horizontal = ('tags', 'related_products', 'offers') 
    
class OrderItemInline(admin.TabularInline):
    model = OrderItem
    extra = 1    

class OrderAdmin(admin.ModelAdmin):
    list_display = ('id', 'user', 'date', 'delivery_date', 'status')
    list_filter = ('status',)
    search_fields = ('user__username', 'product__name')
    inlines = [OrderItemInline]
    
admin.site.register(Category, CategoryAdmin)
admin.site.register(Product, ProductAdmin)
admin.site.register(Order, OrderAdmin)


# class CustomAdminModelAdmin(admin.ModelAdmin):
#     list_display = ('name',)
#     # other admin configuration

# admin.site.register(CustomAdminModel, CustomAdminModelAdmin)

# Register your models here.
