import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <div className="bg-white">
      <Header />

      <HeroSection />

      <div className="px-8 py-12">
        <h2 className="text-2xl font-bold mb-4">Browse The Range</h2>
        <p className="text-gray-600 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="grid grid-cols-3 gap-8">
          <div>
            <img src="../assets/dining.jpg" alt="Dining" className="mb-4" />
            <h3 className="text-lg font-bold">Dining</h3>
          </div>
          <div>
            <img src="../assets/living.jpg" alt="Living" className="mb-4" />
            <h3 className="text-lg font-bold">Living</h3>
          </div>
          <div>
            <img src="../assets/bedroom.jpg" alt="Bedroom" className="mb-4" />
            <h3 className="text-lg font-bold">Bedroom</h3>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
