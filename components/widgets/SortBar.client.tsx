"use client";

type Props = {
  sort: "price-asc" | "price-desc" | "newest" | "bestselling";
  onChange: (value: Props["sort"]) => void;
};

export function SortBar({ sort, onChange }: Props) {
  return (
    <div className="flex items-center gap-2 text-xs text-slate-700">
      <span className="font-medium">Sort by:</span>
      <select
        value={sort}
        onChange={(e) => onChange(e.target.value as Props["sort"])}
        className="rounded-full border border-slate-300 bg-white px-3 py-1.5 text-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
      >
        <option value="price-asc">Price · Low to high</option>
        <option value="price-desc">Price · High to low</option>
        <option value="newest">Newest arrivals</option>
        <option value="bestselling">Best-selling</option>
      </select>
    </div>
  );
}
