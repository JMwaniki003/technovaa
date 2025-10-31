import React from "react";

const Features = () => {
  const features = [
    {
      title: "Smartphones",
      description: "Experience the latest innovation in mobile technology designed for speed and style.",
      icon: "📱",
    },
    {
      title: "Laptops",
      description: "Powerful, sleek, and efficient devices to keep your work and creativity flowing.",
      icon: "💻",
    },
    {
      title: "Smart Accessories",
      description: "Wearables and gadgets that connect your lifestyle seamlessly.",
      icon: "⌚",
    },
  ];

  return (
    <section id="features" className="py-16 bg-white text-center">
      <h2 className="text-4xl font-bold text-gray-900 mb-10">Our Featured Devices</h2>
      <div className="grid md:grid-cols-3 gap-10 px-6 max-w-6xl mx-auto">
        {features.map((item, index) => (
          <div
            key={index}
            className="p-8 bg-gray-100 rounded-2xl shadow hover:shadow-lg transition duration-300"
          >
            <div className="text-5xl mb-4">{item.icon}</div>
            <h3 className="text-2xl font-semibold text-blue-600 mb-3">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
