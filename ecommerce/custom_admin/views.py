from django.shortcuts import render,redirect
from django.contrib.admin.views.decorators import staff_member_required
from django.utils.decorators import method_decorator
from django.contrib.auth.models import User
from django.contrib.auth import authenticate,login
from django.http import HttpResponseRedirect, JsonResponse
from rest_framework.response import Response
from rest_framework.views import APIView
from django.urls import reverse_lazy
from django.views.generic import View
from django.contrib import messages
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.admin.models import LogEntry
from django.utils.timezone import now, timedelta
from django.views.decorators.csrf import csrf_exempt
from .models import Product, Category,Order
from django.views.generic import FormView
from rest_framework import viewsets
# from django.views.generic import ListView, DetailView, CreateView, UpdateView, DeleteView
from django.contrib.auth.mixins import LoginRequiredMixin
from .serializers import ProductSerializer,CategorySerializer
from rest_framework import status
from rest_framework.generics import get_object_or_404
# from .forms import ProductForm
# Create your views here.

# def admin_login(request):
#     try:
#         if request.user.is_authenticated:
#             return redirect('/dashboard');
#         if request.method == 'POST':
#             username = request.POST.get('username')
#             password = request.POST.get('password')
#             user_obj  = User.objects.filter(username=username)
#             if not user_obj.exists ():
#                 messages.info(request, 'Account not found')
#                 return HttpResponseRedirect(request.META.get('HTTP_REFERER'))
            
#             user_obj = authenticate(username=username, password=password)
#             if user_obj and user_obj.is_superuser :
#                 login(request, user_obj)
#                 return redirect('/dashboard')
            
#             messages.info(request, 'Invalid password')
#             return redirect('/')
#         return render(request, 'login.html')
#     except Exception as e:
#         print(e)


class AdminLoginView(APIView):
    template_name = 'admin/login.html'
    

    def get(self, request, *args, **kwargs):
        if request.user.is_authenticated:
            print("authenticated")
            # return redirect('dashboard/')
        return render(request, self.template_name)
    
    def post(self, request, *args, **kwargs):

        username = request.data.get('username')
        password = request.data.get('password')
        print(request)

        user_obj = User.objects.filter(username=username).first()
        if not user_obj:
            return Response({'message': 'Account not found'}, status=404)
            # messages.info(request, 'Account not found')
            # return redirect('AdminLoginView')

        user_obj = authenticate(request, username=username, password=password)
        if user_obj and user_obj.is_superuser:
            login(request, user_obj)
            refresh = RefreshToken.for_user(user_obj)
            return Response({
                'refresh': str(refresh),
                'access': str(refresh.access_token),
            })

        else:
            messages.info(request, 'Invalid password')
            return redirect('AdminLoginView')
 
        return redirect('dashboard')    

# @method_decorator(staff_member_required, name='dispatch')
class DashboardView(View):
    template_name = 'admin/dashboard.html'
    
    def get(self, request, *args, **kwargs):
        user_count = User.objects.count()
        product_count = Product.objects.count()
        order_count = Order.objects.count()

        context = {
            'user_count': user_count,
            'product_count': product_count,
            'order_count': order_count,
        }
        return render(request, self.template_name, context)


class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    
    def create(self, request):
        serializer = ProductSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def list(self, request):
        products = Product.objects.all()
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)
    
    def retrieve(self, request, pk=None):
        product = get_object_or_404(Product, pk=pk)
        serializer = ProductSerializer(product)
        return Response(serializer.data)

    def update(self, request, pk=None):
        product = get_object_or_404(Product, pk=pk)
        serializer = ProductSerializer(product, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def partial_update(self, request, pk=None):
        product = get_object_or_404(Product, pk=pk)
        serializer = ProductSerializer(product, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    def destroy(self, request, pk=None):
        product = get_object_or_404(Product, pk=pk)
        product.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    
    
class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

    def create(self, request):
        serializer = CategorySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def list(self, request):
        categories = Category.objects.all()
        serializer = CategorySerializer(categories, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        category = get_object_or_404(Category, pk=pk)
        serializer = CategorySerializer(category)
        return Response(serializer.data)

    def update(self, request, pk=None):
        category = get_object_or_404(Category, pk=pk)
        serializer = CategorySerializer(category, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def partial_update(self, request, pk=None):
        category = get_object_or_404(Category, pk=pk)
        serializer = CategorySerializer(category, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def destroy(self, request, pk=None):
        category = get_object_or_404(Category, pk=pk)
        category.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)