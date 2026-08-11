import { useMemo, useState } from "react";
import { cn } from "@/utils/cn";
import { navigate, useRoute } from "@/lib/router";
import { Button, Container, Icon, Section } from "@/components/ui";
import { CTASection, PageHero } from "@/components/sections";
import { ProductGrid } from "@/components/ProductCard";
import {
  allApplications,
  allForms,
  categories,
  products,
  type CategoryId,
} from "@/data/products";

type Filters = {
  q: string;
  category: CategoryId | "all";
  form: string;
  application: string;
};

const emptyFilters: Filters = { q: "", category: "all", form: "all", application: "all" };

function FilterPanel({
  filters,
  setFilters,
  resultCount,
  onClose,
}: {
  filters: Filters;
  setFilters: (f: Filters) => void;
  resultCount: number;
  onClose?: () => void;
}) {
  const group = (
    label: string,
    key: keyof Filters,
    options: { value: string; label: string; count?: number }[],
  ) => (
    <fieldset className="border-t border-ink-900/[0.09] pt-5">
      <legend className="eyebrow mb-3 text-ink-400">{label}</legend>
      <div className="flex flex-wrap gap-2">
        {options.map((o) => {
          const active = filters[key] === o.value;
          return (
            <button
              key={o.value}
              type="button"
              aria-pressed={active}
              onClick={() => setFilters({ ...filters, [key]: o.value })}
              className={cn(
                "rounded-full border px-3.5 py-1.5 text-[0.8125rem] transition-all duration-200",
                active
                  ? "border-forest-800 bg-forest-800 text-ivory-100"
                  : "border-ink-900/12 bg-transparent text-ink-600 hover:border-ink-900/30 hover:text-ink-900",
              )}
            >
              {o.label}
              {typeof o.count === "number" && (
                <span className={cn("ml-1.5 tabular-nums", active ? "text-ivory-200/70" : "text-ink-400")}>
                  {o.count}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </fieldset>
  );

  return (
    <div className="flex flex-col gap-6">
      <div>
        <label htmlFor="product-search" className="eyebrow mb-3 block text-ink-400">
          Search products
        </label>
        <div className="relative">
          <Icon name="search" className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400" />
          <input
            id="product-search"
            type="search"
            value={filters.q}
            onChange={(e) => setFilters({ ...filters, q: e.target.value })}
            placeholder="Cumin, garlic flakes, granules…"
            className="w-full rounded-sm border border-ink-900/15 bg-ivory-50 py-2.5 pl-10 pr-3.5 text-[0.9375rem] text-ink-800 placeholder:text-ink-400 focus:border-forest-600 focus:outline-none focus:ring-2 focus:ring-forest-600/15"
          />
        </div>
      </div>

      {group("Category", "category", [
        { value: "all", label: "All", count: products.length },
        ...categories.map((c) => ({
          value: c.id,
          label: c.name,
          count: products.filter((p) => p.category === c.id).length,
        })),
      ])}

      {group("Product form", "form", [
        { value: "all", label: "Any form" },
        ...allForms.map((f) => ({ value: f, label: f })),
      ])}

      {group("Application", "application", [
        { value: "all", label: "Any application" },
        ...allApplications.map((a) => ({ value: a, label: a })),
      ])}

      <div className="flex items-center justify-between gap-3 border-t border-ink-900/[0.09] pt-5">
        <p className="text-[0.8125rem] text-ink-500">
          <span className="font-medium text-ink-900 tabular-nums">{resultCount}</span> product
          {resultCount === 1 ? "" : "s"}
        </p>
        <div className="flex gap-2">
          <Button variant="ghost" size="sm" onClick={() => setFilters(emptyFilters)}>
            Clear all
          </Button>
          {onClose && (
            <Button size="sm" onClick={onClose}>
              Show results
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Products() {
  const { segments } = useRoute();
  const slug = segments[1];
  const initialCategory: CategoryId | "all" =
    slug === "whole-spices" || slug === "dehydrated" ? (slug as CategoryId) : "all";

  const [filters, setFilters] = useState<Filters>({ ...emptyFilters, category: initialCategory });
  const [sheetOpen, setSheetOpen] = useState(false);

  // keep filter in sync when route category changes
  const routeKey = slug ?? "all";
  const [lastRoute, setLastRoute] = useState(routeKey);
  if (lastRoute !== routeKey) {
    setLastRoute(routeKey);
    setFilters({ ...emptyFilters, category: initialCategory });
  }

  const activeCategory = initialCategory === "all" ? null : categories.find((c) => c.id === initialCategory)!;

  const results = useMemo(() => {
    const q = filters.q.trim().toLowerCase();
    return products.filter((p) => {
      if (filters.category !== "all" && p.category !== filters.category) return false;
      if (filters.form !== "all" && !p.forms.includes(filters.form)) return false;
      if (filters.application !== "all" && !p.applications.includes(filters.application)) return false;
      if (!q) return true;
      const haystack = [p.name, p.shortDescription, p.description, ...p.tags, ...p.forms, ...p.applications]
        .join(" ")
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [filters]);

  const activeFilterCount =
    (filters.category !== "all" ? 1 : 0) +
    (filters.form !== "all" ? 1 : 0) +
    (filters.application !== "all" ? 1 : 0) +
    (filters.q ? 1 : 0);

  return (
    <>
      <PageHero
        eyebrow={activeCategory ? activeCategory.name : "Product Catalogue"}
        title={
          activeCategory ? (
            activeCategory.name
          ) : (
            <>
              Whole spices and dehydrated ingredients, catalogued for B2B buyers
            </>
          )
        }
        lead={activeCategory ? activeCategory.description : "Browse the full range, filter by form or application, and request a quotation against your own specification."}
        breadcrumb={[
          { label: "Home", href: "#/" },
          ...(activeCategory
            ? [{ label: "Products", href: "#/products" }, { label: activeCategory.name }]
            : [{ label: "Products" }]),
        ]}
        image={activeCategory?.image}
        fallback={activeCategory?.fallbackImage}
        alt={activeCategory ? `${activeCategory.name} range` : undefined}
      />

      {/* Category quick switch */}
      <div className="border-b border-ink-900/[0.08] bg-ivory-50">
        <Container width="wide">
          <div className="flex gap-1 overflow-x-auto py-3">
            {[{ id: "all", name: "All Products", slug: "" }, ...categories].map((c) => {
              const href = c.slug ? `#/products/${c.slug}` : "#/products";
              const active = (c.id === "all" && !slug) || c.slug === slug;
              return (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => navigate(href)}
                  className={cn(
                    "shrink-0 rounded-sm px-4 py-2 text-[0.8125rem] font-medium transition-colors",
                    active ? "bg-forest-800 text-ivory-100" : "text-ink-600 hover:bg-ink-900/[0.04]",
                  )}
                >
                  {c.name}
                </button>
              );
            })}
          </div>
        </Container>
      </div>

      <Section tone="ivory" size="sm">
        <Container width="wide">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Desktop filters */}
            <aside className="hidden lg:col-span-3 lg:block">
              <div className="sticky top-24 rounded-md border border-ink-900/[0.08] bg-ivory-50 p-6">
                <h2 className="mb-5 text-[1.25rem]">Refine</h2>
                <FilterPanel filters={filters} setFilters={setFilters} resultCount={results.length} />
              </div>
            </aside>

            <div className="lg:col-span-9">
              <div className="mb-7 flex flex-wrap items-center justify-between gap-4">
                <p className="text-[0.875rem] text-ink-500">
                  Showing <span className="font-medium text-ink-900 tabular-nums">{results.length}</span> of{" "}
                  {products.length} catalogue items
                </p>
                <button
                  type="button"
                  onClick={() => setSheetOpen(true)}
                  className="inline-flex items-center gap-2 rounded-sm border border-ink-900/15 px-4 py-2.5 text-[0.8125rem] font-medium text-ink-800 lg:hidden"
                >
                  <Icon name="sliders" className="h-4 w-4" />
                  Filters
                  {activeFilterCount > 0 && (
                    <span className="grid h-5 min-w-5 place-items-center rounded-full bg-forest-800 px-1.5 text-[0.6875rem] text-ivory-100">
                      {activeFilterCount}
                    </span>
                  )}
                </button>
              </div>

              <ProductGrid items={results} columns={3} />

              <div className="mt-12 rounded-md border border-dashed border-ink-900/15 bg-ivory-50 p-7">
                {/* <h2 className="text-[1.25rem]">Not seeing what you need?</h2>
                <p className="mt-2 max-w-2xl text-[0.9375rem] leading-relaxed text-ink-500">
                  This catalogue is a data-driven starting point. Products, grades, forms and
                  specifications can be added or edited in{" "}
                  <code className="rounded-xs bg-ivory-300/50 px-1.5 py-0.5 text-[0.8125rem] text-ink-700">
                    src/data/products.ts
                  </code>
                  . If you need an item that is not listed, send us the specification and we will
                  confirm availability.
                </p> */}
                <div className="mt-5 flex flex-wrap gap-3">
                  <Button to="#/contact" size="sm" arrow>
                    Discuss Bulk Requirements
                  </Button>
                  <Button to="#/contact" variant="secondary" size="sm">
                    Request Sample
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Mobile bottom sheet */}
      <div
        className={cn("fixed inset-0 z-50 lg:hidden", sheetOpen ? "pointer-events-auto" : "pointer-events-none")}
        aria-hidden={!sheetOpen}
      >
        <div
          className={cn(
            "absolute inset-0 bg-ink-900/45 backdrop-blur-sm transition-opacity duration-300",
            sheetOpen ? "opacity-100" : "opacity-0",
          )}
          onClick={() => setSheetOpen(false)}
        />
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Product filters"
          className={cn(
            "absolute inset-x-0 bottom-0 max-h-[85dvh] overflow-y-auto rounded-t-xl bg-ivory-100 p-6 pb-10 transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]",
            sheetOpen ? "translate-y-0" : "translate-y-full",
          )}
        >
          <div className="mx-auto mb-5 h-1 w-10 rounded-full bg-ink-900/15" />
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-[1.375rem]">Filter products</h2>
            <button
              type="button"
              onClick={() => setSheetOpen(false)}
              aria-label="Close filters"
              className="grid h-9 w-9 place-items-center rounded-sm border border-ink-900/12 text-ink-600"
            >
              <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <path d="m4 4 8 8M12 4l-8 8" />
              </svg>
            </button>
          </div>
          <FilterPanel
            filters={filters}
            setFilters={setFilters}
            resultCount={results.length}
            onClose={() => setSheetOpen(false)}
          />
        </div>
      </div>

      <CTASection
        eyebrow="Sales Desk"
        title="Get a quotation against your specification"
        primary={{ label: "Request a Quote", to: "#/contact" }}
        secondary={{ label: "Quality & Processing", to: "#/quality" }}
      />
    </>
  );
}
