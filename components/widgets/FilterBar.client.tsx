"use client";

type Props = {
  categories: string[];
  sizes: string[];
  materials: string[];
  colors: string[];
  onChange: (state: {
    categories: string[];
    sizes: string[];
    materials: string[];
    colors: string[];
  }) => void;
};

const CATEGORY_OPTIONS = [
  "Persian",
  "Oriental",
  "Kilim",
  "Modern",
  "Traditional",
  "Shag",
];

const SIZE_OPTIONS = ["Small", "Medium", "Large", "Runner"];

const MATERIAL_OPTIONS = ["Wool", "Silk", "Cotton", "Synthetic"];

const COLOR_OPTIONS = ["Red", "Blue", "Ivory", "Grey", "Beige", "Rust", "Navy"];

export function FilterBar({
  categories,
  sizes,
  materials,
  colors,
  onChange,
}: Props) {
  const toggle = (list: string[], value: string) =>
    list.includes(value) ? list.filter((v) => v !== value) : [...list, value];

  const update = (next: Partial<Props>) => {
    onChange({
      categories,
      sizes,
      materials,
      colors,
      ...(next as any),
    });
  };

  const pillBase =
    "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium transition cursor-pointer select-none";
  const activeClasses =
    "border-[var(--brand)] bg-[var(--brand)]/10 text-[var(--brand)]";
  const inactiveClasses = "border-slate-300 bg-white text-slate-700";

  return (
    <div className="flex-1 flex flex-wrap gap-2">
      <div className="flex flex-wrap gap-2">
        {CATEGORY_OPTIONS.map((cat) => {
          const active = categories.includes(cat);
          return (
            <button
              key={cat}
              type="button"
              onClick={() =>
                update({ categories: toggle(categories, cat) } as any)
              }
              className={
                pillBase + " " + (active ? activeClasses : inactiveClasses)
              }
            >
              {cat}
            </button>
          );
        })}
      </div>
      <div className="flex flex-wrap gap-2">
        {SIZE_OPTIONS.map((size) => {
          const active = sizes.includes(size);
          return (
            <button
              key={size}
              type="button"
              onClick={() => update({ sizes: toggle(sizes, size) } as any)}
              className={
                pillBase + " " + (active ? activeClasses : inactiveClasses)
              }
            >
              {size}
            </button>
          );
        })}
      </div>
      <div className="flex flex-wrap gap-2">
        {MATERIAL_OPTIONS.map((mat) => {
          const active = materials.includes(mat);
          return (
            <button
              key={mat}
              type="button"
              onClick={() =>
                update({ materials: toggle(materials, mat) } as any)
              }
              className={
                pillBase + " " + (active ? activeClasses : inactiveClasses)
              }
            >
              {mat}
            </button>
          );
        })}
      </div>
      <div className="flex flex-wrap gap-2">
        {COLOR_OPTIONS.map((col) => {
          const active = colors.includes(col);
          return (
            <button
              key={col}
              type="button"
              onClick={() => update({ colors: toggle(colors, col) } as any)}
              className={
                pillBase + " " + (active ? activeClasses : inactiveClasses)
              }
            >
              {col}
            </button>
          );
        })}
      </div>
    </div>
  );
}
