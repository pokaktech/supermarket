from django.shortcuts import render
from django.contrib.auth.models import User
from .serializers import UserSerializer,ProductSerializer,CategorySerializer, ReviewSerializer,OfferSerializer,AdSerializer,TagSerializer,CartSerializer,OrderItemSerializer,OrderSerializer
from .models import Category,Product,Review,Offer,Ad,Tag,Order,OrderItem,Carts,Payment
from django.http import HttpResponse

from rest_framework.decorators import action
from rest_framework import generics
from rest_framework import viewsets,mixins
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication
# # from django.core.mail import send_mail
# from django.conf import settings
# from ecommerce.settings import FRONTEND_URL,EMAIL_HOST_USER
# from rest_framework.decorators import api_view
import logging
from razorpay.errors import ServerError
from django.core.mail import send_mail
from django.conf import settings
# from .serializers import PasswordResetSerializer
from ecommerce.settings import FRONTEND_URL,EMAIL_HOST_USER
from rest_framework.decorators import api_view
from django.http import HttpResponseBadRequest
import razorpay
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from . razorpay_integration import create_payment
import json
from rest_framework.authentication import TokenAuthentication
from razorpay import client 
logger = logging.getLogger(__name__)
client = razorpay.Client(auth=("rzp_test_IaGnSH1ZCoxcdg", "Ozb16vWTNAfMoXUnMhGnJJDy"))

@csrf_exempt
def create_payment_view(request):
    if request.method == 'POST':
        try:
            # Parse JSON data from request body
            data = json.loads(request.body.decode('utf-8'))
            amount = data.get('amount')
            receipt_id = data.get('receipt_id')

 

            if not amount or not str(amount).isdigit():
                return JsonResponse({'error': 'Invalid or missing amount'}, status=400)

            amount = int(amount)  # Now safe to convert to int
            payment_order = create_payment(amount=amount, receipt_id=receipt_id)
            return JsonResponse(payment_order)

        except json.JSONDecodeError:
            return JsonResponse({'error': 'Invalid JSON format'}, status=400)

    return JsonResponse({'error': 'Method not allowed'}, status=405)


@csrf_exempt
def verify_payment_view(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body.decode('utf-8'))
            razorpay_payment_id = data.get('razorpay_payment_id')
            razorpay_order_id = data.get('razorpay_order_id')
            razorpay_signature = data.get('razorpay_signature')

            params_dict = {
                'razorpay_order_id': razorpay_order_id,
                'razorpay_payment_id': razorpay_payment_id,
                'razorpay_signature': razorpay_signature
            }

            try:
                client.utility.verify_payment_signature(params_dict)
                # Payment signature is valid, process the order
                return JsonResponse({'status': 'Payment successful'})
            except razorpay.errors.SignatureVerificationError:
                return JsonResponse({'status': 'Payment failed'}, status=400)

        except json.JSONDecodeError:
            return JsonResponse({'error': 'Invalid JSON format'}, status=400)

    return JsonResponse({'error': 'Method not allowed'}, status=405)

# @csrf_exempt
# def capture_payment_view(request):
#     if request.method == 'POST':
#         try:
#             # Parse JSON data from request body
#             data = json.loads(request.body.decode('utf-8'))
#             amount = int(data.get('amount'))  # Assuming amount is required for capture
#             payment_id = data.get('payment_id')

#             print(amount, "amount")
#             print(payment_id, "payment_id")
#             # Perform payment capture logic
#             capture_result = capture_payment(payment_id=payment_id, amount=amount)

#             if capture_result:
#                 return JsonResponse({'message': 'Payment captured successfully'})
#             else:
#                 return JsonResponse({'error': 'Failed to capture payment'}, status=400)

#         except json.JSONDecodeError:
#             return JsonResponse({'error': 'Invalid JSON format'}, status=400)

#         except ServerError as e:
#             # Handle Razorpay ServerError
#             error_message = str(e)
#             # Log the actual exception for debugging
#             print(f"Razorpay ServerError:dd {error_message}")
#             print(error_message)
#             return JsonResponse({'error': 'Razorpay ServerError'}, status=500)

#         except Exception as e:
#             # Handle other exceptions
#             error_message = "An error occurred"
#             # Log the actual exception for debugging
#             print(e)
#             return JsonResponse({'error': error_message}, status=500)

#     return JsonResponse({'error': 'Method not allowed'}, status=405)


# @csrf_exempt
# def payment_success(request):
#     if request.method == "POST":
#         payment_data = request.POST
#         try:
#             razorpay_order_id = payment_data['razorpay_order_id']
#             razorpay_payment_id = payment_data['razorpay_payment_id']
#             razorpay_signature = payment_data['razorpay_signature']

#             # Verify the payment signature
#             params_dict = {
#                 'razorpay_order_id': razorpay_order_id,
#                 'razorpay_payment_id': razorpay_payment_id,
#                 'razorpay_signature': razorpay_signature
#             }

