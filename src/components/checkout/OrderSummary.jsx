import React from "react";

function OrderSummary() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Product</h2>
      <div className="mb-4">
        <p>Subtotal</p>
        <p className="text-lg font-bold">Rs. 250,000.00</p>
      </div>
      <div className="mb-4">
        <p>Total</p>
        <p className="text-lg font-bold">Rs. 250,000.00</p>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-bold mb-2">Payment Method</h3>
        <div className="flex items-center mb-2">
          <input
            type="radio"
            name="paymentMethod"
            id="directBankTransfer"
            className="mr-2"
          />
          <label htmlFor="directBankTransfer">Direct Bank Transfer</label>
        </div>
        <p className="text-gray-500 mb-4">
          Bank transfer is only available with our local banks. Please use your
          Order ID as the payment reference. Your order will not be shipped
          until the funds have cleared in our account.
        </p>
        <div className="flex items-center mb-2">
          <input
            type="radio"
            name="paymentMethod"
            id="cashOnDelivery"
            className="mr-2"
          />
          <label htmlFor="cashOnDelivery">Cash on Delivery</label>
        </div>
        <p className="text-gray-500 mb-4">
          Your personal data will be used to support your experience throughout
          this website, to manage access to your account, and for other purposes
          described in our privacy policy.
        </p>
      </div>
      <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
        Place order
      </button>
    </div>
  );
}

export default OrderSummary;
