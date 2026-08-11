import { Button, Container, Icon, Img, Reveal, Section, SectionHeading } from "@/components/ui";
import { CTASection } from "@/components/sections";
import { ProductCard } from "@/components/ProductCard";
import { Link, useRoute } from "@/lib/router";
import { company } from "@/data/site";
import { getCategory, getProductBySlug, products, type SpecRow } from "@/data/products";

function DataTable({ rows }: { rows: SpecRow[] }) {
  return (
    <dl className="divide-y divide-ink-900/[0.08] overflow-hidden rounded-md border border-ink-900/[0.08]">
      {rows.map((r) => (
        <div key={r.label} className="grid grid-cols-1 gap-1 bg-ivory-50 px-5 py-3.5 sm:grid-cols-[minmax(0,180px)_1fr] sm:gap-4">
          <dt className="text-[0.8125rem] font-medium text-ink-500">{r.label}</dt>
          <dd className="text-[0.9375rem] text-ink-900">{r.value}</dd>
        </div>
      ))}
    </dl>
  );
}

function Chips({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((f) => (
        <li
          key={f}
          className="rounded-full border border-ink-900/12 bg-ivory-50 px-3.5 py-1.5 text-[0.8125rem] text-ink-700"
        >
          {f}
        </li>
      ))}
    </ul>
  );
}