#             result = client.utility.verify_payment_signature(params_dict)

#             if result is None:
#                 # Signature is valid
#                 order = Order.objects.get(order_id=razorpay_order_id)
#                 order.razorpay_payment_id = razorpay_payment_id
#                 order.status = 'PAID'
#                 order.save()
#                 return render(request, 'payment_success.html', {'order': order})
#             else:
#                 # Signature verification failed
#                 return HttpResponseBadRequest('Invalid payment signature')
#         except Exception as e:
#             return HttpResponseBadRequest(f'Error: {str(e)}')
#     return HttpResponseBadRequest('Invalid request method')
def payment_view(request):
    return render(request, 'payment.html')
def payment_success(request):
    # Create a mock order for testing
    mock_order = Order(
        order_id='order_OCm1R91JnVRiUX',
        amount=10000,
        amount_paid=1000,
        amount_due=0,
        currency='INR',
        status='PAID',
        razorpay_payment_id='test_payment_id'
    )
    return render(request, 'payment_success.html', {'order': mock_order})

@csrf_exempt
def payment_failure(request):
    if request.method == "POST":
        payment_data = request.POST
        try:
            razorpay_order_id = payment_data['razorpay_order_id']
            order = Order.objects.get(order_id=razorpay_order_id)
            order.status = 'FAILED'
            order.save()
            return render(request, 'payment_failure.html', {'order': order})
        except Exception as e:
            return HttpResponseBadRequest(f'Error: {str(e)}')
    return HttpResponseBadRequest('Invalid request method')

class ListUsersAPIView(APIView):
    permission_classes = [IsAuthenticated]
    authentication_classes = [JWTAuthentication]

    def get(self, request, format=None):
        users = User.objects.all()
        serializer = UserSerializer(users, many=True)
        return Response(serializer.data)

class CreateUserAPIView(APIView):
    def post(self, request, format=None):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class RetrieveUserAPIView(APIView):
    permission_classes = [IsAuthenticated]
    authentication_classes = [JWTAuthentication]

    def get(self, request, user_id, format=None):
        user = User.objects.get(pk=user_id)
        serializer = UserSerializer(user)
        return Response(serializer.data)
    
