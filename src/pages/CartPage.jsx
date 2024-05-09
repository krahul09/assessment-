import React from "react";

const CartItem = ({ products, cartItems, quantity }) => (
  <div className="flex justify-between items-center py-4 border-b">
    <div className="flex items-center">
      <img
        src={products.image}
        alt={products.name}
        className="w-16 h-16 object-cover mr-4"
      />
      <span>{products.name}</span>
    </div>
    <span className="text-gray-500">₹{products.price.toFixed(2)}</span>
    <span>{quantity}</span>
    <span className="font-bold">₹{(products.price * quantity).toFixed(2)}</span>
  </div>
);

const CartPage = ({ cartItems }) => {
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-bold mb-6">Cart</h1>
      <div className="flex flex-col">
        <div className="flex justify-between items-center py-2 border-b">
          <span className="font-bold">Product</span>
          <span className="font-bold">Price</span>
          <span className="font-bold">Quantity</span>
          <span className="font-bold">Subtotal</span>
        </div>
        {cartItems.map((item, index) => (
          <CartItem key={index} {...item} />
        ))}
      </div>
      <div className="mt-6 flex justify-end">
        <div className="text-right">
          <div className="flex justify-between">
            <span className="font-bold">Subtotal</span>
            <span>₹{total.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mt-2">
            <span className="font-bold">Total</span>
            <span className="font-bold">₹{total.toFixed(2)}</span>
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
            Check Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
