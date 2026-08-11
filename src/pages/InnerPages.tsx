import { Button, Container, Icon, Reveal, Section, SectionHeading } from "@/components/ui";
import {
  AboutSection,
  CertificationsSection,
  CTASection,
  FAQAccordion,
  GlobalSupply,
  IndustriesSection,
  PACK_FALLBACK,
  PACK_IMG,
  PageHero,
  ProcessTimeline,
  StatsBand,
  TestimonialCarousel,
  TrustStrip,
  WhyChooseUs,
  WhyIndiaSection,
} from "@/components/sections";
import QuoteForm from "@/components/QuoteForm";
import ContactChannels from "@/components/ContactChannels";
import { useRoute } from "@/lib/router";
import { company, exportCapabilities } from "@/data/site";
import { categories } from "@/data/products";

/* ============================================================
   ABOUT
   ============================================================ */
export function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Rooted in India. Built for global supply."
        lead={`${company.name} is an India-based  , supplier and exporter of whole spices and dehydrated ingredients, working with commercial buyers who need dependable specifications and dependable follow-through.`}
        breadcrumb={[{ label: "Home", href: "#/" }, { label: "About Us" }]}
        image="images/about-sourcing.jpg"
        fallback="https://images.pexels.com/photos/5623163/pexels-photo-5623163.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600"
        alt="Indian spice sourcing warehouse"
      />
      <TrustStrip />

      <Section tone="ivory">
        <Container width="wide">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Our Position"
                title="A supplier, not a middleman"
                lead="We keep the catalogue narrow on purpose. Two product lines, understood properly, beats a long list understood loosely."
              />
            </div>
            <div className="space-y-6 text-[1rem] leading-relaxed text-ink-600 lg:col-span-7">
              <p>
                Indian spices move through many hands before they reach a factory floor overseas.
                Every hand adds cost and removes information. Our approach is to stay close to the
                origin, take responsibility for selection and processing, and hand the buyer a
                product with a known history rather than an anonymous lot.
              </p>
              <p>
                That means being clear about what we can and cannot do. Where a specification is
                achievable we will confirm it in writing. Where it is not, we will say so before the
                order rather than after the container has sailed. Buyers tell us that predictability
                is worth more than the last half-percent of price.
              </p>
              <p>
                Our customers include importers and distributors placing container-load orders,
                food  s buying against tight ingredient specifications, spice blenders,
                hotel and restaurant groups standardising taste across outlets, and private-label
                businesses building their own retail ranges.
              </p>
              {/* <p className="rounded-sm border-l-2 border-forest-600 bg-forest-100/50 px-5 py-4 text-[0.9375rem]">
                Company history, facility details, team information and capacity figures are
                intentionally left blank. Add them in{" "}
                <code className="text-[0.8125rem]">src/data/site.ts</code> once verified — we do not
                publish claims that have not been confirmed.
              </p> */}
            </div>
          </div>
        </Container>
      </Section>

      <AboutSection withCta={false} />
      <StatsBand />
      <WhyChooseUs />
      <WhyIndiaSection />
      <CertificationsSection />
      <TestimonialCarousel />
      <CTASection
        eyebrow="Work With Us"
        title="Let's talk about your sourcing programme"
        primary={{ label: "Request a Quote", to: "#/contact" }}
        secondary={{ label: "View Products", to: "#/products" }}
      />
    </>
  );
}

/* ============================================================
   QUALITY & PROCESSING
   ============================================================ */
const qualityPillars = [
  {
    icon: "leaf",
    title: "Control starts at buying",
    body: "Lot selection at origin decides most of the final quality. Cleaning cannot fix material that was wrong when it was purchased.",
  },
  {
    icon: "search",
    title: "Checks inside the run",
    body: "Parameters are monitored during processing rather than only on the finished pallet, so deviations are caught while they can still be corrected.",
  },
  {
    icon: "file",
    title: "Written specifications",
    body: "Every order works from an agreed specification sheet, so 'good quality' means something measurable to both sides.",
  },
  {
    icon: "shield",
    title: "Traceable lots",
    body: "Lot identification is carried through packing so material can be traced back if a question is raised later.",
  },
];

