import React from "react";

const Posts = ({ title, description, image, date, category }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
      <div className="flex items-center mb-4">
        <img src={image} alt="Post" className="w-12 h-12 rounded-full mr-4" />
        <div>
          <p className="text-gray-500">{date}</p>
          <p className="text-gray-500">{category}</p>
        </div>
      </div>
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700 mb-4">{description}</p>
      <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
        Read more
      </button>
    </div>
  );
};

export default Posts;
