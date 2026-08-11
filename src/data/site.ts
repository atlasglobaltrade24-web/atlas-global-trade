/* ============================================================
   SITE CONFIGURATION — single source of truth
   Replace every [BRACKETED] placeholder with real business data.
   ============================================================ */

export const company = {
  name: "ATLAS GLOBAL TRADE",
  shortName: "ATLAS GLOBAL TRADE",
  tagline: "Trusted India-to-World spice and dehydrate supply for importers, distributors and manufacturers",
  legalName: "ATLAS GLOBAL TRADE",
  monogram: "AG", // replace with initials of the real company name
  established: "2025",
  email: "sales@atlasglobaltrade.com",
  phone: "+91-9607011491",
  whatsapp: "+91-9607011491",
  address: "KUNAL PARK, B-BLDG, 1ST FLOOR, A-WING, KESHAVNAGAR, CHINCHWAD, PUNE - 411033",
  city: "PUNE",
  state: "MAHARASHTRA",
  country: "INDIA",
  hours: "24 / 7",
  description:
    "An India-based supplier and exporter of whole spices and dehydrated ingredients, working with importers, distributors and commercial buyers in regulated markets.",
} as const;

export type NavChild = { label: string; href: string };
export type NavItem = { label: string; href: string; children?: NavChild[] };

export const navigation: NavItem[] = [
  { label: "Home", href: "#/" },
  { label: "About Us", href: "#/about" },
  {
    label: "Products",
    href: "#/products",
    children: [
      { label: "Whole Spices", href: "#/products/whole-spices" },
      { label: "Dehydrated Products", href: "#/products/dehydrated" },
      { label: "Full Product Range", href: "#/products" },
    ],
  },
  { label: "Quality & Processing", href: "#/quality" },
  { label: "Export / Global Supply", href: "#/export" },
  { label: "Brochure", href: "/brochure/atlas_global_brochure.pdf" },
  { label: "Contact Us", href: "#/contact" },
];

/* ---------------- Trust strip ---------------- */
export const trustItems = [
  { icon: "leaf", label: "Indian Origin", note: "Sourced at origin" },
  { icon: "scale", label: "Consistent Quality", note: "Batch to batch" },
  { icon: "handshake", label: "B2B Supply", note: "Commercial volumes" },
  { icon: "globe", label: "Export Ready", note: "Documentation support" },
  { icon: "box", label: "Reliable Packaging", note: "Transit protected" },
  { icon: "sliders", label: "Custom Requirements", note: "Spec driven" },
] as const;

/* ---------------- Why buyers choose us ---------------- */
export const whyChoose = [
  {
    icon: "scale",
    title: "Consistent Quality",
    body: "We work to agreed specifications and focus on batch-to-batch consistency so your production line, blend or recipe behaves the same way every shipment.",
  },
  {
    icon: "leaf",
    title: "Carefully Sourced",
    body: "Material is selected with attention to growing region, season, moisture, cleanliness and suitability for the buyer's end application.",
  },
  {
    icon: "handshake",
    title: "B2B Focused",
    body: "Our processes are built around commercial buyers — specifications, sampling, bulk quantities and repeat scheduling rather than retail-only selling.",
  },
  {
    icon: "sliders",
    title: "Flexible Supply",
    body: "Different grades, cuts, sieve sizes, quantities and packaging formats can be discussed against your requirement sheet.",
  },
  {
    icon: "ship",
    title: "Export Ready",
    body: "Export-oriented packing, coordinated dispatch and documentation support so material moves predictably from India to your warehouse.",
  },
  {
    icon: "clock",
    title: "Long-Term Partnership",
    body: "We prefer steady, repeatable business built on clear communication, honest specifications and dependable follow-through.",
  },
] as const;

/* ---------------- Quality & processing timeline ---------------- */
export const processSteps = [
  {
    id: "sourcing",
    title: "Sourcing",
    icon: "leaf",
    body: "Raw material is sourced from Indian growing regions with attention to season, variety and lot condition.",
  },
  {
    id: "selection",
    title: "Selection",
    icon: "search",
    body: "Incoming lots are assessed against the buyer's requirement before they are accepted for processing.",
  },
  {
    id: "cleaning",
    title: "Cleaning",
    icon: "wind",
    body: "Material is cleaned and graded to remove foreign matter, dust, light impurities and off-size fractions.",
  },
  {
    id: "processing",
    title: "Processing",
    icon: "gear",
    body: "Products are processed to the agreed form — whole, cut, kibbled or granulated as applicable.",
  },
  {
    id: "inspection",
    title: "Quality Inspection",
    icon: "check",
    body: "Checks are carried out through the run, with laboratory testing arranged as per the agreed parameters. ",
  },
  {
    id: "packaging",
    title: "Packaging",
    icon: "box",
    body: "Packed in the agreed format with lot identification, sealed and palletised for transit protection.",
  },
  {
    id: "dispatch",
    title: "Dispatch",
    icon: "ship",
    body: "Stuffing, documentation and shipment coordination handled with your freight forwarder or ours.",
  },
] as const;

