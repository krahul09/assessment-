import React from "react";

const CartItem = ({ item }) => (
  <div className="flex items-center mb-4">
    <img
      src={item.image}
      alt={item.name}
      className="w-20 h-20 object-cover rounded-md mr-4"
    />
    <div>
      <h3 className="text-lg font-semibold">{item.name}</h3>
      <p className="text-gray-600">
        {item.quantity} x {item.price.toLocaleString()}
      </p>
    </div>
  </div>
);

const CartSummary = ({ subtotal }) => (
  <div className="bg-gray-100 p-4 rounded-md">
    <p className="text-lg font-semibold mb-2">Subtotal</p>
    <p className="text-2xl font-bold">Rp {subtotal.toLocaleString()}</p>
  </div>
);

const ShoppingCart = () => {
  const cartItems = [
    {
      name: "Argand sofa",
      price: 250000,
      quantity: 1,
      image: "argand-sofa.jpg",
    },
    {
      name: "Controling Wood",
      price: 850000,
      quantity: 1,
      image: "controling-wood.jpg",
    },
  ];

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-3/4 md:pr-4">
          {cartItems.map((item, index) => (
            <CartItem key={index} item={item} />
          ))}
        </div>
        <div className="md:w-1/4">
          <CartSummary subtotal={subtotal} />
          <div className="mt-4 flex justify-end">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
              Checkout
            </button>
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
