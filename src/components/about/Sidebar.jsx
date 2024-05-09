import React from "react";

function Sidebar() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="mb-6">
        <h3 className="text-lg font-bold mb-2">Categories</h3>
        <ul>
          <li>Crafts</li>
          <li>Design</li>
          <li>Handmade</li>
          <li>Interior</li>
          <li>Wicker</li>
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-bold mb-2">Recent Posts</h3>
        <ul>
          <li>Going all-in with millennial design</li>
          <li>5 easy ways to get cozy for accounting</li>
          <li>Handmade pieces that bring back warmth</li>
          <li>Modern home is cozy</li>
          <li>Colorful office for spring</li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
