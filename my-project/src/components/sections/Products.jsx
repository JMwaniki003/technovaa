import React, { useState } from "react";

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const products = [
    {
      name: "Technovey SmartPhone X10",
      description: "A powerful smartphone with AI‑enhanced camera and all‑day battery.",
      price: 799,
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Technovey UltraBook Pro",
      description: "Lightweight laptop built for speed, productivity, and performance.",
      price: 1199,
      image:
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Technovey SmartWatch 4",
      description: "Stay connected with fitness tracking, notifications, and modern design.",
      price: 299,
      image:
        "https://images.unsplash.com/photo-1719075596884-2020f827a8dd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
    },
    {
      name: "Technovey AirPods Z",
      description:
        "Crystal‑clear sound with active noise cancellation and wireless charging.",
      price: 199,
      image:
        "https://images.unsplash.com/photo-1623788728910-23180a99871d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1091",
      featured: true,
    },
    {
      name: "Technovey Tablet Max 12",
      description:
        "Slim, fast, and perfect for creativity with a vibrant edge‑to‑edge display.",
      price: 649,
      image:
        "https://plus.unsplash.com/premium_photo-1680371834061-6c891e40218d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=784",
      featured: true,
    },
    {
      name: "Technovey Gaming Console S9",
      description:
        "Next‑level gaming experience with 4K graphics and ultra‑fast load times.",
      price: 499,
      image:
        "https://images.unsplash.com/photo-1580234797602-22c37b2a6230?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1167",
    },
    {
      name: "Technovey Drone V3",
      description:
        "Capture breathtaking aerial footage with precision control and 4K camera.",
      price: 899,
      image:
        "https://images.unsplash.com/photo-1488462104523-514bea5f99b3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1178",
    },
    {
      name: "Technovey CCTV Camera",
      description:
        "High-definition security camera with night vision and real-time monitoring.",
      price: 349,
      image:
        "https://images.unsplash.com/photo-1528312635006-8ea0bc49ec63?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1200",
    },
  ];

  // Sort products so featured appear first
  const sortedProducts = [...products].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return 0;
  });

  const handleBuyNow = (product) => {
    setSelectedProduct(product);
    setQuantity(1);
  };

  const handleQuantityChange = (value) => {
    if (value >= 1) setQuantity(value);
  };

  const handleAddToCart = (product) => {
    const existingItem = cart.find((item) => item.name === product.name);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity }]);
    }
    setSelectedProduct(null);
    setShowCart(true);
  };

  const handleRemoveFromCart = (name) => {
    setCart(cart.filter((item) => item.name !== name));
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <section id="products" className="py-20 bg-white relative">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-4xl font-bold text-gray-900">
            Our Latest Products
          </h2>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            onClick={() => setShowCart(!showCart)}
          >
            🛒 Cart ({cart.length})
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 sm:gap-10">
          {sortedProducts.map((product, index) => (
            <div
              key={index}
              className={`relative bg-gray-100 rounded-2xl shadow hover:shadow-xl hover:scale-105 transition-transform duration-300 overflow-hidden ${
                product.featured ? "ring-2 ring-blue-400" : ""
              }`}
            >
              {product.featured && (
                <span className="absolute top-3 left-3 bg-yellow-400 text-gray-900 text-xs font-bold px-2 py-1 rounded-full z-10">
                  Featured
                </span>
              )}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-cover transition-transform duration-300 hover:scale-110"
              />
              <div className="p-6 text-left">
                <h3 className="text-2xl font-semibold text-blue-600 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <p className="text-lg font-bold text-gray-800 mb-4">
                  ${product.price}
                </p>
                <button
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                  onClick={() => handleBuyNow(product)}
                >
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- Modal & Cart Sidebar code remains unchanged --- */}
    </section>
  );
};

export default Products;
