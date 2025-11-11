import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const products = [
  {
    id: 1,
    name: "Smartphone X10",
    description: "High-performance smartphone with 5G and 128GB storage.",
    price: 799,
    image: "https://images.unsplash.com/photo-1510557880182-3d4d3c1a36b1?w=800"
  },
  {
    id: 2,
    name: "Wireless Headphones",
    description: "Noise-cancelling Bluetooth headphones with 30h battery life.",
    price: 199,
    image: "https://images.unsplash.com/photo-1585386959984-a41552231656?w=800"
  },
  {
    id: 3,
    name: "4K Ultra HD TV",
    description: "Smart TV with vivid colors and streaming support.",
    price: 999,
    image: "https://images.unsplash.com/photo-1606813902775-989b74903b6c?w=800"
  }
];

app.get("/api/products", (req, res) => {
  res.json(products);
});

// Optional root route
app.get("/", (req, res) => {
  res.send("✅ Server is running. Use /api/products to fetch products.");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
