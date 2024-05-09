import React from "react";

function HeroSection() {
  return (
    <div className="flex justify-between px-8 py-12">
      <div className="flex-1">
        <img src="../assets/HeroImage.png" alt="Hero" className="max-w-full" />
      </div>
      <div className="flex-1 flex flex-col justify-center items-start ml-8">
        <h2 className="text-4xl font-bold mb-4">Discover Our New Collection</h2>
        <p className="text-gray-600 mb-8">
          Step into our world of timeless elegance with our latest home decor
          collection! From sleek appliances to cozy sofas, each piece is crafted
          with care and style. Quality is our priority. Trust us to elevate your
          home with durable, exquisite furnishings. Explore our new collection
          today and transform your living space into a haven of comfort and
          luxury.
        </p>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">
          Buy Now
        </button>
      </div>
    </div>
  );
}

export default HeroSection;
