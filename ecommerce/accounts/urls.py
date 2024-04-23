from django.urls import path
from .views import ListUsersAPIView,CreateUserAPIView,RetrieveUserAPIView,UpdateUserAPIView,CategoryListCreate, CategoryRetrieveUpdateDestroy,ProductListCreateAPIView, ProductDetailAPIView, ReviewListCreateAPIView, ReviewDetailAPIView,OfferDetailAPIView,OfferListCreateAPIView,AdListCreateAPIView,AdRetrieveUpdateDestroyAPIView,TagRetrieveUpdateDestroyAPIView,TagListCreateAPIView
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
  path('offers/', OfferListCreateAPIView.as_view(), name='offer-list-create'),
  path('offers/<int:pk>/', OfferDetailAPIView.as_view(), name='offer-detail'),
  path('ads/', AdListCreateAPIView.as_view(), name='ad-list-create'),
  path('ads/<int:pk>/', AdRetrieveUpdateDestroyAPIView.as_view(), name='ad-retrieve-update-destroy'),
  path('tags/', TagListCreateAPIView.as_view(), name='tag-list-create'),
  path('tags/<int:pk>/', TagRetrieveUpdateDestroyAPIView.as_view(), name='tag-detail'),
  
]
