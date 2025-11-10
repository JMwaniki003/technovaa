import React from "react";

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center text-white py-28 px-6 flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1400&q=80')",
      }}
    >
      {/* Neutral dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Discover the Future of Electronics
        </h1>
        <p className="text-lg mb-6 text-gray-200">
          From smart gadgets to high-performance devices — Technovey brings you
          the latest technology for your digital lifestyle.
        </p>
        <button className="bg-white text-gray-900 font-semibold py-2 px-6 rounded-lg shadow-md hover:scale-105 hover:bg-gray-100 transition-transform duration-300">
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
