const products = require("../products");
const openai = require("../config/openai");

exports.askAI = async (req, res) => {
  try {
    const { query } = req.body;

    if (!query) {
      return res.status(400).json({ message: "query is required" });
    }

    if (!openai) {
      return res.status(503).json({
        message: "AI not configured",
        products: [],
        summary: "",
      });
    }

    const productText = products
      .map(
        (p) =>
          `ID:${p.id}, Name:${p.name}, Category:${p.category}, Price:${p.price}`,
      )
      .join("\n");

    const prompt = `
User query: ${query}

Product list:
${productText}


`;

    const aiRes = await openai.chat.completions.create({
      model: "gpt-4.1-mini",
      messages: [{ role: "user", content: prompt }],
    });

    const text = aiRes.choices[0].message.content;

    let parsed;
    try {
      const match = text.match(/\{[\s\S]*\}/);
      parsed = match ? JSON.parse(match[0]) : null;
    } catch {
      parsed = null;
    }

    let summary = "";
    let productIds = [];

    if (parsed) {
      summary = parsed.summary || "";
      productIds = parsed.productIds || [];
    } else {
      summary = text;
    }

    let matchedProducts = products.filter((p) =>
      productIds.map(String).includes(String(p.id)),
    );

    if (matchedProducts.length === 0 && summary) {
      matchedProducts = products.filter((p) =>
        summary.toLowerCase().includes(p.name.toLowerCase()),
      );
    }

    res.json({
      products: matchedProducts,
      summary,
    });
  } catch (err) {
    res.status(503).json({
      message: "AI service error",
      error: err.message,
      products: [],
      summary: "",
    });
  }
};
