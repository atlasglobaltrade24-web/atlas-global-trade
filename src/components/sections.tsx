import { useEffect, useRef, useState } from "react";
import { cn } from "@/utils/cn";
import { Link } from "@/lib/router";
import {
  Badge,
  Button,
  Container,
  CountUp,
  Eyebrow,
  Icon,
  Img,
  Reveal,
  Section,
  SectionHeading,
} from "@/components/ui";
import {
  aboutPoints,
  certifications,
  company,
  exportCapabilities,
  exportRegions,
  faqs,
  industries,
  processSteps,
  stats,
  testimonials,
  trustItems,
  whyChoose,
  whyIndia,
} from "@/data/site";
import { categories, featuredProducts, products, productsByCategory } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";

const HERO_IMG = "images/hero-spices.jpg";
const HERO_FALLBACK =
  "https://images.pexels.com/photos/15318488/pexels-photo-15318488.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1900";
const ABOUT_IMG = "images/about-sourcing.jpg";
const ABOUT_FALLBACK =
  "https://images.pexels.com/photos/5623163/pexels-photo-5623163.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1000";
export const PACK_IMG = "images/packaging.jpg";
export const PACK_FALLBACK =
  "https://images.pexels.com/photos/7519246/pexels-photo-7519246.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=1400";

/* ============================================================
   HERO
   ============================================================ */
