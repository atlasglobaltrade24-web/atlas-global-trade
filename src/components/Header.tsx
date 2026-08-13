import { useEffect, useState } from "react";
import { cn } from "@/utils/cn";
import { Link, useRoute } from "@/lib/router";
import { Button, Container, Icon } from "@/components/ui";
import { company, navigation } from "@/data/site";
import { categories, highlightedProducts, productsByCategory, products } from "@/data/products";

/* ---------------- Logo ---------------- */
export function Logo({ tone = "dark", compact = false }: { tone?: "dark" | "light"; compact?: boolean }) {
  const [imgError, setImgError] = useState(false);
  const imgSrc = "images/atlas_logo.PNG";
  const brochureHref = "/images/brochure_image_1.jpeg";
  return (
    <a
      href={brochureHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Open brochure"
      className="group flex items-center"
    >
      {!imgError ? (
        <img
          src={imgSrc}
          alt="Atlas logo"
          onError={() => setImgError(true)}
          className={cn(
            "object-contain",
            compact ? "h-16 w-auto" : "h-20 w-auto",
          )}
          style={{ maxHeight: compact ? 64 : 88, maxWidth: compact ? 260 : 340 }}
        />
      ) : (
        <span
          className={cn(
            "grid place-items-center rounded-md bg-[#FAF8F5] text-[#1D242B] transition-all duration-300",
            compact ? "h-14 w-14" : "h-16 w-16",
          )}
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3c4.5 1.5 7 5 7 9a7 7 0 0 1-14 0c0-4 2.5-7.5 7-9Z" />
            <path d="M12 7v10M9 10.5c2 .8 4 .8 6 0M9 14c2 .8 4 .8 6 0" />
          </svg>
        </span>
      )}
    </a>
  );
}

/* ---------------- Products mega menu ---------------- */
const categoryMenuTone: Record<
  "forest" | "clay",
  { panel: string; eyebrow: string; count: string; link: string; itemHover: string }
> = {
  forest: {
    panel: "border-forest-600/15 bg-forest-100/40",
    eyebrow: "text-forest-800",
    count: "bg-forest-800 text-ivory-100",
    link: "text-forest-800 hover:text-forest-700",
    itemHover: "group-hover:text-forest-800",
  },
  clay: {
    panel: "border-clay-500/20 bg-clay-100/40",
    eyebrow: "text-clay-700",
    count: "bg-clay-700 text-ivory-100",
    link: "text-clay-700 hover:text-clay-600",
    itemHover: "group-hover:text-clay-700",
  },
};

function ProductsMegaMenu({ open }: { open: boolean }) {
  return (
    <div
      className={cn(
        "absolute left-1/2 top-full z-50 w-[min(840px,calc(100vw_-_3rem))] -translate-x-1/2 overflow-hidden rounded-[2rem] border border-[#E5E0D8] bg-white/95 p-6 shadow-[0_30px_60px_-30px_rgba(29,36,43,0.25)] transition-all duration-200",
        open ? "pointer-events-auto opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-2",
      )}
    >
      <div className="grid gap-5 lg:grid-cols-2">
        {categories.map((cat) => {
          const tone = categoryMenuTone[cat.accent];
          const highlights = highlightedProducts(cat.id, 4);
          const total = productsByCategory(cat.id).length;
          return (
            <div key={cat.id} className={cn("rounded-[1.5rem] border p-5", tone.panel)}>
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className={cn("text-xs font-semibold uppercase tracking-[0.24em]", tone.eyebrow)}>
                    {cat.name}
                  </p>
                  <p className="mt-1.5 text-[0.8125rem] leading-relaxed text-slate-500">
                    {cat.shortDescription}
                  </p>
                </div>
                <span
                  className={cn(
                    "shrink-0 whitespace-nowrap rounded-full px-2.5 py-1 text-[0.6875rem] font-semibold",
                    tone.count,
                  )}
                >
                  {total} {total === 1 ? "item" : "items"}
                </span>
              </div>

              {highlights.length > 0 ? (
                <div className="mt-4 space-y-1">
                  {highlights.map((p) => (
                    <Link
                      key={p.id}
                      to={`#/product/${p.slug}`}
                      className="group -mx-2 flex items-center gap-3 rounded-xl px-2 py-1.5 transition-colors hover:bg-white/80"
                    >
                      <span className="h-9 w-9 shrink-0 overflow-hidden rounded-lg bg-[#F2EEE7]">
                        <img
                          src={p.image}
                          alt=""
                          loading="lazy"
                          className="h-full w-full object-cover"
                          onError={(e) => {
                            e.currentTarget.style.visibility = "hidden";
                          }}
                        />
                      </span>
                      <span
                        className={cn(
                          "truncate text-[0.9375rem] font-semibold text-[#1D242B] transition-colors",
                          tone.itemHover,
                        )}
                      >
                        {p.badgeLabel ?? p.name}
                      </span>
                    </Link>
                  ))}
                </div>
              ) : (
                <p className="mt-4 text-[0.8125rem] text-slate-400">Catalogue for this line is being finalised.</p>
              )}

              <Link
                to={`#/products/${cat.slug}`}
                className={cn("mt-4 inline-flex items-center gap-1.5 text-[0.8125rem] font-semibold", tone.link)}
              >
                View all {total} {cat.name}
                <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 8h11M9 4l4 4-4 4" />
                </svg>
              </Link>
            </div>
          );
        })}
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-4 border-t border-[#E5E0D8] pt-5">
        <p className="text-[0.8125rem] text-slate-500">
          {products.length} products across {categories.length} categories.
        </p>
        <Button to="#/products" size="sm" arrow>
          Browse Full Catalogue
        </Button>
      </div>
    </div>
  );
}

/* ---------------- Header ---------------- */
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuSection, setMobileMenuSection] = useState<string | null>(null);
  const { path } = useRoute();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setOpenDropdown(null);
  }, [path]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        setOpenDropdown(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const isActive = (href: string) => {
    const target = href.replace("#", "");
    if (target === "/") return path === "/";
    return path.startsWith(target);
  };

  const isExternalHref = (href: string) => href.startsWith("/") || href.startsWith("http");

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-sm focus:bg-forest-800 focus:px-4 focus:py-2 focus:text-sm focus:text-ivory-100"
      >
        Skip to content
      </a>

      <div className="fixed inset-x-0 top-0 z-50 border-b border-forest-900 bg-forest-900 text-ivory-100">
        <Container width="wide">
          <div className="flex flex-col gap-2 px-4 py-2 text-[0.8125rem] sm:flex-row sm:items-center sm:justify-between">
            <p className="flex items-center gap-2 text-ivory-100">
              <Icon name="shield" className="h-4 w-4 text-turmeric-300" />
              Export-ready B2B sourcing with specification-led supply and export documentation support.
            </p>
            <div className="flex items-center gap-3 text-ivory-200">
              <a
                href={`https://wa.me/${company.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-ivory-200/50 bg-ivory-100/10 px-3 py-2 text-sm font-semibold text-ivory-100 transition hover:bg-ivory-100/20 hover:text-white"
              >
                <Icon name="whatsapp" className="h-4 w-4 text-ivory-100" />
                WhatsApp
              </a>
            </div>
          </div>
        </Container>
      </div>
      <header
        style={{ backdropFilter: "blur(12px)" }}
        className={cn(
          "fixed inset-x-0 z-50 border-b transition-all duration-300",
          scrolled
            ? "mt-12 bg-[#FAF8F5]/95 border-[#E5E0D8] shadow-lg shadow-slate-900/10"
            : "mt-12 bg-[#FAF8F5]/95 border-[#E5E0D8]",
        )}
      >
        <Container width="wide">
          <div
            className={cn(
              "grid items-center gap-4 transition-all duration-500 lg:grid-cols-[auto_1fr_auto]",
              scrolled ? "h-[64px]" : "h-[84px]",
            )}
          >
            <div className="flex items-center gap-3">
              <Logo tone="light" compact={scrolled} />
            </div>

            <nav aria-label="Primary" className="hidden lg:flex justify-center">
              <ul className="flex items-center gap-4 flex-nowrap whitespace-nowrap">
                {navigation.map((item) => {
                  const isProduct = item.label === "Products";
                  const external = isExternalHref(item.href);
                  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
                    if (item.children) {
                      e.preventDefault();
                      setOpenDropdown(openDropdown === item.label ? null : item.label);
                    }
                  };
                  return (
                    <li
                      key={item.label}
                      className="relative flex-shrink-0"
                      onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                      onMouseLeave={() => item.children && setOpenDropdown(null)}
                    >
                      {external && !item.children ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={cn(
                            "relative inline-flex items-center gap-1 rounded-md border-b-2 border-transparent px-4 py-2 text-sm font-semibold transition-all duration-200 whitespace-nowrap",
                            "text-[#1D242B] hover:text-[#0F382C] hover:border-[#0F382C]",
                          )}
                        >
                          {item.label}
                        </a>
                      ) : (
                        <Link
                          to={item.href}
                          onClick={handleClick}
                          aria-current={isActive(item.href) ? "page" : undefined}
                          aria-haspopup={item.children ? "true" : undefined}
                          aria-expanded={item.children ? openDropdown === item.label : undefined}
                          className={cn(
                            "relative inline-flex items-center gap-1 rounded-md border-b-2 border-transparent px-4 py-2 text-sm font-semibold transition-all duration-200 whitespace-nowrap",
                            isActive(item.href)
                              ? "text-[#0F382C] border-[#0F382C]"
                              : "text-[#1D242B] hover:text-[#0F382C] hover:border-[#0F382C]",
                          )}
                        >
                          {item.label}
                          {item.children && (
                            <svg viewBox="0 0 12 12" className="h-2.5 w-2.5 opacity-70" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                              <path d="m3 4.5 3 3 3-3" />
                            </svg>
                          )}
                        </Link>
                      )}

                      {isProduct && <ProductsMegaMenu open={openDropdown === item.label} />}
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="hidden items-center justify-end lg:flex">
              <Button
                to="#/contact"
                className="rounded-[8px] bg-[#D97706] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-amber-900/20 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                arrow
              >
                Request a Quote
              </Button>
            </div>

            <div className="flex items-center justify-end lg:hidden">
              <button
                type="button"
                onClick={() => setMenuOpen((v) => !v)}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                className="grid h-11 w-11 place-items-center rounded-full border border-[#1D242B] bg-transparent text-[#1D242B] transition-colors hover:bg-slate-100"
              >
                <span className="relative block h-3.5 w-5">
                  <span
                    className={cn(
                      "absolute left-0 block h-px w-5 bg-current transition-all duration-300",
                      menuOpen ? "top-1.5 rotate-45" : "top-0",
                    )}
                  />
                  <span
                    className={cn(
                      "absolute left-0 top-1.5 block h-px w-5 bg-current transition-all duration-200",
                      menuOpen ? "opacity-0" : "opacity-100",
                    )}
                  />
                  <span
                    className={cn(
                      "absolute left-0 block h-px w-5 bg-current transition-all duration-300",
                      menuOpen ? "top-1.5 -rotate-45" : "top-3",
                    )}
                  />
                </span>
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-0 z-40 lg:hidden",
          menuOpen ? "pointer-events-auto" : "pointer-events-none",
        )}
        aria-hidden={!menuOpen}
      >
        <div
          className={cn(
            "absolute inset-0 bg-slate-950/30 backdrop-blur-sm transition-opacity duration-300",
            menuOpen ? "opacity-100" : "opacity-0",
          )}
          onClick={() => setMenuOpen(false)}
        />
        <nav
          aria-label="Mobile"
          className={cn(
            "absolute left-0 top-0 h-full w-full max-w-md overflow-y-auto bg-[#FAF8F5] shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
            menuOpen ? "translate-x-0" : "-translate-x-full",
          )}
        >
          <Container>
            <div className="flex items-center justify-between border-b border-slate-200 py-5">
              <Logo tone="light" compact={false} />
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 text-slate-700 transition hover:bg-slate-100"
              >
                <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4l8 8M12 4 4 12" />
                </svg>
              </button>
            </div>

            <div className="mt-6 space-y-4">
              {navigation.map((item) => {
                const external = isExternalHref(item.href);
                return (
                  <div key={item.label}>
                    {item.children ? (
                      <>
                        <button
                          type="button"
                          onClick={() => setMobileMenuSection((current) => (current === item.label ? null : item.label))}
                          className="flex w-full items-center justify-between rounded-2xl border border-slate-200 bg-[#F8F5F0] px-4 py-4 text-left font-semibold text-[#1D242B] transition hover:border-[#E5E0D8] hover:bg-[#F2EEE7]"
                        >
                          <span>{item.label}</span>
                          <svg viewBox="0 0 16 16" className={cn("h-4 w-4 transition-transform duration-300", mobileMenuSection === item.label ? "rotate-180" : "rotate-0")} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4 6l4 4 4-4" />
                          </svg>
                        </button>
                        {mobileMenuSection === item.label && (
                          <div className="mt-2 space-y-2 px-4">
                            {item.children.map((child) => (
                              <Link
                                key={child.label}
                                to={child.href}
                                onClick={() => setMenuOpen(false)}
                                className="block rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-[#1D242B] transition hover:bg-[#F8F5F0]"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </>
                    ) : external ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block rounded-2xl border border-slate-200 bg-[#F8F5F0] px-4 py-4 text-sm font-semibold text-[#1D242B] transition hover:border-[#E5E0D8] hover:bg-[#F2EEE7]"
                        onClick={() => setMenuOpen(false)}
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        to={item.href}
                        onClick={() => setMenuOpen(false)}
                        className="block rounded-2xl border border-slate-200 bg-[#F8F5F0] px-4 py-4 text-sm font-semibold text-[#1D242B] transition hover:border-[#E5E0D8] hover:bg-[#F2EEE7]"
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-8 space-y-3 border-t border-slate-200 pt-6">
              <Button to="#/contact" className="w-full rounded-[8px] bg-[#D97706] text-white" size="lg" arrow onClick={() => setMenuOpen(false)}>
                Request a Quote
              </Button>
              <Button to="#/products" variant="secondary" className="w-full rounded-[8px] border border-slate-300 bg-white text-[#1D242B]" size="lg" onClick={() => setMenuOpen(false)}>
                View Products
              </Button>
            </div>

            <div className="mt-8 grid gap-3 text-sm text-[#1D242B]">
              <a
                href={`https://wa.me/${company.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 hover:bg-[#F8F5F0]"
              >
                <Icon name="whatsapp" className="h-4 w-4 text-slate-500" />
                WhatsApp
              </a>
            </div>
          </Container>
        </nav>
      </div>
    </>
  );
}

/* ---------------- Mobile sticky CTA bar ---------------- */
export function MobileStickyCTA() {
  const { path } = useRoute();
  if (path === "/contact") return null;
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-ink-900/10 bg-ivory-50/95 px-4 py-3 backdrop-blur-lg md:hidden">
      <div className="flex gap-2">
        <a
          href={`https://api.whatsapp.com/send?phone=${company.whatsapp.replace(/[^0-9]/g, "")}`}
          aria-label="Call sales"
          className="grid h-11 w-11 shrink-0 place-items-center rounded-sm border border-ink-900/15 text-ink-700"
        >
          <Icon name="phone" className="h-4.5 w-4.5" />
        </a>
        <a
          href={`https://api.whatsapp.com/send?phone=${company.whatsapp.replace(/[^0-9]/g, "")}`}
          aria-label="Chat on WhatsApp"
          className="grid h-11 w-11 shrink-0 place-items-center rounded-sm border border-ink-900/15 text-ink-700"
        >
          <Icon name="whatsapp" className="h-4.5 w-4.5" />
        </a>
        <Button to="#/contact" className="flex-1" size="md" arrow>
          Request a Quote
        </Button>
      </div>
    </div>
  );
}
