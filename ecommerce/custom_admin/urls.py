from django.contrib import admin
from django.urls import path, include
from .views import AdminLoginView, DashboardView, ProductViewSet, CategoryViewSet
from rest_framework import routers

router = routers.DefaultRouter()
router.register('products', ProductViewSet, basename='product')
router.register('categories', CategoryViewSet, basename='category')

urlpatterns = [
    path('login/', AdminLoginView.as_view(), name='AdminLoginView'),
    # Add other custom admin URLs if needed
    path('dashboard/', DashboardView.as_view(), name='dashboard'),
    

    path('products/', ProductViewSet.as_view({'get': 'list','post':'create'}), name='product_create'),
    path('products/<int:pk>/', ProductViewSet.as_view({'get':'retrieve','put': 'update', 'patch': 'partial_update','delete':'destroy'}), name='product_detail'),

    path('categories/', CategoryViewSet.as_view({'get': 'list', 'post': 'create'}), name='category_list_create'),
    path('categories/<int:pk>/', CategoryViewSet.as_view({'get': 'retrieve', 'put': 'update', 'patch': 'partial_update', 'delete': 'destroy'}), name='category_detail'),

]