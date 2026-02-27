require("dotenv").config();

const express = require("express");
const cors = require("cors");

const productRoutes = require("./routes/productRoutes");
const aiRoutes = require("./routes/aiRoutes");

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: [
      "http://localhost:5175",
      "https://ai-product-1.onrender.com",
    ],
    methods: ["GET", "POST", "OPTIONS"],
  }),
);

const PORT = process.env.PORT || 5000;

app.get("/test", (req, res) => {
  res.send("Backend is working");
});

app.use("/api/products", productRoutes);
app.use("/api/ask", aiRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
