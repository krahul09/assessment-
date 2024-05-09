import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import CartPage from "./CartPage";

const Shop = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const products = [
    {
      name: "Sytherine",
      description: "stylish sofa chair",
      price: 2500000,
      image: require("../assets/sytherine.jpg"),
    },
    {
      name: "Leviosa",
      description: "stylish cafe chair",
      price: 2500000,
      image: require("../assets/leviosa.jpeg"),
    },
    {
      name: "Lolito",
      description: "luxury big sofa",
      price: 7000000,
      image: require("../assets/lolito.png"),
      isNew: true,
    },
    {
      name: "Respira",
      description: "outdoor bar table and stool",
      price: 500000,
      image: require("../assets/respira.jpg"),
      isOnSale: true,
    },
  ];

  return (
    <>
      <Header products={products} />
      <div className="container mx-auto my-8">
        <h1 className="text-3xl font-bold mb-6">Shop</h1>
        <div className="flex flex-wrap -mx-4">
          {products.map((product, index) => (
            <Store key={index} product={product} addToCart={addToCart} />
          ))}
        </div>
      </div>
      <Footer />
      <CartPage products={products} cartItems={cartItems} />
    </>
  );
};

const Store = ({ product, addToCart }) => (
  <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <ProductImage product={product} />
      <ProductDetails product={product} addToCart={addToCart} />
    </div>
  </div>
);

const ProductImage = ({ product }) => (
  <div className="relative">
    <img
      src={product.image}
      alt={product.name}
      className="w-full h-48 object-cover"
    />
  </div>
);

// const ProductLabels = ({ product }) => (
//   <>
//     {product?.isNew && (
//       <div className="absolute top-2 left-2 bg-blue-500 text-white px-2 py-1 rounded-full">
//         New
//       </div>
//     )}
//     {product?.isOnSale && (
//       <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full">
//         Sale
//       </div>
//     )}
//   </>
// );

const ProductDetails = ({ product, addToCart }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="p-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
      <p className="text-gray-600 mb-2">{product.description}</p>
      <ProductPrice product={product} />
      {isHovered && (
        <button
          onClick={() => addToCart(product)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};

const ProductPrice = ({ product }) => (
  <div className="flex justify-between items-center">
    <span className="font-bold text-lg">
      Rs {product?.price.toLocaleString()}
    </span>
  </div>
);

export default Shop;
