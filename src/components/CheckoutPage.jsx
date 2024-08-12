import React, { useState, useEffect } from 'react';
import Header from './Header';
import MobileMenu from './MobileMenu';

const processIdealPayment = async () => {
  const response = await fetch('/api/create-ideal-payment', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      amount: 20000,
      description: '1-to-1 Coaching Call with Daneel',
    }),
  });

  const result = await response.json();
  if (result.url) {
    window.location.href = result.url;
  } else {
    alert('Payment failed. Please try again.');
  }
};

const loadPayPalScript = (clientId) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`;
    script.onload = () => resolve(window.paypal);
    script.onerror = () => reject(new Error('PayPal SDK failed to load'));
    document.body.appendChild(script);
  });
};

const CheckoutPage = () => {
  const [paymentMethod, setPaymentMethod] = useState('creditCard');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleTermsChange = (e) => {
    setAcceptedTerms(e.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!acceptedTerms) {
      alert('You must accept the Terms of Service and Privacy Policy to proceed.');
      return;
    }
    if (paymentMethod === 'ideal') {
      await processIdealPayment();
    } else if (paymentMethod === 'creditCard') {
      // Integrate with credit card payment processor
      alert('Credit card payment processing is not implemented yet.');
    }
  };

  useEffect(() => {
    if (paymentMethod === 'paypal') {
      loadPayPalScript('YOUR_CLIENT_ID').then(paypal => {
        paypal.Buttons({
          createOrder: function(data, actions) {
            return actions.order.create({
              purchase_units: [{ amount: { value: '200.00' } }]
            });
          },
          onApprove: function(data, actions) {
            return actions.order.capture().then(function(details) {
              alert('Transaction completed by ' + details.payer.name.given_name);
            });
          }
        }).render('#paypal-button-container');
      }).catch(err => console.error(err));
    }
  }, [paymentMethod]);

  return (
    <div className='bg-black text-green-500 min-h-screen flex flex-col'>
      <Header />
      <MobileMenu />
      <main className='flex flex-col items-center justify-center flex-1 p-6'>
        <div className='bg-gray-800 text-green-100 rounded-lg shadow-lg max-w-4xl w-full'>
          <div className='p-6'>
            <h1 className='text-3xl font-extrabold mb-4 text-center'>Checkout</h1>
            <p className='text-gray-300 mb-6 text-center'>
              Please review your order details below and select your preferred payment method.
            </p>

            {/* Payment Method Selection */}
            <div className='flex flex-col md:flex-row md:space-x-4 mb-6'>
              {['creditCard', 'paypal', 'ideal'].map(method => (
                <div
                  key={method}
                  className={`cursor-pointer flex-1 p-4 rounded-lg border border-gray-700 hover:border-green-500 transition duration-300 mb-4 md:mb-0 ${
                    paymentMethod === method ? 'bg-gray-900 border-green-500' : 'bg-gray-800'
                  }`}
                  onClick={() => handlePaymentMethodChange(method)}
                >
                  <h2 className='text-xl font-bold mb-2 text-gray-100 text-center'>{method === 'creditCard' ? 'Credit Card' : method === 'paypal' ? 'PayPal' : 'iDEAL'}</h2>
                  <p className='text-gray-300 text-center'>
                    {method === 'creditCard' && 'Pay with your credit or debit card.'}
                    {method === 'paypal' && 'Pay with PayPal, the world\'s leading payment gateway.'}
                    {method === 'ideal' && 'Pay using iDEAL, your preferred bank.'}
                  </p>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className='bg-gray-900 p-6 rounded-lg mb-6'>
              <h2 className='text-2xl font-bold mb-4 text-center'>Order Summary</h2>
              <p className='text-gray-300 mb-2'><strong>Product:</strong> 1-to-1 Coaching Call with Daneel</p>
              <p className='text-gray-300 mb-2'><strong>Duration:</strong> 2 Hours</p>
              <p className='text-gray-300 mb-4'><strong>Price:</strong> $200</p>
            </div>

            {/* Payment Forms */}
            {paymentMethod === 'creditCard' && (
              <form onSubmit={handleSubmit} className='bg-gray-900 p-6 rounded-lg'>
                <h2 className='text-2xl font-bold mb-4'>Credit Card Details</h2>
                <label className='block mb-4'>
                  <span className='text-gray-300'>Full Name</span>
                  <input
                    type='text'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    className='mt-1 block w-full bg-gray-800 text-gray-100 rounded-lg border border-gray-700 py-2 px-3'
                    required
                  />
                </label>

                <label className='block mb-4'>
                  <span className='text-gray-300'>Email Address</span>
                  <input
                    type='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    className='mt-1 block w-full bg-gray-800 text-gray-100 rounded-lg border border-gray-700 py-2 px-3'
                    required
                  />
                </label>

                <label className='block mb-4'>
                  <span className='text-gray-300'>Card Number</span>
                  <input
                    type='text'
                    name='cardNumber'
                    value={formData.cardNumber}
                    onChange={handleChange}
                    className='mt-1 block w-full bg-gray-800 text-gray-100 rounded-lg border border-gray-700 py-2 px-3'
                    required
                  />
                </label>

                <div className='flex flex-col md:flex-row md:space-x-4 mb-4'>
                  <label className='flex-1'>
                    <span className='text-gray-300'>Expiry Date</span>
                    <input
                      type='text'
                      name='expiryDate'
                      value={formData.expiryDate}
                      onChange={handleChange}
                      className='mt-1 block w-full bg-gray-800 text-gray-100 rounded-lg border border-gray-700 py-2 px-3'
                      required
                    />
                  </label>

                  <label className='flex-1'>
                    <span className='text-gray-300'>CVV</span>
                    <input
                      type='text'
                      name='cvv'
                      value={formData.cvv}
                      onChange={handleChange}
                      className='mt-1 block w-full bg-gray-800 text-gray-100 rounded-lg border border-gray-700 py-2 px-3'
                      required
                    />
                  </label>
                </div>

                {/* Terms and Conditions Checkbox */}
                <div className='flex items-center mb-4'>
                  <input
                    type='checkbox'
                    id='terms'
                    checked={acceptedTerms}
                    onChange={handleTermsChange}
                    className='mr-2'
                    required
                  />
                  <label htmlFor='terms' className='text-gray-300'>
                    I accept the <a href="/terms-of-service" className='text-green-400 hover:underline'>Terms of Service</a> and <a href="/privacy-policy" className='text-green-400 hover:underline'>Privacy Policy</a>.
                  </label>
                </div>

                <button
                  type='submit'
                  className='bg-green-600 text-black py-3 px-6 rounded-lg shadow-lg hover:bg-green-700 transition duration-300 w-full'
                >
                  Complete Purchase
                </button>
              </form>
            )}

            {paymentMethod === 'paypal' && (
              <div id='paypal-button-container' className='mt-6 w-full'></div>
            )}

            {paymentMethod === 'ideal' && (
              <div className='mt-6 text-center'>
                <h2 className='text-2xl font-bold mb-4'>iDEAL Payment</h2>
                <p className='text-gray-300 mb-4'>You will be redirected to your bank's payment page.</p>
                <button
                  onClick={handleSubmit}
                  className='bg-green-600 text-black py-3 px-6 rounded-lg shadow-lg hover:bg-green-700 transition duration-300'
                >
                  Proceed with iDEAL
                </button>
                {/* Terms and Conditions Checkbox for iDEAL */}
                <div className='flex items-center justify-center mt-6'>
                  <input
                    type='checkbox'
                    id='terms-ideal'
                    checked={acceptedTerms}
                    onChange={handleTermsChange}
                    className='mr-2'
                    required
                  />
                  <label htmlFor='terms-ideal' className='text-gray-300'>
                    I accept the <a href="/terms-of-service" className='text-green-400 hover:underline'>Terms of Service</a> and <a href="/privacy-policy" className='text-green-400 hover:underline'>Privacy Policy</a>.
                  </label>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      <footer className='bg-black py-4 text-center text-gray-400'>
        <p>&copy; {new Date().getFullYear()} Code Looney. All rights reserved.</p>
        <div className='mt-2'>
          <a href="/terms-of-service" className='hover:underline'>Terms of Service</a> | 
          <a href="/privacy-policy" className='hover:underline ml-2'>Privacy Policy</a>
        </div>
      </footer>
    </div>
  );
};

export default CheckoutPage;
