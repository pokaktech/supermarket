from razorpay_integration import create_payment, capture_payment

# Example usage of create_payment and capture_payment functions
def test_payment_flow():
    # Create a payment of 1000 paise (₹10)
    payment_order = create_payment(amount=1000, currency='INR', receipt_id='order_rcptid_11')
    if payment_order:
        print("Payment created successfully:")
        print(payment_order)
        
        # Extract payment ID for capturing payment
        payment_id = payment_order.get('id')
        
        # Capture payment (simulate capturing 1000 paise)
        success = capture_payment(payment_id=payment_id, amount=1000)
        
        if success:
            print("Payment captured successfully!")
        else:
            print("Payment capture failed.")
    else:
        print("Payment creation failed.")

if __name__ == "__main__":
    test_payment_flow()