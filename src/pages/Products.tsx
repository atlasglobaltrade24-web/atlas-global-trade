import { useMemo, useState } from "react";
import { cn } from "@/utils/cn";
import { navigate, useRoute } from "@/lib/router";
import { Button, Container, Icon, Section } from "@/components/ui";
import { CTASection, PageHero } from "@/components/sections";
import { ProductGrid } from "@/components/ProductCard";
import { categories, products, type CategoryId } from "@/data/products";

type CategoryIdOrAll = CategoryId | "all";


export default function Products() {
  const { segments } = useRoute();
  const slug = segments[1];
  const initialCategory: CategoryIdOrAll =
    slug === "whole-spices" || slug === "dehydrated" ? (slug as CategoryId) : "all";

  const activeCategory = initialCategory === "all" ? null : categories.find((c) => c.id === initialCategory)!;

  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const inCategory =
      initialCategory === "all" ? products : products.filter((p) => p.category === initialCategory);
    const q = query.trim().toLowerCase();
    if (!q) return inCategory;
    return inCategory.filter((p) =>
      [p.name, p.badgeLabel, p.shortDescription, ...p.tags, ...p.forms]
        .filter((v): v is string => Boolean(v))
        .some((v) => v.toLowerCase().includes(q)),
    );
  }, [initialCategory, query]);

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
          <div className="grid gap-10 lg:grid-cols-1 lg:gap-12">
            <div>
              <div className="mb-7 flex flex-wrap items-center justify-between gap-4">
                <p className="text-[0.875rem] text-ink-500">
                  Showing <span className="font-medium text-ink-900 tabular-nums">{results.length}</span> of{" "}
                  {products.length} catalogue items
                </p>
                <div className="relative w-full sm:w-72">
                  <Icon
                    name="search"
                    className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400"
                  />
                  <input
                    type="search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search products…"
                    aria-label="Search products"
                    className="w-full rounded-sm border border-ink-900/15 bg-ivory-50 py-2.5 pl-9 pr-3.5 text-[0.875rem] text-ink-800 placeholder:text-ink-400 transition-colors focus:border-forest-600 focus:outline-none focus:ring-2 focus:ring-forest-600/15"
                  />
                </div>
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


      <CTASection
        eyebrow="Sales Desk"
        title="Get a quotation against your specification"
        primary={{ label: "Request a Quote", to: "#/contact" }}
        secondary={{ label: "Quality & Processing", to: "#/quality" }}
      />
    </>
  );
}
