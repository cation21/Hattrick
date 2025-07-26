// components/PaymentGateway.jsx

import React from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://your-supabase-url.supabase.co',
  'public-anon-key'
);

const PaymentGateway = ({ selectedSlots, totalPrice, onSuccess }) => {
  const openRazorpay = async () => {
    const res = await fetch('/api/razorpay-order', {
      method: 'POST',
      body: JSON.stringify({ amount: totalPrice }),
    });
    const data = await res.json();

    const options = {
      key: 'YOUR_RAZORPAY_KEY', // Replace this with your Razorpay key
      amount: data.amount,
      currency: 'INR',
      name: 'Hattrick Turf Booking',
      description: 'Turf Slot Booking',
      order_id: data.id,
      handler: async function (response) {
        const { error } = await supabase.from('bookings').insert([
          {
            slots: selectedSlots,
            price: totalPrice,
            payment_id: response.razorpay_payment_id,
            order_id: response.razorpay_order_id,
          },
        ]);

        if (!error) {
          onSuccess();
        } else {
          alert('Booking failed after payment. Contact support.');
        }
      },
      theme: {
        color: '#F37254',
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <button
      onClick={openRazorpay}
      disabled={selectedSlots.length === 0}
      className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold"
    >
      Book Now & Pay
    </button>
  );
};

export default PaymentGateway;