export default function ProductDetail() {
  const { segments } = useRoute();
  const slug = segments[1] ?? "";
  const product = getProductBySlug(slug);

  if (!product) {
    return (
      <Section tone="ivory" className="pt-[160px]">
        <Container width="narrow">
          <h1 className="text-4xl">Product not found</h1>
          <p className="mt-4 text-ink-500">
            The item you are looking for is not in the catalogue. Browse the full range or send us
            your requirement directly.
          </p>
          <div className="mt-8 flex gap-3">
            <Button to="#/products" arrow>
              View Products
            </Button>
            <Button to="#/contact" variant="secondary">
              Talk to Sales
            </Button>
          </div>
        </Container>
      </Section>
    );
  }

  const category = getCategory(product.category);
  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);
  const quoteHref = `#/contact?product=${encodeURIComponent(product.name)}&category=${product.category}`;

  const sections = [
    { id: "overview", label: "Overview" },
    { id: "packaging", label: "Packaging" },
  ];

  return (
    <>
      {/* Product schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: product.name,
            description: product.shortDescription,
            image: product.image,
            category: category.name,
            countryOfOrigin: "India",
            brand: { "@type": "Brand", name: company.name },
            offers: {
              "@type": "Offer",
              availability: "https://schema.org/InStock",
              priceCurrency: "USD",
              priceSpecification: {
                "@type": "PriceSpecification",
                description: "Quotation on request — B2B / bulk supply",
              },
              seller: { "@type": "Organization", name: company.name },
            },
          }),
        }}
      />

      <div className="bg-ivory-100 pt-[84px]">
        <Container width="wide">
          <nav aria-label="Breadcrumb" className="py-6">
            <ol className="flex flex-wrap items-center gap-2 text-[0.75rem] text-ink-400">
              <li>
                <Link to="#/" className="hover:text-navy-700">
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link to="#/products" className="hover:text-navy-700">
                  Products
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link to={`#/products/${category.slug}`} className="hover:text-navy-700">
                  {category.name}
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-ink-800">{product.name}</li>
            </ol>
          </nav>
        </Container>
      </div>

      {/* Hero */}
      <section className="bg-ivory-100 pb-16 sm:pb-20">
        <Container width="wide">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-6">
              <Img
                src={product.image}
                alt={product.imageAlt}
                ratio="1/1"
                priority
                wrapperClassName="rounded-lg"
              />
            </div>

            <div className="lg:col-span-6">
              <span className="eyebrow text-clay-600">{category.name}</span>
              <h1 className="mt-4 text-[2.25rem] leading-[1.05] sm:text-[2.85rem]">{product.name}</h1>
              <p className="mt-5 text-[1.0625rem] leading-relaxed text-ink-500">
                {product.shortDescription}
              </p>

              <dl className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-md border border-ink-900/[0.08] bg-ink-900/[0.08] sm:grid-cols-4">
                {[
                  { k: "Origin", v: "India" },
                  { k: "MOQ", v: product.moq },
                  { k: "Shelf Life", v: product.shelfLife },
                  { k: "Forms", v: `${product.forms.length} options` },
                ].map((item) => (
                  <div key={item.k} className="bg-ivory-50 px-4 py-4">
                    <dt className="text-[0.625rem] font-semibold tracking-[0.12em] text-ink-400 uppercase">
                      {item.k}
                    </dt>
                    <dd className="mt-1.5 text-[0.875rem] leading-snug text-ink-900">{item.v}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button to={quoteHref} size="lg" arrow>
                  Request Product Quote
                </Button>
                <Button to="#/contact" variant="secondary" size="lg">
                  Talk to Our Sales Team
                </Button>
              </div>

              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[0.8125rem] text-ink-500">
                <a href={`mailto:${company.email}`} className="inline-flex items-center gap-2 hover:text-navy-700">
                  <Icon name="mail" className="h-4 w-4" /> Ask for Specifications
                </a>
                <a href="https://wa.me/" className="inline-flex items-center gap-2 hover:text-navy-700">
                  <Icon name="whatsapp" className="h-4 w-4" /> Request Sample
                </a>
              </div>

              <p className="mt-8 rounded-sm border-l-2 border-turmeric-500 bg-turmeric-100/50 px-4 py-3 text-[0.8125rem] leading-relaxed text-bark-700">
                Values shown as <strong>[placeholders]</strong> have not yet been confirmed by the
                business. Replace them in <code>src/data/products.ts</code> before publishing.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Sticky section nav */}
      <div className="sticky top-[64px] z-30 border-y border-ink-900/[0.08] bg-ivory-50/95 backdrop-blur-lg">
        <Container width="wide">
          <ul className="flex gap-1 overflow-x-auto py-2.5">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(s.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                  className="block shrink-0 whitespace-nowrap rounded-sm px-3.5 py-2 text-[0.8125rem] text-ink-500 transition-colors hover:bg-ink-900/[0.04] hover:text-ink-900"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </div>

      <Section tone="ivory">
        <Container width="wide">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="space-y-14 lg:col-span-8">
              <div id="overview" className="scroll-mt-32">
                <h2 className="text-[1.75rem]">Product Overview</h2>
                <p className="mt-4 text-[1rem] leading-relaxed text-ink-600">{product.description}</p>
              </div>


              <div id="packaging" className="scroll-mt-32">
                <h2 className="text-[1.75rem]">Packaging Options</h2>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {product.packaging.map((p) => (
                    <li
                      key={p}
                      className="flex items-start gap-3 rounded-md border border-ink-900/[0.08] bg-ivory-50 px-4 py-3.5"
                    >
                      <Icon name="box" className="mt-0.5 h-4 w-4 shrink-0 text-clay-600" />
                      <span className="text-[0.875rem] text-ink-700">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Sticky enquiry rail */}
            <aside className="lg:col-span-4">
              <div className="sticky top-32 space-y-4">
                <div className="rounded-md border border-ink-900/[0.08] bg-ivory-50 p-6 shadow-[var(--shadow-soft)]">
                  <h2 className="text-[1.25rem]">Enquire about {product.name}</h2>
                  <p className="mt-2.5 text-[0.875rem] leading-relaxed text-ink-500">
                    Send the grade, quantity, packing preference and destination port to receive a
                    workable quotation.
                  </p>
                  <div className="mt-5 grid gap-2.5">
                    <Button to={quoteHref} arrow>
                      Request Product Quote
                    </Button>
                    <Button to="#/contact" variant="secondary">
                      Talk to Our Sales Team
                    </Button>
                  </div>
                  <ul className="mt-6 space-y-3 border-t border-ink-900/[0.07] pt-5 text-[0.8125rem] text-ink-500">
                    <li className="flex items-center gap-2.5">
                      <Icon name="mail" className="h-4 w-4 text-navy-700" />
                      <a href={`mailto:${company.email}`} className="hover:text-navy-700">
                        {company.email}
                      </a>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Icon name="phone" className="h-4 w-4 text-navy-700" />
                      <a href={`tel:${company.phone}`} className="hover:text-navy-700">
                        {company.phone}
                      </a>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Icon name="whatsapp" className="h-4 w-4 text-navy-700" />
                      <span>{company.whatsapp}</span>
                    </li>
                  </ul>
                </div>

              </div>
            </aside>
          </div>
        </Container>
      </Section>

      {related.length > 0 && (
        <Section tone="white" size="sm">
          <Container width="wide">
            <SectionHeading
              eyebrow="Related"
              title={`More from ${category.name}`}
              action={
                <Button to={`#/products/${category.slug}`} variant="secondary" arrow>
                  View category
                </Button>
              }
            />
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((p, i) => (
                <Reveal key={p.id} delay={i * 70}>
                  <ProductCard product={p} className="h-full" compact />
                </Reveal>
              ))}
            </div>
          </Container>
        </Section>
      )}

      <CTASection
        eyebrow="Ready When You Are"
        title="Discuss bulk requirements with our team"
        primary={{ label: "Request a Quote", to: "#/contact" }}
        secondary={{ label: "View Products", to: "#/products" }}
      />
    </>
  );
}