export function QualityPage() {
  return (
    <>
      <PageHero
        eyebrow="Quality & Processing"
        title="Quality is controlled throughout the journey"
        lead="From sourcing to dispatch, each stage is designed to remove variability rather than discover it at the end."
        breadcrumb={[{ label: "Home", href: "#/" }, { label: "Quality & Processing" }]}
        image="images/cat-whole-spices.jpg"
        fallback="https://images.pexels.com/photos/8559086/pexels-photo-8559086.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600"
        alt="Whole spices being inspected"
      />

      <Section tone="ivory">
        <Container width="wide">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {qualityPillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 70}>
                <span className="grid h-11 w-11 place-items-center rounded-sm bg-sky-100 text-navy-700">
                  <Icon name={p.icon} className="h-5 w-5" />
                </span>
                <h2 className="mt-5 text-[1.1875rem] leading-snug">{p.title}</h2>
                <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-ink-500">{p.body}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <ProcessTimeline />
      <CertificationsSection />

      <Section tone="ivory">
        <Container width="wide">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Honest Positioning"
                title="What we deliberately do not claim"
                lead="Trust in food ingredients is built on accuracy, not adjectives."
              />
            </div>
            <ul className="space-y-5 lg:col-span-7">
              {[
                "We do not list certifications until the certificate is in hand and current.",
                "We do not publish machinery or capacity figures that have not been verified.",
                "We do not promise analytical values before the lot has been tested.",
                "We do not name customers or destinations without their written consent.",
              ].map((t) => (
                <Reveal as="li" key={t} className="flex gap-4 border-b border-ink-900/[0.08] pb-5">
                  <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-navy-700" strokeWidth={1.8} />
                  <p className="text-[1rem] leading-relaxed text-ink-600">{t}</p>
                </Reveal>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      <CTASection
        eyebrow="Documentation"
        title="Ask for specifications and test scope"
        lead="Tell us which parameters your market or QA team requires and we will confirm what can be provided for your shipment."
        primary={{ label: "Ask for Specifications", to: "#/contact" }}
        secondary={{ label: "View Products", to: "#/products" }}
      />
    </>
  );
}

/* ============================================================
   EXPORT / GLOBAL SUPPLY
   ============================================================ */
export function ExportPage() {
  return (
    <>
      <PageHero
        eyebrow="Export & Global Supply"
        title="From India to markets around the world"
        lead="Export-oriented packing, documentation support and shipment coordination — organised so buyers can plan their inbound with confidence."
        breadcrumb={[{ label: "Home", href: "#/" }, { label: "Export / Global Supply" }]}
        image={PACK_IMG}
        fallback={PACK_FALLBACK}
        alt="Export packaging prepared for shipment"
      />

      <Section tone="ivory">
        <Container width="wide">
          <SectionHeading
            eyebrow="Capability"
            title="What we handle on the export side"
            lead="The detail below is deliberately generic until confirmed. Replace each placeholder with your verified export practice."
          />
          <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-ink-900/[0.08] bg-ink-900/[0.08] sm:grid-cols-2">
            {exportCapabilities.map((c, i) => (
              <Reveal key={c.title} delay={i * 70} className="bg-ivory-50">
                <div className="h-full p-7 lg:p-9">
                  <span className="grid h-11 w-11 place-items-center rounded-sm bg-clay-100 text-clay-700">
                    <Icon name={c.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-6 text-[1.25rem]">{c.title}</h3>
                  <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-500">{c.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          </div>
        </Container>
      </Section>

      <GlobalSupply />
      <IndustriesSection />
      <FAQAccordion tone="ivory" />
      <CTASection
        eyebrow="International Buyers"
        title="Discuss your import requirement"
        lead="Share destination port, required documents, target volume and timelines. We will confirm what is workable."
        primary={{ label: "Discuss Export Requirements", to: "#/contact" }}
        secondary={{ label: "View Products", to: "#/products" }}
      />
    </>
  );
}

/* ============================================================
   CONTACT
   ============================================================ */
export function ContactPage() {
  const { query } = useRoute();
  const product = query.get("product") ?? undefined;
  const category = query.get("category") ?? undefined;

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Request a quote"
        lead="Share the product, specification, quantity, packing preference and destination. Our sales desk will respond with commercial terms and next steps."
        breadcrumb={[{ label: "Home", href: "#/" }, { label: "Contact Us" }]}
      />

      <Section tone="ivory">
        <Container width="wide">
          {product && (
            <div className="mb-8 flex flex-wrap items-center gap-3 rounded-md border border-forest-600/25 bg-forest-100/60 px-5 py-4">
              <Icon name="check" className="h-4 w-4 text-navy-700" strokeWidth={1.8} />
              <p className="text-[0.9375rem] text-ink-700">
                Enquiry pre-filled for <strong className="text-navy-800">{product}</strong>
              </p>
            </div>
          )}

          <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <QuoteForm defaultProduct={product} defaultCategory={category} />
            </div>
            <div className="lg:col-span-5">
              <ContactChannels />
            </div>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: "file", t: "Ask for Specifications", d: "Request the product specification sheet before you commit." },
              { icon: "flask", t: "Request Sample", d: "Have your QA team evaluate the material first." },
              { icon: "spark", t: "Browse the Catalogue", d: "Explore the full range of whole spices and dehydrated products." },
              { icon: "ship", t: "Discuss Export Requirements", d: "Destination port, documents and shipment planning." },
            ].map((c, i) => (
              <Reveal key={c.t} delay={i * 60}>
                <div className="h-full rounded-md border border-ink-900/[0.08] bg-ivory-50 p-6">
                  <Icon name={c.icon} className="h-5 w-5 text-navy-700" />
                  <h2 className="mt-4 text-[1.0625rem]">{c.t}</h2>
                  <p className="mt-2 text-[0.875rem] leading-relaxed text-ink-500">{c.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="white" size="sm">
        <Container width="wide">
          <SectionHeading
            eyebrow="Quick Links"
            title="Or start from the catalogue"
            lead="Jump straight into a category and request a quote from any product page."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {categories.map((c) => (
              <a
                key={c.id}
                href={`#/products/${c.slug}`}
                className="group flex items-center justify-between gap-6 rounded-md border border-ink-900/[0.08] bg-ivory-100 p-7 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-soft)]"
              >
                <div>
                  <h3 className="text-[1.375rem]">{c.name}</h3>
                  <p className="mt-2 max-w-md text-[0.875rem] leading-relaxed text-ink-500">
                    {c.shortDescription}
                  </p>
                </div>
                <Icon
                  name="spark"
                  className="hidden h-6 w-6 shrink-0 text-clay-600 transition-transform duration-500 group-hover:rotate-90 sm:block"
                />
              </a>
            ))}
          </div>
        </Container>
      </Section>

      <FAQAccordion tone="ivory" />
    </>
  );
}

/* ============================================================
   LEGAL (privacy / terms)
   ============================================================ */
export function LegalPage({ kind }: { kind: "privacy" | "terms" }) {
  const isPrivacy = kind === "privacy";
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={isPrivacy ? "Privacy Policy" : "Terms & Conditions"}
        lead={
          isPrivacy
            ? "How enquiry information submitted through this website is handled."
            : "The commercial terms under which quotations, samples and orders are issued."
        }
        breadcrumb={[{ label: "Home", href: "#/" }, { label: isPrivacy ? "Privacy Policy" : "Terms & Conditions" }]}
      />
      <Section tone="ivory">
        <Container width="narrow">
          <div className="space-y-8 text-[1rem] leading-relaxed text-ink-600">
            <p className="rounded-sm border-l-2 border-turmeric-500 bg-turmeric-100/50 px-5 py-4 text-[0.9375rem] text-bark-700">
              At ATLAS GLOBAL TRADE, we value your trust and are committed to protecting your personal and business data. This Privacy Policy outlines how we collect, use, store, and protect the information you provide when visiting our website, submitting trade inquiries, or communicating with us via email or WhatsApp.
            </p>
            {(isPrivacy
              ? [
                  ["Information we collect", "We collect the information necessary to process wholesale inquiries, prepare commerical quotes, and execute export orders. This includes your name, company, email, phone number, and details of the products you are interested in."],
                  ["How information is used", "We process your information strictly for legitimate trade and customer service purposes: Generating price quotations, sending product specifications, and fulfilling sample or bulk order requests. Managing export shipping schedules, customs documentation, and order updates. Maintaining commercial relationships and answering business inquiries. Fulfilling legal, tax, and export regulatory obligations."],
                  ["Data sharing", "We never sell, rent, or trade your personal or business data. Information is shared only with necessary third parties involved in fulfilling your trade requests. Logistics & Freight Partners: Shipping lines, freight forwarders, and transportation providers required for delivery. Financial & Regulatory Bodies: Banks, customs authorities, and certified inspection agencies as required by export laws. IT Service Providers: Website hosting and secure communication tools bound by confidentiality."],
                  ["Retention", "We retain inquiry and order records for as long as necessary to support ongoing commercial relationships, maintain order history, and comply with international trade, tax, and accounting legal retention requirements."],
                  ["Your rights", "Regardless of your location (including rights under GDPR and the DPDP Act), you have the right to request access to your stored personal information, request corrections to inaccurate details, or ask for the deletion of your personal contact data from our active communication lists."],
                  ["Contact", `For any privacy-related questions or data requests, please reach out to us: Email: ${company.email}. , Phone / WhatsApp: +91-9607011491, Address: Kunal Park, B-Bldg, 1st Floor, A-Wing, Keshavnagar, Chinchwad, Pune - 411033, Maharashtra, India`],
                ]
              : [
                  ["Quotations", "Quotations issued by ATLAS GLOBAL TRADE are valid for 15 calendar days from the date of issuance unless otherwise stated in writing. Prices are quoted based on current market rates, raw material availability, and freight costs, and remain subject to final confirmation upon order placement."],
                  ["Orders and confirmation", "An order becomes contractually binding only upon our written issuance of an official Proforma Invoice (PI) or Order Confirmation. Any requests for order modifications or cancellations must be submitted in writing within 48 hours of confirmation and are subject to processing status."],
                  ["Specifications and tolerances", "As whole spices and dehydrated products are natural agricultural commodities, minor variations in moisture content, grain size, color, and volatile oils are inherent across crop harvests. Goods are supplied in accordance with agreed specifications, Certificate of Analysis (COA) parameters, and standard international agricultural tolerance limits"],
                  ["Payment terms", "Unless specified otherwise on the Proforma Invoice, our standard commercial payment terms require a 30% advance deposit via Telegraphic Transfer (T/T) upon order confirmation, with the remaining 70% balance payable against scanned copies of shipping documents (Bill of Lading). Confirmed, Irrevocable Letters of Credit (L/C at sight) from prime banks are also accepted."],
                  ["Delivery and risk", "International shipments are governed by ICC Incoterms 2020 rules (typically FOB, CFR, or CIF, as specified in the contract). Risk of loss or damage transfers to the buyer once the goods are delivered to the nominated carrier or loaded on board the vessel at the port of origin."],
                  ["Claims", "Any claims concerning quantity discrepancies or quality non-conformity must be submitted in writing within 7 calendar days of container discharge at the destination port. Claims must be accompanied by official inspection reports or accredited third-party laboratory analysis (e.g., SGS)."],
                  ["Governing law", "These terms and conditions and all commercial agreements shall be governed by and construed under the laws of India. Any disputes arising hereunder shall be subject to the exclusive jurisdiction of the competent courts in Pune, Maharashtra, India."],
                ]
            ).map(([h, b]) => (
              <div key={h}>
                <h2 className="text-[1.375rem]">{h}</h2>
                <p className="mt-3">{b}</p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Button to="#/contact" arrow>
              Talk to Our Sales Team
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
