import { useEffect, useMemo, useState } from "react";
import { getProducts } from "../api";
import ProductCard from "../components/ProductCard";
import AskAI from "../components/AskAI";
import CategoryFilter from "../components/CategoryFilter";

const SMART_MATCHING_IMAGE_URL =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt2u74b-P16xwbjpGKex421Tmy1DXSb7RTJA&s";

function Home() {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [activeFeature, setActiveFeature] = useState(0);

  const features = useMemo(
    () => [
      {
        title: "Smart matching",
        description:
          "Let the AI understand what the user wants and surface the most relevant products.",
        icon: "⚡️",
      },
      {
        title: "Natural-language search",
        description:
          "Type \"budget laptops for students\" or \"accessories for gaming\" instead of manual filters.",
        icon: "🔍",
      },
      {
        title: "Clear product overviews",
        description:
          "Summaries help users quickly understand why a product is a good fit.",
        icon: "📊",
      },
      {
        title: "Configurable filters",
        description:
          "Categories and tags can still be used for precise control when needed.",
        icon: "📣",
      },
    ],
    []
  );

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

  useEffect(() => {
    const id = setInterval(
      () => setActiveFeature((idx) => (idx + 1) % features.length),
      4500
    );
    return () => clearInterval(id);
  }, [features.length]);

  return (
    <div className="space-y-10">
      {/* Hero */}
      <section className="space-y-6">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-emerald-400">
          Product discovery with AI
        </p>
        <h1 className="max-w-3xl text-balance text-3xl font-semibold tracking-tight text-slate-50 md:text-4xl lg:text-5xl">
          AI‑assisted product discovery for{" "}
          <span className="bg-gradient-to-r from-emerald-400 via-sky-400 to-emerald-300 bg-clip-text text-transparent">
            faster, more relevant results
          </span>
          .
        </h1>
        <p className="max-w-2xl text-sm text-slate-400 md:text-base">
          Ask in plain language, filter by category, and instantly see a focused
          set of products that match what the user has in mind.
        </p>
      </section>

      {/* Slider-like feature cards */}
      <section className="space-y-6 rounded-3xl border border-emerald-500/20 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 px-5 py-12 shadow-[0_0_80px_-40px_rgba(16,185,129,1)] md:px-10">
        <h2 className="text-center text-xl font-semibold tracking-tight text-slate-50 md:text-2xl">
          Why use AI for product discovery?
        </h2>

        <p className="mx-auto max-w-3xl text-center text-xs text-slate-400 md:text-sm">
          Explain to interviewers and users how AI turns vague, natural‑language intent
          into concrete product suggestions, while still working alongside traditional
          filters and categories.
        </p>

        <div className="mt-10 overflow-hidden">
          <div className="flex gap-6 transition-transform duration-500 ease-out"
               style={{ transform: `translateX(-${activeFeature * 100}%)` }}>
            {features.map((feature, index) => (
              <article
                key={feature.title}
                className="min-w-full shrink-0 px-1 sm:min-w-[50%] md:min-w-[33.33%] lg:min-w-[25%]"
              >
                <div className="relative flex min-h-[330px] flex-col justify-between rounded-[28px] border border-slate-700/80 bg-gradient-to-br from-slate-900 via-slate-950 to-black px-7 py-8 shadow-[0_0_60px_-30px_rgba(16,185,129,1)]">
                  {feature.title === "Smart matching" ? (
                    <div className="mb-5 flex items-center justify-center">
                      <img
                        src={SMART_MATCHING_IMAGE_URL}
                        alt="Smart matching"
                        className="h-[200px] w-auto rounded-2xl object-cover"
                      />
                    </div>
                  ) : (
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/10 text-xl text-emerald-300">
                      <span aria-hidden>{feature.icon}</span>
                    </div>
                  )}
                  <h3 className="text-center text-base font-semibold text-slate-50 md:text-lg">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-center text-sm leading-relaxed text-slate-400 md:text-[15px]">
                    {feature.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-4 flex items-center justify-center gap-2">
          {features.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveFeature(idx)}
              className={`h-1.5 rounded-full transition-all ${
                activeFeature === idx
                  ? "w-6 bg-emerald-400"
                  : "w-2 bg-slate-600"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Ask AI + filters */}
      <section className="space-y-6">
        <AskAI setProducts={setProducts} setSummary={setSummary} />

        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div className="space-y-1">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
              Results
            </p>
            <h2 className="text-lg font-semibold tracking-tight text-slate-50 md:text-xl">
              AI-curated opportunities
            </h2>
            {summary && (
              <p className="max-w-xl text-xs text-emerald-300/90 md:text-sm">
                {summary}
              </p>
            )}
          </div>

          <CategoryFilter allProducts={allProducts} onFilter={loadProducts} />
        </div>
      </section>

      {/* Products grid */}
      <section className="space-y-4">
        {loading && (
          <p className="text-sm text-slate-400">Loading ideas...</p>
        )}

        {error && (
          <p className="text-sm text-rose-400">
            {error}
          </p>
        )}

        {!loading && !error && products.length === 0 && (
          <p className="text-sm text-slate-400">
            No products found. Try adjusting your query or filters.
          </p>
        )}

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
