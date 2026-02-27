import { useEffect, useState } from "react";

function CategoryFilter({ allProducts = [], onFilter }) {
  const [categories, setCategories] = useState([]);
  const [selected, setSelected] = useState("");

  useEffect(() => {
    const unique = [...new Set(allProducts.map((p) => p.category))].sort();
    setCategories(unique);
  }, [allProducts]);

  const handleChange = (e) => {
    const value = e.target.value;
    setSelected(value);
    onFilter(value);
  };

  return (
    <div className="flex items-center gap-3">
      <span className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
        Filter
      </span>
      <select
        className="rounded-xl border border-slate-700/70 bg-slate-900/80 px-3 py-2 text-xs text-slate-100 outline-none ring-emerald-500/40 transition hover:border-emerald-500 focus:border-emerald-500 focus:ring-2 sm:text-sm"
        value={selected}
        onChange={handleChange}
      >
        <option value="">All categories</option>

        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CategoryFilter;
