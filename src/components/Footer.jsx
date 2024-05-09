import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Features Section */}
        <div className="flex items-center mb-4 md:mb-0">
          <div className="flex items-center mr-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-500 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
              />
            </svg>
            <span className="text-gray-600 font-medium">High Quality</span>
          </div>
          <div className="flex items-center mr-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-500 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
            <span className="text-gray-600 font-medium">
              Warranty Protection
            </span>
          </div>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-500 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 1h12m-4 0H7v12h9V9M5 5a2 2 0 012-2h10a2 2 0 012 2v14a2 2 0 01-2 2H7a2 2 0 01-2-2V5z"
              />
            </svg>
            <span className="text-gray-600 font-medium">Free Shipping</span>
          </div>
        </div>

        {/* Company Info */}
        <div className="flex flex-col md:flex-row mb-4 md:mb-0">
          <div className="mb-4 md:mb-0 md:mr-8">
            <h3 className="text-lg font-bold mb-2">Funiro.</h3>
            <p className="text-gray-600">
              400 University Drive Suite 200 Coral Gables, FL 33134 USA
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="text-gray-600 font-medium mb-2">Links</h4>
              <ul className="text-gray-500">
                <li>Home</li>
                <li>Shop</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="text-gray-600 font-medium mb-2">Help</h4>
              <ul className="text-gray-500">
                <li>Payment Options</li>
                <li>Returns</li>
                <li>Privacy Policies</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-gray-600 font-medium mb-2">Newsletter</h4>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email address"
              className="border border-gray-300 rounded-l py-2 px-4 flex-grow"
            />
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-r">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="container mx-auto mt-8 text-center text-gray-500">
        <p>&copy; 2023 funiro. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
