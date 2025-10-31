import React from "react";
import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import Features from "./components/sections/Features";
import Products from "./components/sections/Products";
import About from "./components/sections/About";
import Stats from "./components/sections/Stats";
import Testimonials from "./components/sections/Testimonials";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Header />
      <Hero />
      <Features />
      <Products />
      <About />
      <Stats />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
