import { cn } from "@/utils/cn";
import { Link } from "@/lib/router";
import { Button, Img } from "@/components/ui";
import { getCategory, type Product } from "@/data/products";

export function ProductCard({
  product,
  className,
  compact = false,
}: {
  product: Product;
  className?: string;
  compact?: boolean;
}) {
  const category = getCategory(product.category);
  const detailHref = `#/product/${product.slug}`;
  const quoteHref = `#/contact?product=${encodeURIComponent(product.name)}&category=${product.category}`;

  return (
    <article
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-md border border-ink-900/[0.08] bg-ivory-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:border-ink-900/15 hover:shadow-[var(--shadow-lift)]",
        className,
      )}
    >
      <Link to={detailHref} className="block" tabIndex={-1} aria-hidden="true">
        <Img
          src={product.image}
          alt={product.imageAlt}
          ratio={compact ? "4/3" : "5/4"}
          className="transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
        />
      </Link>

      <span
        className={cn(
          "pointer-events-none absolute left-3 top-3 rounded-full px-2.5 py-1 text-[0.625rem] font-semibold tracking-[0.1em] uppercase backdrop-blur-md",
          category.accent === "forest"
            ? "bg-forest-900/80 text-ivory-100"
            : "bg-clay-700/80 text-ivory-100",
        )}
      >
        {product.badgeLabel ?? category.name}
      </span>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-[1.1875rem] leading-snug">
          <Link
            to={detailHref}
            className="after:absolute after:inset-0 after:content-[''] hover:text-navy-700"
          >
            {product.name}
          </Link>
        </h3>

        {product.hsCode && (
          <p className="mt-2 text-sm font-medium text-forest-800">HS Code: {product.hsCode}</p>
        )}

        <p className="mt-2.5 line-clamp-3 text-[0.875rem] leading-relaxed text-ink-500">
          {product.shortDescription}
        </p>

        <dl className="mt-4 space-y-1.5 border-t border-ink-900/[0.07] pt-4 text-[0.75rem]">
          <div className="flex gap-2">
            <dt className="w-[68px] shrink-0 text-ink-400">Form</dt>
            <dd className="truncate text-ink-700">
              {product.forms.filter((f) => !f.startsWith("[")).slice(0, 3).join(" · ") || "[ADD FORM]"}
            </dd>
          </div>
          <div className="flex gap-2">
            <dt className="w-[68px] shrink-0 text-ink-400">Spec</dt>
            <dd className="truncate text-ink-700">
              {product.highlightSpec ?? "[Add specification]"}
            </dd>
          </div>
          {!compact && (
            <div className="flex gap-2">
              <dt className="w-[68px] shrink-0 text-ink-400">Packing</dt>
              <dd className="truncate text-ink-700">
                {product.highlightPacking ?? "[Add packaging formats]"}
              </dd>
            </div>
          )}
        </dl>

        <div className="relative z-10 mt-5 flex flex-wrap gap-2 pt-1">
          <Button to={quoteHref} variant="secondary" className="rounded-sm px-3.5 py-2 text-[0.75rem] font-medium">
            Request Sample
          </Button>
          <Link
            to={quoteHref}
            className="inline-flex items-center gap-1.5 rounded-sm bg-forest-800 px-3.5 py-2 text-[0.75rem] font-medium text-ivory-100 transition-colors hover:bg-forest-700"
          >
            Request Quote
            <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 8h11M9 4l4 4-4 4" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
}

export function ProductGrid({
  items,
  columns = 4,
}: {
  items: Product[];
  columns?: 3 | 4;
}) {
  if (items.length === 0) {
    return (
      <div className="rounded-md border border-dashed border-ink-900/15 bg-ivory-50 px-6 py-20 text-center">
        <p className="font-[family-name:var(--font-display)] text-2xl text-ink-800">
          No products match those filters
        </p>
        <p className="mx-auto mt-2 max-w-md text-[0.9375rem] text-ink-500">
          Try clearing a filter or searching a different term. If you are looking for an item we
          have not listed, tell us — the range is expanded on buyer requirement.
        </p>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "grid gap-5 sm:grid-cols-2 lg:gap-6",
        columns === 4 ? "lg:grid-cols-3 xl:grid-cols-4" : "lg:grid-cols-3",
      )}
    >
      {items.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
