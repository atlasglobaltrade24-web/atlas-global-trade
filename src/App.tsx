import { useEffect } from "react";
import Header, { MobileStickyCTA } from "@/components/Header";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import Products from "@/pages/Products";
import ProductDetail from "@/pages/ProductDetail";
import {
  AboutPage,
  ContactPage,
  ExportPage,
  LegalPage,
  QualityPage,
} from "@/pages/InnerPages";
import { useRoute, useScrollRestoration } from "@/lib/router";
import { Button, Container, Section } from "@/components/ui";
import { company } from "@/data/site";
import { getProductBySlug } from "@/data/products";

/* ---------------- SEO head management ---------------- */
function useSeo(path: string, segments: string[]) {
  useEffect(() => {
    const suffix = `${company.name} — Indian Whole Spices & Dehydrated Products Supplier`;
    let title = `${suffix} | Exporter`;
    let description =
      "India-based  , supplier and exporter of premium whole spices and dehydrated onion & garlic products for importers, distributors, food  s and global B2B buyers.";

    const root = segments[0] ?? "";
    if (root === "about") {
      title = `About Us — ${suffix}`;
      description =
        "Learn about our sourcing base in India, our focus on whole spices and dehydrated ingredients, and how we supply commercial buyers worldwide.";
    } else if (root === "products") {
      const sub = segments[1];
      if (sub === "whole-spices") {
        title = `Whole Spices Supplier India — Cumin, Coriander, Black Pepper | ${company.name}`;
        description =
          "Bulk whole Indian spices for B2B buyers — cumin, coriander, black pepper, turmeric, dry red chilli, cardamom, cinnamon and more. Request specifications and a quotation.";
      } else if (sub === "dehydrated") {
        title = `Dehydrated Onion & Garlic Supplier India | ${company.name}`;
        description =
          "Dehydrated onion and garlic in kibbled, flake and granule forms for food  s and ingredient buyers. Bulk supply from India.";
      } else {
        title = `Product Catalogue — Indian Spices & Dehydrated Ingredients | ${company.name}`;
        description =
          "Browse our full catalogue of Indian whole spices and dehydrated products. Filter by category, form and application, then request a B2B quotation.";
      }
    } else if (root === "product") {
      const p = getProductBySlug(segments[1] ?? "");
      if (p) {
        title = `${p.name} — Bulk Supplier & Exporter from India | ${company.name}`;
        description = p.shortDescription;
      }
    } else if (root === "quality") {
      title = `Quality & Processing — ${suffix}`;
      description =
        "Sourcing, selection, cleaning, processing, inspection, packaging and dispatch — how quality is controlled through every stage of supply.";
    } else if (root === "export") {
      title = `Export & Global Supply — Indian Spice Exporter | ${company.name}`;
      description =
        "Export packing, documentation support and shipment coordination for international buyers of Indian spices and dehydrated ingredients.";
    } else if (root === "contact") {
      title = `Request a Quote — Contact ${company.name}`;
      description =
        "Send your product, specification, quantity, packing preference and destination to receive a B2B quotation from our sales desk.";
    }

    document.title = title;

    const setMeta = (selector: string, attr: string, key: string, value: string) => {
      let el = document.head.querySelector<HTMLMetaElement>(selector);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", value);
    };

    setMeta('meta[name="description"]', "name", "description", description);
    setMeta('meta[property="og:title"]', "property", "og:title", title);
    setMeta('meta[property="og:description"]', "property", "og:description", description);
    setMeta('meta[name="twitter:title"]', "name", "twitter:title", title);
    setMeta('meta[name="twitter:description"]', "name", "twitter:description", description);
  }, [path, segments]);
}

function NotFound() {
  return (
    <Section tone="ivory" className="pt-[180px]">
      <Container width="narrow">
        <p className="eyebrow text-clay-600">404</p>
        <h1 className="mt-4 text-[2.5rem] leading-tight sm:text-[3.25rem]">
          That page has moved on
        </h1>
        <p className="mt-5 text-[1.0625rem] leading-relaxed text-ink-500">
          The link you followed does not exist on this site. Try the product catalogue, or send your
          requirement to our sales desk directly.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Button to="#/products" arrow>
            View Products
          </Button>
          <Button to="#/" variant="secondary">
            Back to Home
          </Button>
        </div>
      </Container>
    </Section>
  );
}

export default function App() {
  const { path, segments } = useRoute();
  useScrollRestoration(path);
  useSeo(path, segments);

  const root = segments[0] ?? "";

  let page: React.ReactNode;
  if (path === "/") page = <Home />;
  else if (root === "products") page = <Products />;
  else if (root === "product") page = <ProductDetail />;
  else if (root === "about") page = <AboutPage />;
  else if (root === "quality") page = <QualityPage />;
  else if (root === "export") page = <ExportPage />;
  else if (root === "contact") page = <ContactPage />;
  else if (root === "privacy") page = <LegalPage kind="privacy" />;
  else if (root === "terms") page = <LegalPage kind="terms" />;
  else page = <NotFound />;

  return (
    <div className="flex min-h-screen flex-col bg-ivory-100">
      <Header />
      <main id="main" className="flex-1">
        {page}
      </main>
      <Footer />
      <MobileStickyCTA />
    </div>
  );
}
