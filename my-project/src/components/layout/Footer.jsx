import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <h2 className="text-2xl font-bold text-blue-400 mb-4 md:mb-0">
          Technovey
        </h2>
        <nav className="space-x-6 mb-4 md:mb-0">
          <a href="#home" className="hover:text-white">Home</a>
          <a href="#products" className="hover:text-white">Products</a>
          <a href="#about" className="hover:text-white">About</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Technovey. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
