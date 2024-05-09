import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link, useNavigate, useHistory } from "react-router-dom";

function Header({ products }) {
  console.log("Header data" + products);
  const navigate = useNavigate();

  const [isHome, setIsHome] = useState(false);
  const handleClick = () => {
    setIsHome(true);
  };

  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div>
      <nav className="flex justify-between items-center py-4 px-8 bg-white shadow-md">
        <div className="flex items-center">
          <img src={logo} className="w-20 h-20" alt="Logo" />
          <div className="text-5xl font-bold ml-2">Furniro</div>
        </div>

        <ul className="flex space-x-8">
          <li className="cursor-pointer" onClick={() => navigate(`/`)}>
            Home
          </li>
          <li className="cursor-pointer" onClick={() => navigate(`/shop`)}>
            Shop
          </li>
          <li className="cursor-pointer" onClick={() => navigate(`/about`)}>
            About
          </li>
          <li className="cursor-pointer" onClick={() => navigate(`/contact`)}>
            Contact
          </li>
        </ul>
        <div className="flex items-center space-x-4">
          <div>
            <svg
              className="w-6 h-6 cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </div>
          <div>
            <svg
              className="w-6 h-6 cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>
          <div>
            <svg
              className="w-6 h-6 cursor-pointer"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          </div>
          <div>
            <svg
              className="w-6 h-6 cursor-pointer"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
              onClick={toggleCart}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
