require("dotenv").config();

const express = require("express");
const cors = require("cors");

const productRoutes = require("./routes/productRoutes");
const aiRoutes = require("./routes/aiRoutes");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT;

app.get("/test", (req, res) => {
  res.send("Backend is working ");
});

app.use("/api/products", productRoutes);
app.use("/api/ask", aiRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
