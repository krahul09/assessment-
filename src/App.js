import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Shop from "./pages/Shop";

function App() {
  const [showCart, setShowCart] = useState(false);

  const toggleCart = () => {
    setShowCart(!showCart);
  };
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/" element={<HomePage />}></Link>
            </li>
            <li>
              <Link to="/shop" element={<Shop />}></Link>
            </li>
            <li>
              <Link to="/about" element={<Contact />}></Link>
            </li>
            <li>
              <Link to="/contact" element={<About />}></Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<Contact />} />
          <Route path="/contact" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
