import React from "react";

const Products = () => {
  const products = [
    {
      name: "Technovey SmartPhone X10",
      description: "A powerful smartphone with AI-enhanced camera and all-day battery.",
      price: "$799",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Technovey UltraBook Pro",
      description: "Lightweight laptop built for speed, productivity, and performance.",
      price: "$1199",
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Technovey SmartWatch 4",
      description: "Stay connected with fitness tracking, notifications, and modern design.",
      price: "$299",
      image: "https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-10">Our Latest Products</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-2xl shadow hover:shadow-xl transition duration-300 overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-blue-600 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <p className="text-lg font-bold text-gray-800">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
