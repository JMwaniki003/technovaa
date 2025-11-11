import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Hamburger icons
import Navigation from "./Navigation";
import Logo from "../../assets/images/logo.png"; // Replace with your logo path

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="bg-gray-900 text-white fixed w-full z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo + Brand */}
        <a href="#hero" className="flex items-center space-x-2">
          <img src={Logo} alt="Technovey Logo" className="h-10 w-auto" />
          <span className="text-2xl font-bold text-blue-400">Technovey</span>
        </a>

        {/* Desktop nav handled in Navigation.jsx */}
        <Navigation isOpen={isOpen} closeMenu={closeMenu} />

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden focus:outline-none text-white"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
