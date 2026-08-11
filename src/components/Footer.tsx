import { Link } from "@/lib/router";
import { Container, Icon } from "@/components/ui";
import { company } from "@/data/site";
import { categories } from "@/data/products";

const quickLinks = [
  { label: "Home", href: "#/" },
  { label: "About Us", href: "#/about" },
  { label: "Products", href: "#/products" },
  { label: "Quality & Processing", href: "#/quality" },
  { label: "Contact Us", href: "#/contact" },
];

const businessLinks = [
  { label: "Quality Assurance", href: "#/quality" },
  { label: "Global Supply", href: "#/export" },
  { label: "Request a Quote", href: "#/contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-forest-900 text-ivory-200">
      {/* subtle top accent */}
      <div
        aria-hidden
        className="h-px w-full bg-gradient-to-r from-transparent via-turmeric-500/40 to-transparent"
      />

      <Container width="wide">
        <div className="grid gap-12 py-16 sm:py-20 lg:grid-cols-12 lg:gap-10">
          {/* Column 1 — brand */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-sm border border-ivory-200/20 bg-ivory-100/[0.06] text-ivory-100">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3c4.5 1.5 7 5 7 9a7 7 0 0 1-14 0c0-4 2.5-7.5 7-9Z" />
                  <path d="M12 7v10M9 10.5c2 .8 4 .8 6 0M9 14c2 .8 4 .8 6 0" />
                </svg>
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-[family-name:var(--font-display)] text-[1.1875rem] text-ivory-100">
                  {company.name}
                </span>
                <span className="mt-1 text-[0.5625rem] font-semibold tracking-[0.22em] text-ivory-300/50 uppercase">
                  Spices &amp; Dehydrates · India
                </span>
              </span>
            </div>

            <p className="mt-6 max-w-sm text-[0.9375rem] leading-relaxed text-ivory-300/65">
              {company.description}
            </p>

            <p className="mt-6 text-[0.8125rem] text-ivory-300/45">
              Tagline: <span className="text-turmeric-400">{company.tagline}</span>
            </p>
          </div>

          {/* Column 2 — quick links */}
          <nav aria-label="Quick links" className="lg:col-span-2">
            <h2 className="eyebrow text-ivory-300/45">Quick Links</h2>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.href}
                    className="text-[0.875rem] text-ivory-300/75 transition-colors hover:text-turmeric-400"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 3 — products */}
          <nav aria-label="Products" className="lg:col-span-2">
            <h2 className="eyebrow text-ivory-300/45">Products</h2>
            <ul className="mt-5 space-y-3">
              {categories.map((c) => (
                <li key={c.id}>
                  <Link
                    to={`#/products/${c.slug}`}
                    className="text-[0.875rem] text-ivory-300/75 transition-colors hover:text-turmeric-400"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="#/products"
                  className="text-[0.875rem] text-ivory-300/75 transition-colors hover:text-turmeric-400"
                >
                  Full Product Range
                </Link>
              </li>
            </ul>
          </nav>

          {/* Column 4 — business */}
          <nav aria-label="Business" className="lg:col-span-2">
            <h2 className="eyebrow text-ivory-300/45">Business</h2>
            <ul className="mt-5 space-y-3">
              {businessLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.href}
                    className="text-[0.875rem] text-ivory-300/75 transition-colors hover:text-turmeric-400"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 5 — contact */}
          <div className="lg:col-span-2">
            <h2 className="eyebrow text-ivory-300/45">Contact</h2>
            <ul className="mt-5 space-y-4 text-[0.875rem] text-ivory-300/75">
              <li className="flex gap-2.5">
                <Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-turmeric-500/70" />
                <span>
                  {company.address}
                  <br />
                  {company.city}, {company.state}, India
                </span>
              </li>
              <li className="flex gap-2.5">
                <Icon name="mail" className="mt-0.5 h-4 w-4 shrink-0 text-turmeric-500/70" />
                <a href={`mailto:${company.email}`} className="hover:text-turmeric-400">
                  {company.email}
                </a>
              </li>
              <li className="flex gap-2.5">
                <Icon name="phone" className="mt-0.5 h-4 w-4 shrink-0 text-turmeric-500/70" />
                <a href={`tel:${company.phone}`} className="hover:text-turmeric-400">
                  {company.phone}
                </a>
              </li>
              <li className="flex gap-2.5">
                <Icon name="whatsapp" className="mt-0.5 h-4 w-4 shrink-0 text-turmeric-500/70" />
                <span>{company.whatsapp}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-ivory-200/10 py-7 text-[0.8125rem] text-ivory-300/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {company.name}. All Rights Reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link to="#/privacy" className="transition-colors hover:text-ivory-100">
              Privacy Policy
            </Link>
            <Link to="#/terms" className="transition-colors hover:text-ivory-100">
              Terms &amp; Conditions
            </Link>
            <span className="hidden sm:inline"> {company.gst}</span>
          </div>
        </div>
      </Container>

      {/* Oversized wordmark */}
      <div aria-hidden className="pointer-events-none select-none overflow-hidden">
        <p className="translate-y-[22%] whitespace-nowrap text-center font-[family-name:var(--font-display)] text-[18vw] leading-none text-ivory-100/[0.035]">
          Spices &amp; Dehydrates
        </p>
      </div>
      <div className="h-16 md:h-0" />
    </footer>
  );
}
