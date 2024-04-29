from django.urls import path
from .views import ListUsersAPIView,CreateUserAPIView,RetrieveUserAPIView,UpdateUserAPIView,CategoryListCreate, CategoryRetrieveUpdateDestroy,ProductListCreateAPIView, ProductDetailAPIView, ReviewListCreateAPIView, ReviewDetailAPIView,OfferDetailAPIView,OfferListCreateAPIView,AdListCreateAPIView,AdRetrieveUpdateDestroyAPIView,TagRetrieveUpdateDestroyAPIView,TagListCreateAPIView,AddToCartView,PlaceOrderView
                  

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
  # path('carts/', CartsView.as_view(), name='cart-list'),  # URL for listing carts
  path('add-to-cart/<int:product_id>/', AddToCartView.as_view(), name='add-to-cart'),
  # path('carts/', CartListCreateAPIView.as_view(), name='cart-list-create'),
  # path('carts/<int:pk>/', CartRetrieveUpdateDestroyAPIView.as_view(), name='cart-detail'),
  # path('cart-items/', CartItemCreateAPIView.as_view(), name='cart-item-create'),
  # path('cart-items/<int:pk>/', CartItemRetrieveUpdateDestroyAPIView.as_view(), name='cart-item-detail'),
  # path('orders/', OrderListCreateView.as_view(), name='order-list-create'),
  # path('orders/<int:pk>/', OrderRetrieveUpdateDestroyView.as_view(), name='order-detail'),
  # path('order-items/', OrderItemListCreateView.as_view(), name='order-item-list-create'),
  # path('order-items/<int:pk>/', OrderItemRetrieveUpdateDestroyView.as_view(), name='order-item-detail'),
  path ('place_order/',PlaceOrderView.as_view(),name='placeorder')
  
]
