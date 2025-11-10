import React from "react";

const Features = () => {
  const features = [
    {
      title: "Tablets",
      description:
        "Slim, fast, and perfect for creativity with vibrant edge-to-edge displays.",
      image:
        "https://plus.unsplash.com/premium_photo-1680371834061-6c891e40218d?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=784",
      featured: true, // This will pulse and have a badge
    },
    {
      title: "Laptops",
      description:
        "Powerful, sleek, and efficient devices to keep your work and creativity flowing.",
      image:
        "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "AirPods",
      description:
        "Crystal-clear sound with active noise cancellation and wireless charging.",
      image:
        "https://images.unsplash.com/photo-1623788728910-23180a99871d?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section id="features" className="py-16 bg-white text-center">
      <h2 className="text-4xl font-bold text-gray-900 mb-10">
        Our Featured Devices
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 px-6 max-w-6xl mx-auto">
        {features.map((item, index) => (
          <div
            key={index}
            data-aos="fade-up"
            className="relative p-6 bg-gray-100 rounded-2xl shadow hover:shadow-lg hover:scale-105 transform transition duration-300 overflow-hidden"
          >
            {item.featured && (
              <span className="absolute top-3 left-3 bg-yellow-400 text-gray-900 text-xs font-bold px-2 py-1 rounded-full z-10 animate-pulse">
                Featured
              </span>
            )}
            <img
              src={item.image}
              alt={item.title}
              className={`w-full h-56 object-cover mb-4 rounded-xl transform transition-transform duration-300 hover:scale-105 ${
                item.featured ? "animate-pulse" : ""
              }`}
            />
            <h3 className="text-2xl font-semibold text-blue-600 mb-3">
              {item.title}
            </h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
