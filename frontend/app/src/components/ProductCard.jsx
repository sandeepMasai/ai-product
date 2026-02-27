function ProductCard({ product }) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-slate-800/80 bg-slate-900/70 p-4 text-left shadow-[0_0_40px_-24px_rgba(15,118,110,0.9)] transition hover:-translate-y-1 hover:border-emerald-400/70 hover:shadow-[0_0_60px_-30px_rgba(16,185,129,1)]">
      <div className="mb-2 flex items-start justify-between gap-2">
        <h3 className="text-sm font-semibold tracking-tight text-slate-50">
          {product.name}
        </h3>
        <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-medium text-emerald-300 ring-1 ring-emerald-500/40">
          {product.category}
        </span>
      </div>

      <p className="mb-3 line-clamp-3 text-xs leading-relaxed text-slate-400">
        {product.description}
      </p>

      {product.tags && product.tags.length > 0 && (
        <div className="mb-3 flex flex-wrap gap-1.5">
          {product.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-slate-800/80 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-slate-400"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <div className="mt-auto flex items-center justify-between pt-2">
        <p className="text-sm font-semibold text-emerald-400">
          ₹ {product.price}
        </p>
        <span className="text-[11px] text-slate-500">From the demo catalog</span>
      </div>
    </div>
  );
}

export default ProductCard;
