import React from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-blue-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">
          Get in Touch with Us
        </h2>
        <p className="text-gray-700 mb-10">
          Have questions or need help choosing the right product?  
          Send us a message — we’d love to hear from you!
        </p>

        <form className="max-w-3xl mx-auto bg-white rounded-2xl shadow-md p-8">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <input
              type="text"
              placeholder="Your Name"
              className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none mb-6"
            required
          ></textarea>
          <button
            type="submit"
            className="flex items-center justify-center gap-2 bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            <Send className="w-5 h-5" />
            Send Message
          </button>
        </form>

        <div className="mt-12 text-gray-700 space-y-3 flex flex-col items-center">
          <p className="flex items-center gap-2">
            <Phone className="w-5 h-5 text-blue-600" />
            <strong>Phone:</strong> +254 717 163 105
          </p>
          <p className="flex items-center gap-2">
            <Mail className="w-5 h-5 text-blue-600" />
            <strong>Email:</strong> support@technovey.com
          </p>
          <p className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-blue-600" />
            <strong>Location:</strong> Nairobi, Kenya
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
