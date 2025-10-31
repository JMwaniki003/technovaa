import React from "react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-900 to-blue-600 text-white py-20 px-6 flex flex-col md:flex-row items-center justify-center gap-10">
      {/* Left side text */}
      <div className="max-w-lg text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Discover the Future of Electronics
        </h1>
        <p className="text-lg mb-6 text-gray-200">
          From smart gadgets to high-performance devices — Technovey brings you
          the latest technology for your digital lifestyle.
        </p>
        <button className="bg-white text-blue-700 font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-blue-100 transition duration-300">
          Shop Now
        </button>
      </div>

      {/* Right side image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=900&q=80"
          alt="Electronic devices showcase"
          className="w-80 md:w-96 drop-shadow-2xl rounded-xl"
        />
      </div>
    </section>
  );
};

export default Hero;
