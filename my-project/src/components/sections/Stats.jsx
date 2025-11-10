import React from "react";

const Stats = () => {
  const stats = [
    { label: "Products Sold", value: "10K+" },
    { label: "Happy Customers", value: "8K+" },
    { label: "Brands Featured", value: "50+" },
  ];

  return (
    <section id="stats" className="py-16 bg-gray-900 text-white text-center">
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 px-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="p-6 rounded-lg hover:bg-gray-800 transition-colors duration-300"
          >
            <h3 className="text-5xl font-bold">{stat.value}</h3>
            <p className="text-lg mt-2 text-gray-300">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
