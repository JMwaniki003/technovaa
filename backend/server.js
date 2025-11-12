import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// ✅ Test route
app.get("/", (req, res) => {
  res.json({ message: "Backend is running 🚀" });
});

// ✅ Products API route
app.get("/api/products", (req, res) => {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      description: "Noise-cancelling over-ear headphones with 30h battery life.",
      price: 99.99,
      image: "https://images.unsplash.com/photo-1585386959984-a41552231693",
    },
    {
      id: 2,
      name: "Smartwatch",
      description: "Track your fitness and notifications in style.",
      price: 149.99,
      image: "https://images.unsplash.com/photo-1517430816045-df4b7de1cd0d",
    },
    {
      id: 3,
      name: "Bluetooth Speaker",
      description: "Compact design with powerful sound and waterproof build.",
      price: 59.99,
      image: "https://images.unsplash.com/photo-1585386959984-a41552231693",
    },
  ];
  res.json(products);
});

// ✅ Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
