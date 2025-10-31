import React from "react";
import Navigation from "./Navigation"; // ✅ import Navigation component

const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-4 px-6 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-bold text-blue-400">Technovey</h1>
      <Navigation /> {/* ✅ use the separate Navigation component */}
    </header>
  );
};

export default Header;
