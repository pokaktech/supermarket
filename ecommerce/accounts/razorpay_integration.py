# your_app/razorpay_integration.py
from razorpay import Client 
import razorpay

# Initialize Razorpay client
client = razorpay.Client(auth=("rzp_test_IaGnSH1ZCoxcdg", "Ozb16vWTNAfMoXUnMhGnJJDy"))

def create_payment(amount, currency='INR', receipt_id=None):
    # Create payment order
    data = {
        'amount': amount * 100,               
        'currency': currency,
        'receipt': receipt_id,
        'payment_capture': '1'         
    }
    payment_order = client.order.create(data=data)
    return payment_order



