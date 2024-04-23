from django.shortcuts import render
from django.contrib.auth.models import User
from .serializers import UserSerializer,ProductSerializer,CategorySerializer, ReviewSerializer,OfferSerializer,AdSerializer,TagSerializer
from .models import Category,Product,Review,Offer,Ad,Tag



from rest_framework import generics
from rest_framework import viewsets
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication
# from django.core.mail import send_mail
# from django.conf import settings
# from ecommerce.settings import FRONTEND_URL,EMAIL_HOST_USER
# from rest_framework.decorators import api_view

from django.core.mail import send_mail
from django.conf import settings
# from .serializers import PasswordResetSerializer
from ecommerce.settings import FRONTEND_URL,EMAIL_HOST_USER
from rest_framework.decorators import api_view

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







