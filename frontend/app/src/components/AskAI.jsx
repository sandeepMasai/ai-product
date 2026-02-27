import { useState } from "react";
import { askAI } from "../api";

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
    <div className="flex flex-col gap-3 rounded-2xl border border-slate-800/80 bg-slate-900/60 p-4 shadow-[0_0_40px_-24px_rgba(16,185,129,0.7)] sm:flex-row sm:items-center">
      <div className="flex-1">
        <input
          className="w-full rounded-xl border border-slate-700/70 bg-slate-900/80 px-4 py-2.5 text-sm text-slate-50 placeholder:text-slate-500 outline-none ring-emerald-500/40 transition focus:border-emerald-500 focus:ring-2"
          value={query}
          placeholder='Ask things like "budget laptops for students" or "accessories for gaming"...'
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAsk()}
        />
        {error && (
          <p className="mt-2 text-xs text-rose-400/90">
            {error}
          </p>
        )}
      </div>

      <button
        className="inline-flex items-center justify-center rounded-xl bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400 disabled:cursor-not-allowed disabled:bg-emerald-500/60"
        onClick={handleAsk}
        disabled={loading || !query.trim()}
      >
        {loading ? "Thinking..." : "Ask AI"}
      </button>
    </div>
  );
}

export default AskAI;
