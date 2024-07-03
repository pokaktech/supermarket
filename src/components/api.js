import axios from 'axios';

export const initiatePayment = async (amount) => {
  try {
    const response = await axios.post(' http://127.0.0.1:8000/accounts/create_payment/', { amount });
    return response.data;
  } catch (error) {
    console.error('Error initiating payment:', error);
    throw error;
  }
};

export const verifyPayment = async (paymentData) => {
  try {
    const response = await axios.post(' http://127.0.0.1:8000/accounts/verify_payment/', paymentData);
    return response.data;
  } catch (error) {
    console.error('Error verifying payment:', error);
    throw error;
  }
};
