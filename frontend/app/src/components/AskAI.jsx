import { useState } from "react";
import { askAI } from "../api";
import "../App.css";

function AskAI({ setProducts, setSummary }) {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleAsk = async () => {
    if (!query.trim() || loading) return;

    try {
      setLoading(true);
      setError("");

      const res = await askAI(query);

      const products = res?.data?.products || [];
      const summary = res?.data?.summary || "";

      setProducts(products);

      setSummary(summary ? summary.split(".")[0] + "." : "");

      setQuery("");
    } catch {
      setError("AI service not working");
      setProducts([]);
      setSummary("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <input
        className="askai-input"
        value={query}
        placeholder="Ask AI "
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleAsk()}
      />

      <button
        className="askai-button"
        onClick={handleAsk}
        disabled={loading || !query.trim()}
      >
        {loading ? "Thinking..." : "Ask"}
      </button>

      {error && <p>{error}</p>}
    </div>
  );
}

export default AskAI;