export function Hero() {
  return (
    <section
      className="relative isolate overflow-hidden bg-ivory-50 pt-[84px]"
      aria-labelledby="hero-title"
    >
      {/* soft fresh light blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-48 h-[36rem] w-[36rem] rounded-full bg-sky-200/70 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-1/4 h-[28rem] w-[28rem] rounded-full bg-forest-100/70 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 right-1/3 h-80 w-80 rounded-full bg-clay-100/50 blur-3xl"
      />

      <Container width="wide">
        <div className="grid items-center gap-14 py-16 sm:py-20 lg:min-h-[calc(100svh-84px)] lg:grid-cols-12 lg:gap-10 lg:py-12">
          {/* Left — copy */}
          <div className="max-w-2xl lg:col-span-6">
            <div className="animate-reveal-fade" style={{ animationDelay: "80ms" }}>
              <span className="inline-flex items-center gap-2.5 rounded-full border border-sky-500/25 bg-sky-100/70 px-4 py-1.5 text-[0.6875rem] font-semibold tracking-[0.14em] text-navy-700 uppercase">
                <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-clay-500" />
                Indian Whole Spices &amp; Dehydrated Ingredients
              </span>
            </div>

            <h1
              id="hero-title"
              className="mt-6 mb-6 animate-reveal-up hero-headline text-[2.1rem] leading-[1.15] sm:text-[2.6rem] lg:text-[3.5rem]"
              style={{ animationDelay: "160ms" }}
            >
              <span className="hero-headline-quote">Indian spices.</span>
              <span className="hero-headline-quote hero-headline-accent">Naturally sourced.</span>
              <span className="hero-headline-quote hero-headline-underline">Reliably supplied.</span>
            </h1>

            <p
              className="mt-7 max-w-xl animate-reveal-up text-[1.0625rem] leading-relaxed text-ink-500 sm:text-[1.1875rem]"
              style={{ animationDelay: "280ms" }}
            >
              Premium whole spices and dehydrated ingredients sourced from India for food
              businesses around the world.
            </p>

            <div
              className="mt-9 flex animate-reveal-up flex-col gap-3 sm:flex-row"
              style={{ animationDelay: "400ms" }}
            >
              <Button to="#/products" size="lg" arrow>
                Explore Products
              </Button>
              <Button to="#/contact" variant="secondary" size="lg">
                Request a Quote
              </Button>
            </div>

            <p
              className="mt-8 flex animate-reveal-fade items-center gap-3 text-[0.8125rem] text-ink-400"
              style={{ animationDelay: "520ms" }}
            >
              <span aria-hidden className="h-px w-8 bg-gradient-to-r from-navy-500 to-transparent" />
              Built for importers, distributors, and global buyers.
            </p>
          </div>

          {/* Right — framed image composition */}
          <div className="relative lg:col-span-6">
            <div className="animate-image-reveal relative">
              <Img
                src={HERO_IMG}
                fallback={HERO_FALLBACK}
                alt="Premium Indian whole spices arranged on a warm stone surface"
                ratio="5/4"
                priority
                wrapperClassName="rounded-[2rem] shadow-[var(--shadow-lift)] ring-1 ring-ink-900/10"
              />

              {/* floating chip — top left */}
              <div className="absolute -left-4 top-8 hidden items-center gap-2.5 rounded-xl border border-ink-900/10 bg-white/90 px-4 py-3 shadow-[var(--shadow-soft)] backdrop-blur-md sm:flex">
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-sky-100 text-navy-700">
                  <Icon name="check" className="h-4 w-4" strokeWidth={1.8} />
                </span>
                <span className="text-left">
                  <span className="block text-[0.8125rem] font-medium text-ink-900">Sortex Clean</span>
                  <span className="block text-[0.6875rem] text-ink-400">Machine-cleaned lots</span>
                </span>
              </div>

              {/* floating chip — bottom right */}
              <div className="absolute -right-3 bottom-8 hidden items-center gap-2.5 rounded-xl border border-ink-900/10 bg-white/90 px-4 py-3 shadow-[var(--shadow-soft)] backdrop-blur-md sm:flex">
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-clay-100 text-clay-600">
                  <Icon name="ship" className="h-4 w-4" />
                </span>
                <span className="text-left">
                  <span className="block text-[0.8125rem] font-medium text-ink-900">Export Ready</span>
                  <span className="block text-[0.6875rem] text-ink-400">Documentation support</span>
                </span>
              </div>

              {/* stat badge */}
              <div className="absolute -bottom-5 left-8 rounded-xl bg-forest-800 px-5 py-3 text-ivory-100 shadow-[var(--shadow-lift)]">
                <p className="font-[family-name:var(--font-display)] text-[1.375rem] leading-none">
                  {products.length}+
                </p>
                <p className="mt-1 text-[0.6875rem] text-ivory-200/75">catalogue items</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ============================================================
   PRODUCT MARQUEE
   ============================================================ */
const marqueeItems = [
  "Cumin Seeds",
  "Coriander Seeds",
  "Black Pepper",
  "Turmeric",
  "Dry Red Chilli",
  "Green Cardamom",
  "Cinnamon",
  "Cloves",
  "Star Anise",
  "Dehydrated Onion",
  "Dehydrated Garlic",
  "Onion Granules",
  "Garlic Granules",
  "Fenugreek Seeds",
  "Mustard Seeds",
  "Nigella Seeds",
];

export function ProductMarquee() {
  const row = (key: string) => (
    <div key={key} className="flex shrink-0 items-center" aria-hidden={key === "b"}>
      {marqueeItems.map((m) => (
        <span
          key={m}
          className="flex items-center gap-6 px-6 text-[0.8125rem] font-semibold tracking-[0.18em] text-ink-400 uppercase"
        >
          {m}
          <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-clay-400" />
        </span>
      ))}
    </div>
  );

  return (
    <section
      aria-label="Product range highlights"
      className="group/marquee relative border-y border-ink-900/[0.06] bg-ivory-50"
    >
      {/* soft edge fades */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-ivory-50 to-transparent sm:w-32"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-ivory-50 to-transparent sm:w-32"
      />

      <div className="flex overflow-hidden py-4">
        <div className="flex w-max animate-marquee items-center motion-reduce:animate-none group-hover/marquee:[animation-play-state:paused]">
          {row("a")}
          {row("b")}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   TRUST STRIP
   ============================================================ */
const iconTones = [
  "bg-sky-100 text-navy-700",
  "bg-clay-100 text-clay-600",
  "bg-turmeric-100 text-turmeric-600",
];

export function TrustStrip() {
  return (
    <section aria-label="Why work with us" className="bg-ivory-100">
      <Container width="wide">
        <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-ink-900/[0.06] bg-ink-900/[0.06] shadow-[var(--shadow-soft)] md:grid-cols-3 lg:grid-cols-6">
          {trustItems.map((item, i) => (
            <li key={item.label} className="bg-white">
              <Reveal delay={i * 60} className="group flex h-full items-start gap-3 p-5 transition-colors duration-300 hover:bg-forest-100/40">
                <span
                  className={cn(
                    "mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-lg transition-transform duration-300 group-hover:scale-105",
                    iconTones[i % iconTones.length],
                  )}
                >
                  <Icon name={item.icon} className="h-5 w-5" />
                </span>
                <span className="flex flex-col">
                  <span className="text-[0.9375rem] font-medium text-ink-900">{item.label}</span>
                  <span className="mt-0.5 text-[0.75rem] text-ink-400">{item.note}</span>
                </span>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

/* ============================================================
   ABOUT
   ============================================================ */
export function AboutSection({ withCta = true }: { withCta?: boolean }) {
  return (
    <Section tone="ivory" id="about">
      <Container width="wide">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative">
            <Img
              src={ABOUT_IMG}
              fallback={ABOUT_FALLBACK}
              alt="Baskets and sacks of Indian spices in a sunlit sourcing warehouse"
              ratio="4/5"
              wrapperClassName="rounded-lg"
            />
            <div className="absolute -bottom-6 -right-2 hidden w-56 rounded-md border border-ink-900/[0.08] bg-ivory-50 p-5 shadow-[var(--shadow-lift)] sm:block lg:-right-8">
              <p className="eyebrow text-navy-600">Sourcing base</p>
              <p className="mt-2 font-[family-name:var(--font-display)] text-[1.5rem] leading-tight text-ink-900">
                India
              </p>
              <p className="mt-1.5 text-[0.8125rem] leading-relaxed text-ink-500">
                selected by crop, season and buyer requirement.
              </p>
            </div>
          </Reveal>

          <div>
            <SectionHeading
              eyebrow="Who We Are"
              title={
                <>
                  Rooted in India.
                  <br />
                  Built for global supply.
                </>
              }
              lead={`${company.name} supplies whole spices and dehydrated ingredients from India to buyers who need the same product, to the same specification, shipment after shipment.`}
            />

            <p className="mt-5 max-w-xl text-[0.9375rem] leading-relaxed text-ink-500">
              We work close to the growing regions, select material against defined parameters, and
              process it into the whole, cut, granulated or minced forms our customers actually
              use. Our customers are commercial buyers — importers, distributors, 
              hotel groups and large kitchens — so everything from sampling to packing is organised
              around commercial requirements rather than retail convenience.
            </p>

            <ul className="mt-9 grid gap-x-8 gap-y-6 sm:grid-cols-2">
              {aboutPoints.map((p, i) => (
                <Reveal as="li" key={p.title} delay={i * 80} className="border-t border-ink-900/10 pt-4">
                  <h3 className="text-[1.0625rem] leading-snug">{p.title}</h3>
                  <p className="mt-2 text-[0.875rem] leading-relaxed text-ink-500">{p.body}</p>
                </Reveal>
              ))}
            </ul>

            {withCta && (
              <div className="mt-10 flex flex-wrap gap-3">
                <Button to="#/about" arrow>
                  Discover Our Story
                </Button>
                <Button to="#/quality" variant="secondary">
                  How We Control Quality
                </Button>
              </div>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ============================================================
   STATS BAND
   ============================================================ */
export function StatsBand() {
  return (
    <Section tone="white" size="sm">
      <Container width="wide">
        <dl className="grid grid-cols-2 gap-x-6 gap-y-10 sm:gap-x-10 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 70}
              className={cn(
                "border-l-2 pl-5",
                i % 2 === 0 ? "border-forest-500" : "border-clay-400",
              )}
            >
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <p className="bg-gradient-to-r from-navy-800 via-navy-600 to-sky-500 bg-clip-text font-[family-name:var(--font-display)] text-[2.75rem] leading-none text-transparent sm:text-[3.25rem]">
                  <CountUp value={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-3 text-[0.875rem] font-medium leading-snug text-ink-600">
                  {s.label}
                </p>
              </dd>
            </Reveal>
          ))}
        </dl>
      </Container>
    </Section>
  );
}

/* ============================================================
   WHY CHOOSE US
   ============================================================ */
export function WhyChooseUs() {
  return (
    <Section tone="white">
      <Container width="wide">
        <SectionHeading
          eyebrow="The Difference"
          title="Why buyers choose us"
          lead="Six reasons commercial buyers keep the relationship going beyond the first container."
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-ink-900/[0.08] bg-ink-900/[0.08] sm:grid-cols-2 lg:grid-cols-3">
          {whyChoose.map((f, i) => (
            <Reveal key={f.title} delay={i * 60} className="bg-ivory-50">
              <div className="group h-full p-7 transition-colors duration-500 hover:bg-forest-100/40 lg:p-9">
                <span className="grid h-11 w-11 place-items-center rounded-sm border border-sky-500/25 bg-sky-100/70 text-navy-700 transition-all duration-500 group-hover:border-navy-600/40 group-hover:bg-forest-800 group-hover:text-ivory-100">
                  <Icon name={f.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-6 text-[1.25rem] leading-snug">{f.title}</h3>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-500">{f.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* ============================================================
   CATEGORY CARDS
   ============================================================ */
export function CategorySection() {
  return (
    <Section tone="ivory" id="categories">
      <Container width="wide">
        <SectionHeading
          eyebrow="Product Range"
          title="Two focused product lines"
          lead="A deliberately narrow catalogue, so grades, cuts and consistency can be controlled properly."
          action={
            <Button to="#/products" variant="secondary" arrow>
              View Full Product Range
            </Button>
          }
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {categories.map((c, i) => (
            <Reveal key={c.id} delay={i * 100}>
              <article className="group relative isolate h-full overflow-hidden rounded-lg bg-ink-900">
                <Img
                  src={c.image}
                  fallback={c.fallbackImage}
                  alt={`${c.name} supplied by ${company.name}`}
                  ratio="4/3"
                  tone="dark"
                  wrapperClassName="absolute inset-0 h-full w-full"
                  className="transition-transform duration-[1600ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/55 to-ink-900/10" />

                <div className="relative flex min-h-[26rem] flex-col justify-end p-7 sm:min-h-[30rem] sm:p-10">
                  <Badge tone="light">{productsByCategory(c.id).length} items listed</Badge>
                  <h3 className="mt-4 text-[2rem] leading-tight text-ivory-100 sm:text-[2.5rem]">
                    {c.name}
                  </h3>
                  <p className="mt-3 max-w-md text-[0.9375rem] leading-relaxed text-ivory-200/75">
                    {c.shortDescription}
                  </p>
                  <div className="mt-7">
                    <Link
                      to={`#/products/${c.slug}`}
                      className="group/link inline-flex items-center gap-2.5 border-b border-ivory-200/30 pb-1.5 text-[0.875rem] font-medium text-ivory-100 transition-colors hover:border-turmeric-400 hover:text-turmeric-400"
                    >
                      Explore {c.name}
                      <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:translate-x-1" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M2 8h11M9 4l4 4-4 4" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* ============================================================
   FEATURED PRODUCTS
   ============================================================ */
export function FeaturedProducts() {
  return (
    <Section tone="white">
      <Container width="wide">
        <SectionHeading
          eyebrow="Selected Lines"
          title="Featured products"
          lead="A snapshot of the range. Every item can be quoted to your specification, grade and packing format."
          action={
            <Button to="#/products" variant="secondary" arrow>
              View Full Product Range
            </Button>
          }
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {featuredProducts.slice(0, 8).map((p, i) => (
            <Reveal key={p.id} delay={(i % 4) * 70}>
              <ProductCard product={p} className="h-full" />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* ============================================================
   PROCESS TIMELINE
   ============================================================ */
export function ProcessTimeline({ tone = "ivory" }: { tone?: "dark" | "ivory" }) {
  const light = tone === "dark";
  return (
    <Section tone={light ? "dark" : "ivory"} id="process">
      <Container width="wide">
        <SectionHeading
          eyebrow="Quality &amp; Processing"
          tone={light ? "light" : "dark"}
          title="Quality is controlled throughout the journey — not checked only at the end"
          lead="Each stage narrows variability, so what leaves our facility matches what was agreed on the specification sheet."
        />

        {/* Desktop: horizontal */}
        <div className="relative mt-16 hidden lg:block">
          <div
            aria-hidden
            className={cn(
              "absolute left-0 right-0 top-[22px] h-[3px] rounded-full bg-gradient-to-r from-sky-400 via-turmeric-400 to-clay-400",
              light ? "opacity-30" : "opacity-100",
            )}
          />
          <ol className="grid grid-cols-7 gap-4">
            {processSteps.map((s, i) => (
              <Reveal as="li" key={s.id} delay={i * 90} className="relative">
                <span
                  className={cn(
                    "relative z-10 grid h-11 w-11 place-items-center rounded-full border transition-colors",
                    light
                      ? "border-turmeric-500/30 bg-ink-900 text-turmeric-400"
                      : "border-sky-200 bg-white text-navy-600 shadow-[var(--shadow-soft)]",
                  )}
                >
                  <Icon name={s.icon} className="h-5 w-5" />
                </span>
                <p
                  className={cn(
                    "mt-5 text-[0.6875rem] font-semibold tracking-[0.14em] uppercase",
                    light ? "text-ivory-300/40" : "text-ink-400",
                  )}
                >
                  Stage {String(i + 1).padStart(2, "0")}
                </p>
                <h3
                  className={cn(
                    "mt-2 text-[1.125rem] leading-snug",
                    light && "text-ivory-100",
                  )}
                >
                  {s.title}
                </h3>
                <p
                  className={cn(
                    "mt-2.5 text-[0.8125rem] leading-relaxed",
                    light ? "text-ivory-300/60" : "text-ink-500",
                  )}
                >
                  {s.body}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>

        {/* Mobile / tablet: vertical */}
        <ol className="relative mt-12 lg:hidden">
          <div
            aria-hidden
            className={cn(
              "absolute bottom-4 left-[21px] top-4 w-[3px] rounded-full bg-gradient-to-b from-sky-400 via-turmeric-400 to-clay-400",
              light ? "opacity-30" : "opacity-100",
            )}
          />
          {processSteps.map((s, i) => (
            <Reveal as="li" key={s.id} delay={i * 60} className="relative flex gap-5 pb-9 last:pb-0">
              <span
                className={cn(
                  "relative z-10 grid h-[43px] w-[43px] shrink-0 place-items-center rounded-full border",
                  light
                    ? "border-turmeric-500/30 bg-ink-900 text-turmeric-400"
                    : "border-sky-200 bg-white text-navy-600 shadow-[var(--shadow-soft)]",
                )}
              >
                <Icon name={s.icon} className="h-5 w-5" />
              </span>
              <div className="pt-1.5">
                <p
                  className={cn(
                    "text-[0.6875rem] font-semibold tracking-[0.14em] uppercase",
                    light ? "text-ivory-300/40" : "text-ink-400",
                  )}
                >
                  Stage {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className={cn("mt-1.5 text-[1.1875rem]", light && "text-ivory-100")}>{s.title}</h3>
                <p
                  className={cn(
                    "mt-2 text-[0.875rem] leading-relaxed",
                    light ? "text-ivory-300/60" : "text-ink-500",
                  )}
                >
                  {s.body}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>

        <div className="mt-14 flex flex-wrap gap-3">
          <Button to="#/quality" variant={light ? "light" : "primary"} arrow>
            Explore Quality &amp; Processing
          </Button>
          <Button to="#/contact" variant={light ? "outlineLight" : "secondary"}>
            Ask for Specifications
          </Button>
        </div>
      </Container>
    </Section>
  );
}

/* ============================================================
   CERTIFICATIONS
   ============================================================ */
export function CertificationsSection() {
  return (
    <Section tone="white">
      <Container width="wide">
        <SectionHeading
          eyebrow="Trust &amp; Assurance"
          title="Certifications &amp; compliance"
          lead="The entries below are editable placeholders. Replace each card with the actual certification, registration or laboratory arrangement once documents are confirmed — we do not display claims that have not been verified."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((c, i) => (
            <Reveal key={`${c.type}-${i}`} delay={i * 70}>
              <article className="flex h-full flex-col rounded-md border border-ink-900/[0.08] bg-ivory-100 p-6">
                {c.logo ? (
                  <Img
                    src={c.logo.startsWith("/") ? c.logo.slice(1) : c.logo}
                    alt={`${c.name} logo`}
                    fit="contain"
                    wrapperClassName="h-16 w-16 rounded-sm border border-dashed border-ink-900/20 bg-white"
                    className="max-h-12 max-w-full p-1"
                  />
                ) : (
                  <div className="grid h-16 w-16 place-items-center rounded-sm border border-dashed border-ink-900/20 text-[0.625rem] font-semibold tracking-[0.1em] text-ink-400 uppercase">
                    Logo
                  </div>
                )}
                <p className="mt-5 eyebrow text-clay-600">{c.type}</p>
                <h3 className="mt-2 text-[1.1875rem] leading-snug">{c.name}</h3>
                <p className="mt-2.5 flex-1 text-[0.875rem] leading-relaxed text-ink-500">{c.body}</p>
                <p className="mt-5 border-t border-ink-900/[0.07] pt-4 text-[0.75rem] text-ink-400">
                   <span className="text-ink-700">{c.validity}</span>
                </p>
              </article>
            </Reveal>
          ))}

          <Reveal delay={certifications.length * 70}>
            <div className="flex h-full flex-col justify-center rounded-md border border-dashed border-forest-600/30 bg-forest-100/40 p-7">
              <Icon name="shield" className="h-6 w-6 text-navy-700" />
              <h3 className="mt-4 text-[1.1875rem]">Need documentation?</h3>
              <p className="mt-2 text-[0.875rem] leading-relaxed text-ink-600">
                Tell us which certificates, test reports or declarations your market requires and we
                will confirm what can be provided for your shipment.
              </p>
              <div className="mt-5">
                <Button to="#/contact" size="sm" arrow>
                  Talk to Our Sales Team
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

/* ============================================================
   GLOBAL SUPPLY
   ============================================================ */
export function GlobalSupply() {
  return (
    <Section tone="white" id="export">
      <Container width="wide">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Global Supply"
              title="From India to markets around the world"
              lead="Sourcing happens at origin. Everything after that — processing, packing, documentation and dispatch — is organised so material arrives in the condition it left."
            />

            <div className="mt-10 grid gap-x-8 gap-y-7 sm:grid-cols-2">
              {exportCapabilities.map((c, i) => (
                <Reveal key={c.title} delay={i * 70}>
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-sky-100 text-navy-700">
                    <Icon name={c.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-[1.0625rem] leading-snug">{c.title}</h3>
                  <p className="mt-2 text-[0.875rem] leading-relaxed text-ink-500">{c.body}</p>
                </Reveal>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <Button to="#/contact" arrow>
                Discuss Your Import Requirement
              </Button>
              <Button to="#/export" variant="secondary">
                Export Capability
              </Button>
            </div>
          </div>

          <Reveal className="flex flex-col justify-center">
            <div className="rounded-[1.75rem] border border-sky-500/20 bg-gradient-to-br from-sky-100/70 via-ivory-50 to-clay-100/40 p-3 shadow-[var(--shadow-soft)] sm:p-4">
              <WorldMap />
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {exportRegions.map((region, i) => (
                <Reveal key={region.name} delay={i * 80} className="rounded-2xl border border-ink-900/[0.08] bg-white/90 p-5 shadow-sm">
                  <h3 className="text-lg font-semibold text-ink-900">{region.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">{region.description}</p>
                </Reveal>
              ))}
            </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

/* World map image showing global supply reach */
function WorldMap() {
  return (
    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-forest-600/10 bg-white/70">
      <img
        src="images/world-map.svg"
        alt="World map showing global supply reach"
        className="h-full w-full object-cover"
      />
    </div>
  );
}

/* ============================================================
   INDUSTRIES
   ============================================================ */
const industryIcons = ["factory", "sliders", "chef", "store", "users", "box", "gear", "ship"];

export function IndustriesSection() {
  return (
    <Section tone="white" id="industries">
      <Container width="wide">
        <SectionHeading
          eyebrow="Applications"
          title="Industries we serve"
          lead="If your business turns ingredients into food, there is a good chance our range fits somewhere in your line."
        />
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((ind, i) => (
            <Reveal as="li" key={ind.title} delay={(i % 4) * 70}>
              <div className="group h-full rounded-md border border-ink-900/[0.08] bg-ivory-100 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-ink-900/15 hover:bg-ivory-50 hover:shadow-[var(--shadow-soft)]">
                <span className="grid h-10 w-10 place-items-center rounded-sm bg-ivory-300/60 text-bark-700 transition-colors duration-500 group-hover:bg-clay-100 group-hover:text-clay-700">
                  <Icon name={industryIcons[i % industryIcons.length]} className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-[1.0625rem] leading-snug">{ind.title}</h3>
                <p className="mt-2 text-[0.875rem] leading-relaxed text-ink-500">{ind.body}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

/* ============================================================
   WHY INDIA
   ============================================================ */
export function WhyIndiaSection() {
  return (
    <Section tone="ivory">
      <Container width="wide">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="Origin"
              title="Why buy spices from India"
              lead="A short, factual view of what makes India a practical sourcing base for spices and dehydrated ingredients."
            />
            <div className="mt-8">
              <Button to="#/about" variant="secondary" arrow>
                About Our Sourcing
              </Button>
            </div>
          </div>

          <ul className="grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:col-span-8">
            {whyIndia.map((w, i) => (
              <Reveal as="li" key={w.title} delay={(i % 2) * 80}>
                <p className="eyebrow text-clay-600">{w.stat}</p>
                <h3 className="mt-2.5 text-[1.1875rem] leading-snug">{w.title}</h3>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-500">{w.body}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}

/* ============================================================
   TESTIMONIALS
   ============================================================ */
export function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const count = testimonials.length;
  const timer = useRef<number | null>(null);

  useEffect(() => {
    timer.current = window.setInterval(() => setIndex((i) => (i + 1) % count), 8000);
    return () => {
      if (timer.current) window.clearInterval(timer.current);
    };
  }, [count]);

  const go = (n: number) => {
    setIndex((n + count) % count);
    if (timer.current) window.clearInterval(timer.current);
  };

  const t = testimonials[index];
  const initials = t.name
    .replace(/[\[\]]/g, "")
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  return (
    <Section tone="ivory">
      <Container width="wide">
        <div className="grid gap-10 rounded-[2rem] border border-amber-300/40 bg-amber-50 p-8 shadow-[var(--shadow-lift)] sm:p-10 lg:grid-cols-12 lg:items-center lg:gap-12">
          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow="Download Brochure"
              title="Get the full product brochure"
              lead="Open or save our detailed product brochure in PDF format to review specifications, categories and export-ready product details."
            />
          </div>

          <div className="lg:col-span-6">
            <div className="flex flex-col gap-4 rounded-[1.5rem] border border-amber-200/70 bg-white p-6 shadow-[var(--shadow-soft)]">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-900">Brochure PDF</p>
              <p className="text-sm leading-7 text-ink-600">
                Download the brochure directly to your device for easy offline access and sharing with your team.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Button
                  href="/brochure/atlas_global_brochure.pdf"
                  variant="primary"
                  size="lg"
                  className="whitespace-nowrap"
                >
                  View Brochure
                </Button>
                <Button
                  href="/brochure/atlas_global_brochure.pdf"
                  variant="outline"
                  size="lg"
                  className="whitespace-nowrap"
                  download
                >
                  Download PDF
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ============================================================
   FAQ
   ============================================================ */
export function FAQAccordion({ tone = "ivory" }: { tone?: "ivory" | "white" }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section tone={tone} id="faq">
      <Container width="wide">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="FAQ"
              title="Questions buyers ask before the first order"
              lead="If something is not answered here, ask us directly — we would rather over-communicate than assume."
            />
            <div className="mt-8">
              <Button to="#/contact" arrow>
                Talk to Our Sales Team
              </Button>
            </div>
          </div>

          <div className="lg:col-span-8">
            <dl className="divide-y divide-ink-900/[0.09] border-y border-ink-900/[0.09]">
              {faqs.map((f, i) => {
                const isOpen = open === i;
                return (
                  <div key={f.q}>
                    <dt>
                      <button
                        type="button"
                        onClick={() => setOpen(isOpen ? null : i)}
                        aria-expanded={isOpen}
                        aria-controls={`faq-panel-${i}`}
                        id={`faq-button-${i}`}
                        className="flex w-full items-start justify-between gap-6 py-5 text-left"
                      >
                        <span
                          className={cn(
                            "font-[family-name:var(--font-display)] text-[1.0625rem] leading-snug transition-colors sm:text-[1.1875rem]",
                            isOpen ? "text-navy-700" : "text-ink-900",
                          )}
                        >
                          {f.q}
                        </span>
                        <span
                          className={cn(
                            "mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full border transition-all duration-300",
                            isOpen
                              ? "rotate-45 border-forest-700 bg-forest-800 text-ivory-100"
                              : "border-ink-900/15 text-ink-500",
                          )}
                        >
                          <Icon name="plus" className="h-3.5 w-3.5" strokeWidth={1.6} />
                        </span>
                      </button>
                    </dt>
                    <dd
                      id={`faq-panel-${i}`}
                      role="region"
                      aria-labelledby={`faq-button-${i}`}
                      className={cn(
                        "grid transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                      )}
                    >
                      <div className="overflow-hidden">
                        <p className="max-w-2xl pb-6 pr-10 text-[0.9375rem] leading-relaxed text-ink-500">
                          {f.a}
                        </p>
                      </div>
                    </dd>
                  </div>
                );
              })}
            </dl>
          </div>
        </div>
      </Container>

      {/* FAQ structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
    </Section>
  );
}

/* ============================================================
   CTA BAND
   ============================================================ */
export function CTASection({
  eyebrow = "Next Step",
  title = "Tell us what you need to buy",
  lead = "Share the product, specification, quantity, packing preference and destination — we will come back with a clear, workable quotation.",
  primary = { label: "Request a Quote", to: "#/contact" },
  secondary = { label: "View Products", to: "#/products" },
}: {
  eyebrow?: string;
  title?: string;
  lead?: string;
  primary?: { label: string; to: string };
  secondary?: { label: string; to: string };
}) {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-clay-600 via-clay-500 to-turmeric-500">
      {/* soft light shapes */}
      <div aria-hidden className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-2xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-32 right-0 h-96 w-96 rounded-full bg-forest-900/20 blur-3xl" />
      <div
        aria-hidden
        className="pointer-events-none absolute right-1/4 top-0 h-40 w-40 rounded-full border border-white/20"
      />

      <Container width="wide">
        <div className="relative flex flex-col gap-8 py-16 sm:py-20 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <span className="eyebrow text-ivory-100/85">{eyebrow}</span>
            <h2 className="mt-4 text-[2rem] leading-[1.1] text-white sm:text-[2.6rem]">{title}</h2>
            <p className="mt-4 text-[1rem] leading-relaxed text-ivory-100/90">{lead}</p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <Button to={primary.to} variant="light" size="lg" arrow>
              {primary.label}
            </Button>
            <Button to={secondary.to} variant="outlineLight" size="lg">
              {secondary.label}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ============================================================
   PAGE HERO (inner pages)
   ============================================================ */
export function PageHero({
  eyebrow,
  title,
  lead,
  breadcrumb,
  image,
  fallback,
  alt,
}: {
  eyebrow: string;
  title: React.ReactNode;
  lead?: string;
  breadcrumb?: { label: string; href?: string }[];
  image?: string;
  fallback?: string;
  alt?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-ivory-100 pt-[84px]">
      {/* soft fresh light blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-sky-100/80 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-forest-100/60 blur-3xl"
      />

      <Container width="wide">
        <div className="grid items-center gap-10 py-14 sm:py-16 lg:grid-cols-12 lg:gap-14 lg:py-20">
          <div className={cn(image ? "lg:col-span-7" : "lg:col-span-9")}>
            {breadcrumb && (
              <nav aria-label="Breadcrumb" className="mb-6">
                <ol className="flex flex-wrap items-center gap-2 text-[0.75rem] text-ink-400">
                  {breadcrumb.map((b, i) => (
                    <li key={b.label} className="flex items-center gap-2">
                      {b.href ? (
                        <Link to={b.href} className="transition-colors hover:text-navy-700">
                          {b.label}
                        </Link>
                      ) : (
                        <span className="text-ink-800">{b.label}</span>
                      )}
                      {i < breadcrumb.length - 1 && <span aria-hidden>/</span>}
                    </li>
                  ))}
                </ol>
              </nav>
            )}
            <div className="animate-reveal-up">
              <Eyebrow>{eyebrow}</Eyebrow>
              <h1 className="mt-5 text-[2.25rem] leading-[1.05] text-ink-900 sm:text-[3rem] lg:text-[3.4rem]">
                {title}
              </h1>
              {lead && (
                <p className="mt-6 max-w-2xl text-[1.0625rem] leading-relaxed text-ink-500">
                  {lead}
                </p>
              )}
            </div>
          </div>

          {image && (
            <div className="lg:col-span-5">
              <div className="animate-image-reveal relative">
                <Img
                  src={image}
                  fallback={fallback}
                  alt={alt ?? ""}
                  ratio="4/3"
                  priority
                  wrapperClassName="rounded-[1.75rem] shadow-[var(--shadow-lift)] ring-1 ring-ink-900/10"
                />
                <div className="absolute -bottom-4 left-6 flex items-center gap-2 rounded-xl bg-white/95 px-4 py-2.5 shadow-[var(--shadow-soft)] backdrop-blur-md">
                  <span className="h-2 w-2 rounded-full bg-clay-500" />
                  <span className="text-[0.75rem] font-medium text-ink-800">{alt ?? "India"}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
