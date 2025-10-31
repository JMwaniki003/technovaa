import React from "react";

const Navigation = () => {
  return (
    <nav className="flex space-x-6">
      <a href="#home" className="hover:text-blue-400 transition duration-200">
        Home
      </a>
      <a href="#products" className="hover:text-blue-400 transition duration-200">
        Products
      </a>
      <a href="#about" className="hover:text-blue-400 transition duration-200">
        About
      </a>
      <a href="#contact" className="hover:text-blue-400 transition duration-200">
        Contact
      </a>
    </nav>
  );
};

export default Navigation;
