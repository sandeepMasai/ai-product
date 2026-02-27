import { useEffect, useState } from "react";
import { getProducts } from "../api";
import ProductCard from "../components/ProductCard";
import AskAI from "../components/AskAI";
import CategoryFilter from "../components/CategoryFilter";
import "../App.css";

function Home() {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const loadProducts = async (category = "") => {
    try {
      setLoading(true);
      setError("");

      const res = await getProducts(category);
      const data = res?.data?.products || [];

      setProducts(data);

      if (!category) {
        setAllProducts(data);
      }
    } catch {
      setError("Failed to load products");
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <div className="home-container">
      <h1>AI Product Discovery</h1>

      <AskAI setProducts={setProducts} setSummary={setSummary} />

      <CategoryFilter allProducts={allProducts} onFilter={loadProducts} />

      <h3 className="home-summary">{summary}</h3>

      {loading && <p className="home-loading">Loading...</p>}

      {error && <p className="home-error">{error}</p>}

      {!loading && products.length === 0 && (
        <p className="home-empty">No products found</p>
      )}

      <div className="product-grid">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}

export default Home;
