import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Alice M.",
      feedback:
        "Technovey products are top-notch! My SmartWatch 4 has made fitness tracking effortless — sleek design and super accurate.",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      role: "Fitness Enthusiast",
    },
    {
      name: "James K.",
      feedback:
        "The UltraBook Pro completely changed how I work. Lightning-fast and beautiful display — worth every penny!",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      role: "Software Engineer",
    },
    {
      name: "Sophia L.",
      feedback:
        "I love my SmartPhone X10! The camera quality is insane and battery life lasts me the whole day easily.",
      image: "https://randomuser.me/api/portraits/women/50.jpg",
      role: "Content Creator",
    },
  ];

  return (
    <section id="testimonials" className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-10">
          What Our Customers Say
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition duration-300"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-blue-500"
              />
              <h3 className="text-xl font-semibold text-blue-700">{item.name}</h3>
              <p className="text-gray-500 text-sm mb-3">{item.role}</p>
              <p className="text-gray-700 italic">“{item.feedback}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
