import {
  AboutSection,
  CategorySection,
  FAQAccordion,
  FeaturedProducts,
  GlobalSupply,
  Hero,
  IndustriesSection,
  ProcessTimeline,
  ProductMarquee,
  StatsBand,
  TestimonialCarousel,
  TrustStrip,
  WhyChooseUs,
  WhyIndiaSection,
} from "@/components/sections";
import { Container, Section, SectionHeading, Button } from "@/components/ui";
import QuoteForm from "@/components/QuoteForm";
import ContactChannels from "@/components/ContactChannels";

export default function Home() {
  return (
    <>
      <Hero />
      <ProductMarquee />
      <TrustStrip />
      <AboutSection />
      <StatsBand />
      <WhyChooseUs />
      <CategorySection />
      <FeaturedProducts />
      <ProcessTimeline />
      <GlobalSupply />
      <IndustriesSection />
      <WhyIndiaSection />
      <TestimonialCarousel />
      <FAQAccordion />

      <Section tone="white" id="quote">
        <Container width="wide">
          <SectionHeading
            eyebrow="Request a Quote"
            title="Start a conversation with our sales desk"
            lead="Tell us the product, specification, quantity and destination. We will reply with commercial terms, packing options and next steps."
          />
          <div className="mt-14 grid gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <QuoteForm />
            </div>
            <div className="lg:col-span-5">
              <ContactChannels />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
