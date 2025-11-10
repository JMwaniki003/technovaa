import React from "react";
import { Facebook, Instagram, Twitter, Twitch } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
        {/* Brand */}
        <h2 className="text-2xl font-bold text-white">
          Technovey
        </h2>

        {/* Navigation Links */}
        <nav className="flex space-x-6">
          <a href="#home" className="hover:text-white transition-colors duration-300">Home</a>
          <a href="#products" className="hover:text-white transition-colors duration-300">Products</a>
          <a href="#about" className="hover:text-white transition-colors duration-300">About</a>
          <a href="#contact" className="hover:text-white transition-colors duration-300">Contact</a>
        </nav>

        {/* Social Icons */}
        <div className="flex space-x-4">
          <a href="#" className="hover:text-white transition-transform duration-300 hover:scale-110">
            <Facebook size={20} />
          </a>
          <a href="#" className="hover:text-white transition-transform duration-300 hover:scale-110">
            <Instagram size={20} />
          </a>
          <a href="#" className="hover:text-white transition-transform duration-300 hover:scale-110">
            <Twitter size={20} />
          </a>
          <a href="#" className="hover:text-white transition-transform duration-300 hover:scale-110">
            <Twitch size={20} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400 text-center md:text-right w-full md:w-auto">
          © {new Date().getFullYear()} Technovey. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