/* ---------------- Certifications (placeholders only) ---------------- */
/* ---------------- Certifications ---------------- */
export const certifications = [
  {
    name: "GST",
    type: "Tax Registration",
    validity: "",
    body: "Goods and Services Tax registration for domestic and export compliance.",
    logo: "/images/gst-icon.svg",
  },
  {
    name: "FSSAI",
    type: "Food Safety Authority Registration",
    validity: "",
    body: "Food safety and hygiene registration issued by FSSAI for food businesses in India.",
    logo: "/images/fssai_logo.jpg",
  },
  {
    name: "RCMC",
    type: "Export Registration (RCMC)",
    validity: "",
    body: "Registration-cum-Membership Certificate issued by the relevant export promotion council.",
    logo: "/images/rcmc_logo.jpg",
  },
  {
    name: "APEDA",
    type: "Export Promotion Council",
    validity: "",
    body: "Registration with APEDA for agricultural and processed food exports support.",
    logo: "/images/APEDA.jpg",
  },
] as const;

export const exportCapabilities = [
  {
    icon: "file",
    title: "Export Documentation",
    body: "Commercial invoice, packing list, certificate of origin and product documents prepared per shipment.",
  },
  {
    icon: "box",
    title: "Commercial Packing",
    body: "Bulk and secondary packing selected for sea, air or road transit and destination handling.",
  },
  {
    icon: "ship",
    title: "Shipment Coordination",
    body: "Container stuffing, booking and dispatch coordination with nominated or in-house freight partners.",
  },
  {
    icon: "search",
    title: "Pre-Shipment Checks",
    body: "Agreed pre-shipment inspection and sampling arrangements before material leaves India.",
  },
] as const;

export const exportRegions = [
  {
    name: "Middle East",
    description: "Preferred routing for GCC importers through Jebel Ali, Dammam and Salalah with strong documentation support.",
  },
  {
    name: "Southeast Asia",
    description: "Freight-ready consignments for Singapore, Malaysia, Thailand and the broader ASEAN market.",
  },
  {
    name: "Europe",
    description: "Customs-compliant export packing and origin documentation for ports such as Rotterdam and Antwerp.",
  },
  {
    name: "Americas",
    description: "FSMA-aware export supply for North and South America, tailored to buyer-specific quality and paperwork requirements.",
  },
] as const;

/* ---------------- Packaging formats (placeholders) ---------------- */
export const packagingFormats = [
  {
    name: "PP Woven Bags",
    body: "[Add PP bag weights, stitching and inner liner options.]",
    spec: "[PACKAGING TYPE]",
  },
  {
    name: "Custom Packaging",
    body: "[Add customisation possibilities against buyer drawing or spec.]",
    spec: "[PACKAGING TYPE]",
  },
  {
    name: "Private Label",
    body: "[Add private-label / buyer-branded packing capability where offered.]",
    spec: "[PACKAGING TYPE]",
  },
] as const;

/* ---------------- Industries served ---------------- */
export const industries = [
  {
    title: "Food Manufacturing",
    body: "Ingredient supply for processed foods, sauces, ready meals and snack production lines.",
  },
  {
    title: "Spice Blending",
    body: "Base material for masala houses, seasoning blenders and private blend developers.",
  },
  {
    title: "Restaurants & Hotels",
    body: "Consistent kitchen-grade material for multi-outlet culinary operations.",
  },
  {
    title: "Restaurant Groups",
    body: "Standardised specifications that keep taste identical across every outlet.",
  },
  {
    title: "Catering & Institutional",
    body: "Large-format packing for high-volume kitchens and institutional catering.",
  },
  {
    title: "Retail & Private Label",
    body: "Bulk supply for repackers and buyer-branded retail programmes.",
  },
  {
    title: "Ingredient Processing",
    body: "Feedstock for grinding, extraction, dehydration and further processing units.",
  },
  {
    title: "Importers & Distributors",
    body: "Container-load supply for stockists serving regional food trade.",
  },
] as const;

