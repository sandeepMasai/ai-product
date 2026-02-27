import { useEffect, useState } from "react";
import "../App.css";

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
    <div className="category-filter">
      <select
        className="category-select"
        value={selected}
        onChange={handleChange}
      >
        <option value="">All</option>

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
