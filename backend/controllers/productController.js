const products = require("../products");

exports.getProducts = (req, res) => {
  try {
    const { category } = req.query;

    if (!category) {
      return res.json({ products });
    }

    const filtered = products.filter((p) =>
      p.category?.toLowerCase().includes(category.toLowerCase()),
    );

    return res.json({ products: filtered });
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch products" });
  }
};