/* ---------------- Why buy from India ---------------- */
export const whyIndia = [
  {
    stat: "Agro-diversity",
    title: "A wide agricultural base",
    body: "India's varied climate zones support a broad range of spice crops, from seed spices in the west to tree spices in the south.",
  },
  {
    stat: "Regional depth",
    title: "Established growing regions",
    body: "Specific spices are concentrated in well-known regions, which supports selection by origin, variety and season.",
  },
  {
    stat: "Know-how",
    title: "Deep processing expertise",
    body: "Cleaning, grading, sortex, dehydration and grinding capability has developed around these growing clusters over decades.",
  },
  {
    stat: "Recognition",
    title: "Global familiarity",
    body: "Indian spices are widely used and widely specified by international food buyers, which simplifies commercial discussion.",
  },
  {
    stat: "Range",
    title: "Product variety in one country",
    body: "Buyers can consolidate several spice and dehydrated lines from a single sourcing base instead of many.",
  },
  {
    stat: "Logistics",
    title: "An established export ecosystem",
    body: "Ports, freight services, testing laboratories and documentation practices are well developed for food exports.",
  },
] as const;

/* ---------------- Testimonials (PLACEHOLDER — replace) ---------------- */
export const testimonials = [
  {
    quote:
      "[Placeholder testimonial. Replace this with an approved quote from a real customer describing quality consistency, communication and delivery reliability.]",
    name: "[CUSTOMER NAME]",
    role: "[DESIGNATION]",
    companyName: "[COMPANY]",
    country: "[COUNTRY]",
    industry: "[INDUSTRY]",
  },
  {
    quote:
      "[Placeholder testimonial. Replace this with an approved quote from a real importer or distributor describing the sourcing and documentation experience.]",
    name: "[CUSTOMER NAME]",
    role: "[DESIGNATION]",
    companyName: "[COMPANY]",
    country: "[COUNTRY]",
    industry: "[INDUSTRY]",
  },
  {
    quote:
      "[Placeholder testimonial. Replace this with an approved quote from a food   describing specification adherence and repeat supply.]",
    name: "[CUSTOMER NAME]",
    role: "[DESIGNATION]",
    companyName: "[COMPANY]",
    country: "[COUNTRY]",
    industry: "[INDUSTRY]",
  },
] as const;

/* ---------------- FAQ ---------------- */
export const faqs = [
  {
    q: "What whole spices do you supply?",
    a: "Our whole spice range includes Turmeric, Black Pepper, Cardamom, Cinnamon, Coriander, Cloves, Cumin, Saffron, Nutmeg and Red Chilli.",
  },
  {
    q: "What dehydrated products do you offer?",
    a: "Dehydrated onion and garlic in kibbled, flake, granule and minced forms, plus other dehydrated vegetable lines on request. Cut sizes and mesh specifications are agreed before production.",
  },
  {
    q: "Do you supply in bulk?",
    a: "Yes. We are set up for commercial and container-load supply to importers, distributors, and large kitchens rather than retail-only quantities. Indicative volumes can be discussed once the product and destination are known.",
  },
  {
    q: "What packaging options are available?",
    a: "PP woven bags, custom packing and private-label formats can be discussed depending on the product, quantity and transit route.",
  },
  {
    q: "Can you provide product specifications?",
    a: "Yes. A product specification sheet covering physical, quality and packing parameters can be shared for each item on request, and we can also review and quote against your own specification.",
  },
  {
    q: "What is the minimum order quantity?",
    a: "MOQ depends on the product, the packing format and the destination. Please share your requirement and we will confirm the applicable minimum.",
  },
  {
    q: "Do you support export orders?",
    a: "Yes. We work with international buyers and support export packing, documentation and shipment coordination. ",
  },
  {
    q: "Can buyers request samples?",
    a: "Samples can generally be arranged so your team can evaluate the material before committing to a commercial order. Sample size, cost and courier terms are confirmed case by case.",
  },
  {
    q: "Do you support custom packaging or private label?",
    a: "Custom pack sizes and buyer-branded packing can be discussed subject to the product, artwork and order quantity.",
  },
  {
    q: "How do I request a quotation?",
    a: "Use the enquiry form on this website, or contact us directly by email, phone or WhatsApp. Sharing the product, grade or specification, quantity, packing preference and destination port helps us quote accurately and quickly.",
  },
] as const;

/* ---------------- About key points ---------------- */
export const aboutPoints = [
  {
    title: "Sourced at origin in India",
    body: "We buy close to the growing regions so lot selection, season and variety can actually be controlled — not assumed.",
  },
  {
    title: "Two focused product lines",
    body: "Whole spices and dehydrated ingredients. A narrow focus lets us go deeper on grades, cuts and consistency.",
  },
  {
    title: "Built for commercial buyers",
    body: "Specification-led supply for importers, distributors, hotel groups and large kitchens.",
  },
  {
    title: "Relationships over transactions",
    body: "We would rather be a dependable long-term supplier than a one-shipment vendor.",
  },
] as const;

export const stats = [
  { value: 2, suffix: "", label: "Focused product lines" },
  { value: 23, suffix: "+", label: "Catalogue items" },
  { value: 100, suffix: "%", label: "Specification-led enquiries" },
  { value: 7, suffix: "", label: "Quality control stages" },
] as const;
