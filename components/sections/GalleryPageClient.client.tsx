"use client";

import { useMemo, useState } from "react";
import { SearchBar } from "@/components/widgets/SearchBar.client";
import { FilterBar } from "@/components/widgets/FilterBar.client";
import { SortBar } from "@/components/widgets/SortBar.client";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { formatPriceZAR } from "@/lib/utils";
import Modal from "@/components/widgets/Modal.client";

type GalleryItem = {
  id: string;
  title: string;
  category: string;
  size: string;
  dimensions?: string;
  material: string;
  origin?: string;
  colors?: string[];
  priceZAR: number;
  badges?: string[];
  description: string;
  image: string;
  gallery?: string[];
};

type Props = {
  items: GalleryItem[];
};

type SortOption = "price-asc" | "price-desc" | "newest" | "bestselling";

export default function GalleryPageClient({ items }: Props) {
  const [search, setSearch] = useState("");
  const [categories, setCategories] = useState<string[]>([]);
  const [sizes, setSizes] = useState<string[]>([]);
  const [materials, setMaterials] = useState<string[]>([]);
  const [colors, setColors] = useState<string[]>([]);
  const [sort, setSort] = useState<SortOption>("price-asc");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filteredItems = useMemo(() => {
    const q = search.trim().toLowerCase();

    let result = items.slice();

    if (q) {
      result = result.filter((item) => {
        const haystack = [
          item.title,
          item.category,
          item.size,
          item.dimensions,
          item.material,
          item.origin,
          ...(item.colors ?? []),
          item.description,
        ]
          .filter(Boolean)
          .join(" ")
          .toLowerCase();
        return haystack.includes(q);
      });
    }

    if (categories.length) {
      result = result.filter((item) => categories.includes(item.category));
    }

    if (sizes.length) {
      result = result.filter((item) => sizes.includes(item.size));
    }

    if (materials.length) {
      result = result.filter((item) => materials.includes(item.material));
    }

    if (colors.length) {
      result = result.filter((item) =>
        (item.colors ?? []).some((c) => colors.includes(c))
      );
    }

    switch (sort) {
      case "price-asc":
        result.sort((a, b) => a.priceZAR - b.priceZAR);
        break;
      case "price-desc":
        result.sort((a, b) => b.priceZAR - a.priceZAR);
        break;
      case "newest":
        // For now, approximate "newest" by highest price (often new arrivals in curated stores)
        result.sort((a, b) => b.priceZAR - a.priceZAR);
        break;
      case "bestselling":
        // Move items with "Best-seller" badge to the top
        result.sort((a, b) => {
          const aBest = (a.badges ?? []).some((b) =>
            b.toLowerCase().includes("best")
          );
          const bBest = (b.badges ?? []).some((b) =>
            b.toLowerCase().includes("best")
          );
          if (aBest === bBest) return 0;
          return aBest ? -1 : 1;
        });
        break;
      default:
        break;
    }

    return result;
  }, [items, search, categories, sizes, materials, colors, sort]);

  return (
    <>
      <div className="space-y-4 mb-6">
        <SearchBar
          placeholder="Search by style, size, colour or origin..."
          onSearch={setSearch}
        />
        <div className="flex flex-col gap-4 md:flex-row md:items-start">
          <FilterBar
            categories={categories}
            sizes={sizes}
            materials={materials}
            colors={colors}
            onChange={({ categories, sizes, materials, colors }) => {
              setCategories(categories);
              setSizes(sizes);
              setMaterials(materials);
              setColors(colors);
            }}
          />
          <SortBar sort={sort} onChange={setSort} />
        </div>
      </div>

      {filteredItems.length === 0 ? (
        <p className="text-sm text-slate-700">
          No rugs match your current filters. Try clearing some filters or using
          a broader search term.
        </p>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setSelectedItem(item)}
              className="text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)] rounded-2xl"
            >
              <Card className="h-full flex flex-col overflow-hidden transition-transform duration-200 group-hover:-translate-y-1">
                <div className="aspect-[4/3] w-full bg-slate-100 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex-1 p-4 flex flex-col gap-2">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-base font-semibold text-slate-900">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-600 mt-0.5">
                        {item.category} • {item.size}
                        {item.dimensions ? ` • ${item.dimensions}` : ""}
                      </p>
                    </div>
                    {item.badges && item.badges.length > 0 && (
                      <div className="flex flex-wrap gap-1 justify-end">
                        {item.badges.slice(0, 2).map((badge) => (
                          <Badge key={badge} className="text-[10px] px-2 py-0.5">
                            {badge}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                  <p className="text-xs text-slate-600 line-clamp-2">
                    {item.description}
                  </p>
                  <div className="mt-2 flex items-center justify-between">
                    <p className="text-sm font-semibold text-[var(--brand)]">
                      {formatPriceZAR(item.priceZAR)}
                    </p>
                    <p className="text-[11px] text-slate-600">
                      {item.material}
                      {item.origin ? ` • ${item.origin}` : ""}
                    </p>
                  </div>
                </div>
              </Card>
            </button>
          ))}
        </div>
      )}

      <Modal
        title={selectedItem?.title ?? ""}
        isOpen={!!selectedItem}
        onClose={() => setSelectedItem(null)}
      >
        {selectedItem && (
          <div className="space-y-4">
            <div className="aspect-[4/3] w-full rounded-xl overflow-hidden bg-slate-100">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="h-full w-full object-cover"
              />
            </div>
            <p className="text-sm text-slate-700">{selectedItem.description}</p>
            <dl className="grid grid-cols-2 gap-3 text-sm text-slate-700">
              <div>
                <dt className="font-medium">Category</dt>
                <dd>{selectedItem.category}</dd>
              </div>
              <div>
                <dt className="font-medium">Size</dt>
                <dd>
                  {selectedItem.size}
                  {selectedItem.dimensions ? ` (${selectedItem.dimensions})` : ""}
                </dd>
              </div>
              <div>
                <dt className="font-medium">Material</dt>
                <dd>{selectedItem.material}</dd>
              </div>
              {selectedItem.origin && (
                <div>
                  <dt className="font-medium">Origin</dt>
                  <dd>{selectedItem.origin}</dd>
                </div>
              )}
              {selectedItem.colors && selectedItem.colors.length > 0 && (
                <div>
                  <dt className="font-medium">Colours</dt>
                  <dd>{selectedItem.colors.join(", ")}</dd>
                </div>
              )}
              <div>
                <dt className="font-medium">Price</dt>
                <dd className="text-[var(--brand)] font-semibold">
                  {formatPriceZAR(selectedItem.priceZAR)}
                </dd>
              </div>
            </dl>
            {selectedItem.badges && selectedItem.badges.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-2">
                {selectedItem.badges.map((badge) => (
                  <Badge key={badge}>{badge}</Badge>
                ))}
              </div>
            )}
            <p className="text-xs text-slate-600 pt-2">
              To view or reserve this rug, contact us with the rug name and we
              will confirm availability from our Gqeberha showroom.
            </p>
          </div>
        )}
      </Modal>
    </>
  );
}
