import React from "react";
import { Facebook, Instagram, Twitter, Twitch } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    "Our Products": [
      { name: "Tablets", icon: "📱" },
      { name: "Laptops", icon: "💻" },
      { name: "AirPods", icon: "🎧" },
      { name: "VR Headset", icon: "🕶️" },
      { name: "Smart Watch", icon: "⌚" },
    ],
    "Top Features": [
      { name: "High Performance", icon: "⚡" },
      { name: "AI Camera", icon: "🤖" },
      { name: "Wireless Charging", icon: "🔋" },
      { name: "Smart Connectivity", icon: "🌐" },
    ],
    Resources: [
      { name: "Blog", icon: "📝" },
      { name: "Help Center", icon: "❓" },
      { name: "Tutorials", icon: "🎓" },
      { name: "Support", icon: "💬" },
      { name: "Community", icon: "👥" },
    ],
    Company: [
      { name: "About Us", icon: "🏢" },
      { name: "Careers", icon: "💼" },
      { name: "Press", icon: "📰" },
      { name: "Privacy Policy", icon: "🔒" },
      { name: "Terms of Service", icon: "📜" },
    ],
    "Favourite Things": [
      { name: "Wishlist", icon: "❤️" },
      { name: "Gift Cards", icon: "🎁" },
      { name: "Deals", icon: "💰" },
      { name: "New In Store", icon: "🆕" },
      { name: "Best Sellers", icon: "⭐" },
    ],
  };

  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300 py-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10">
        {Object.entries(footerLinks).map(([section, links]) => (
          <div key={section}>
            <h3 className="text-white font-bold mb-4">{section}</h3>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.name} className="flex items-center gap-2">
                  <span className="text-white">{link.icon}</span>
                  <a href="#" className="hover:text-white transition-colors duration-300">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-10 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0 border-t border-gray-700 pt-6">
        {/* Social Icons */}
        <div className="flex space-x-4">
          <a href="#" aria-label="Facebook" className="hover:text-white transition-transform duration-300 hover:scale-110 hover:shadow-md hover:shadow-white/50">
            <Facebook size={20} />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-white transition-transform duration-300 hover:scale-110 hover:shadow-md hover:shadow-white/50">
            <Instagram size={20} />
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-white transition-transform duration-300 hover:scale-110 hover:shadow-md hover:shadow-white/50">
            <Twitter size={20} />
          </a>
          <a href="#" aria-label="Twitch" className="hover:text-white transition-transform duration-300 hover:scale-110 hover:shadow-md hover:shadow-white/50">
            <Twitch size={20} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400 text-center md:text-right w-full md:w-auto mt-4 md:mt-0">
          © {new Date().getFullYear()} Technovey. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
