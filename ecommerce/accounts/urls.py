from django.urls import path
from .views import ListUsersAPIView,CreateUserAPIView,RetrieveUserAPIView,UpdateUserAPIView,CategoryListCreate, CategoryRetrieveUpdateDestroy,ProductListCreateAPIView, ProductDetailAPIView, ReviewListCreateAPIView, ReviewDetailAPIView

urlpatterns = [
  path('users/', ListUsersAPIView.as_view(), name='list-users'),
  path('users/create/', CreateUserAPIView.as_view(), name='create-user'),
  path('users/<int:user_id>/', RetrieveUserAPIView.as_view(), name='retrieve-user'),
  path('users/<int:user_id>/update/', UpdateUserAPIView.as_view(), name='update-user'),
  path('categories/', CategoryListCreate.as_view(), name='category-list'),
  path('categories/<int:pk>/', CategoryRetrieveUpdateDestroy.as_view(), name='category-detail'),
  path('products/', ProductListCreateAPIView.as_view(), name='product-list'),
  path('products/<int:pk>/', ProductDetailAPIView.as_view(), name='product-detail'),
  path('reviews/', ReviewListCreateAPIView.as_view(), name='review-list'),
  path('reviews/<int:pk>/', ReviewDetailAPIView.as_view(), name='review-detail'),
  
]