class UpdateUserAPIView(APIView):
    permission_classes = [IsAuthenticated]
    authentication_classes = [JWTAuthentication]

    def put(self, request, user_id, format=None):
        user = User.objects.get(pk=user_id)
        serializer = UserSerializer(user, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
# @api_view(['POST'])
# def password_reset_view(request):
#     username = request.data.get('username')
#     try:
#         user_obj = User.objects.get(username=username)
#     except User.DoesNotExist:
#         return Response({'status': 0, 'error': 'User not found'}, status=status.HTTP_404_NOT_FOUND)

#     subject = 'Reset password of bakery'
#     reset_link = f"{FRONTEND_URL}/reset-password/{user_obj.id}/"
#     message = f'Use the following link to reset your password: {reset_link}'
#     from_email = EMAIL_HOST_USER
#     to_email = user_obj.email 

#     try:
#         send_mail(subject, message, from_email, [to_email])
#         return Response({'status': 1, 'message': 'Email sent successfully'})
#     except Exception as e:
#         # Handle the email sending error
#         return Response({'status': 0, 'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
   
# @api_view(['POST'])
# def set_password_view(request, user_id):
#     # Get the user object based on the user_id from the URL
#     try:
#         user_obj = User.objects.get(id=user_id)
#     except User.DoesNotExist:
#         return Response({'status': 0, 'error': 'User not found'}, status=status.HTTP_404_NOT_FOUND)

#     # Extract the new password from the request payload
#     new_password = request.data.get('password')
#     if not new_password:
#         return Response({'status': 0, 'error': 'New password not provided'}, status=status.HTTP_400_BAD_REQUEST)

#     # Set the new password for the user
#     user_obj.set_password(new_password)
#     user_obj.save()

#     return Response({'status': 1, 'message': 'Password updated successfully'}, status=status.HTTP_200_OK)
@api_view(['POST'])
def password_reset_view(request):
    username = request.data.get('username')
    try:
        user_obj = User.objects.get(username=username)
    except User.DoesNotExist:
        return Response({'status': 0, 'error': 'User not found'}, status=status.HTTP_404_NOT_FOUND)

    subject = 'Reset password of bakery'
    reset_link = f"{FRONTEND_URL}/reset-password/{user_obj.id}/"
    message = f'Use the following link to reset your password: {reset_link}'
    from_email = EMAIL_HOST_USER
    to_email = user_obj.email 

    try:
        send_mail(subject, message, from_email, [to_email])
        return Response({'status': 1, 'message': 'Email sent successfully'})
    except Exception as e:
        # Handle the email sending error
        return Response({'status': 0, 'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
   
@api_view(['POST'])
def set_password_view(request, user_id):
    # Get the user object based on the user_id from the URL
    try:
        user_obj = User.objects.get(id=user_id)
    except User.DoesNotExist:
        return Response({'status': 0, 'error': 'User not found'}, status=status.HTTP_404_NOT_FOUND)

    # Extract the new password from the request payload
    new_password = request.data.get('password')
    if not new_password:
        return Response({'status': 0, 'error': 'New password not provided'}, status=status.HTTP_400_BAD_REQUEST)

    # Set the new password for the user
    user_obj.set_password(new_password)
    user_obj.save()

    return Response({'status': 1, 'message': 'Password updated successfully'}, status=status.HTTP_200_OK)


class CategoryListCreate(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class CategoryRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class ProductListCreateAPIView(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class ProductDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class ReviewListCreateAPIView(generics.ListCreateAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer

class ReviewDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer


class OfferListCreateAPIView(generics.ListCreateAPIView):
    queryset = Offer.objects.all()
    serializer_class = OfferSerializer

class OfferDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Offer.objects.all()
    serializer_class = OfferSerializer

class AdListCreateAPIView(generics.ListCreateAPIView):
    queryset = Ad.objects.all()
    serializer_class = AdSerializer
    permission_classes = [IsAuthenticated]

class AdRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Ad.objects.all()
    serializer_class = AdSerializer
    permission_classes = [IsAuthenticated]

class TagListCreateAPIView(generics.ListCreateAPIView):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer

class TagRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer

# class CartListCreateAPIView(generics.ListCreateAPIView):
#     queryset = Cart.objects.all()
#     serializer_class = CartSerializer

# class CartRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
#     queryset = Cart.objects.all()
#     serializer_class = CartSerializer

# class CartItemCreateAPIView(generics.CreateAPIView):
#     queryset = CartItem.objects.all()
#     serializer_class = CartItemSerializer

# class CartItemRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
#     queryset = CartItem.objects.all()
#     serializer_class = CartItemSerializer


class AddToCartView(APIView):
    def post(self, request, product_id):
        # Check if user is authenticated
        if not request.user.is_authenticated:
            return Response({'error': 'User not authenticated'}, status=status.HTTP_401_UNAUTHORIZED)
        
        # Retrieve product instance based on product_id
        try:
            product = Product.objects.get(id=product_id)
        except Product.DoesNotExist:
            return Response({'error': 'Product does not exist'}, status=status.HTTP_404_NOT_FOUND)
        
        # Extract quantity from request data
        qty = request.data.get('qty')  # Assuming quantity is provided in the request data
        user_obj=User.objects.get(id=request.user.id)
        # Create or update cart item
        cart_item_data = {

            'qty': qty,  # Include quantity in the cart item data
        }
        cart_item_serializer = CartSerializer(data=cart_item_data)
        if cart_item_serializer.is_valid():
            cart_item_serializer.save(product=product,user=user_obj)
            return Response(cart_item_serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(cart_item_serializer.errors, status=status.HTTP_400_BAD_REQUEST)



class PlaceOrderView(APIView):
    permission_classes = [IsAuthenticated]
    authentication_classes = [JWTAuthentication]

    def post(self, request, *args, **kwargs):
        try:
            # Extract data from request payload
            product_data = request.data.get('product', [])
            if not isinstance(product_data, list):
                return Response({'error': 'Product data must be a list of dictionaries.'}, status=status.HTTP_400_BAD_REQUEST)
            
            date = request.data.get('date')
            delivery_date = request.data.get('delivery_date')
            delivery_time = request.data.get('delivery_time')
            address = request.data.get('address')

            # Create the order
            order_data = {
                'date': date,
                'delivery_date': delivery_date,
                'delivery_time': delivery_time,
                'address': address
            }
            order_serializer = OrderSerializer(data=order_data)
            if order_serializer.is_valid():
                order = order_serializer.save(user=request.user)

                # Create order items
                total_price = 0
                for item in product_data:
                    if isinstance(item, dict) and 'id' in item and 'qty' in item:
                        product_id = item.get('id')
                        qty = item.get('qty')
                        product = Product.objects.get(id=product_id)
                        order_item = OrderItem.objects.create(order=order, product=product, qty=qty)
                        total_price += product.price * qty

                        cart_item = Carts.objects.filter(user=request.user, product=product)
                        if cart_item:
                            cart_item.delete()
                    else:
                        return Response({'error': 'Invalid product data.'}, status=status.HTTP_400_BAD_REQUEST)

                # Update the total price of the order
                order.total_price = total_price
                order.save()

                # Refresh order serializer with updated instance
                order_serializer = OrderSerializer(order)
                
                return Response(order_serializer.data, status=status.HTTP_201_CREATED)
            else:
                return Response(order_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)



                