/* ============================================================
   PRODUCT DATA ARCHITECTURE
   ------------------------------------------------------------
   All catalogue content lives here. UI components never hard-code
   product information — add, remove or edit entries below and the
   listing pages, filters, detail pages and homepage update
   automatically.

   Every value written as [LIKE THIS] is an editable placeholder
   that must be replaced with real, verified business information.
   ============================================================ */

export type CategoryId = "whole-spices" | "dehydrated";

export interface Category {
  id: CategoryId;
  name: string;
  slug: string;
  shortDescription: string;
  description: string;
  image: string;
  fallbackImage: string;
  accent: "forest" | "clay";
}

export interface SpecRow {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  badgeLabel?: string;
  slug: string;
  category: CategoryId;
  image: string;
  imageAlt: string;
  shortDescription: string;
  description: string;
  forms: string[];
  specifications: SpecRow[];
  packaging: string[];
  applications: string[];
  origin: string;
  moq: string;
  shelfLife: string;
  storage: string;
  qualityParameters: SpecRow[];
  featured: boolean;
  tags: string[];
  hsCode?: string;
  highlightSpec?: string;
  highlightPacking?: string;
}

/* ------------------------------------------------------------
   Categories
   ------------------------------------------------------------ */
export const categories: Category[] = [
  {
    id: "whole-spices",
    name: "Whole Spices",
    slug: "whole-spices",
    shortDescription:
      "Whole Indian spices selected for aroma, flavour, appearance and commercial consistency.",
    description:
      "Seed spices and tree spices sourced from Indian growing regions, cleaned and graded for commercial use. Grades, purity levels, sieve sizes and moisture targets are agreed against the buyer's specification before production.",
    image: "images/cat-whole-spices.jpg",
    fallbackImage:
      "https://images.pexels.com/photos/15318488/pexels-photo-15318488.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400",
    accent: "forest",
  },
  {
    id: "dehydrated",
    name: "Dehydrated Products",
    slug: "dehydrated",
    shortDescription:
      "Carefully processed dehydrated ingredients designed for food  s, commercial kitchens and ingredient buyers.",
    description:
      "Dehydrated onion and garlic in kibbled, flake, granule and minced forms, plus other dehydrated vegetable lines on request. Cut size, mesh, colour and moisture parameters are confirmed before each production run.",
    image: "images/cat-dehydrated.jpg",
    fallbackImage:
      "https://images.pexels.com/photos/4197436/pexels-photo-4197436.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400",
    accent: "clay",
  },
];

/* Shared placeholder blocks — edit once, applies to all products */
const px = (id: number, file = "pexels-photo") =>
  `https://images.pexels.com/photos/${id}/${file}-${id}.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=800`;

const defaultSpecs: SpecRow[] = [
  { label: "Grade", value: "[Add grade]" },
  { label: "Purity", value: "[Add purity %]" },
  { label: "Moisture", value: "[Add moisture %]" },
  { label: "Admixture", value: "[Add admixture %]" },
  { label: "Foreign Matter", value: "[Add limit]" },
  { label: "Colour", value: "[Add colour description]" },
];

const defaultQuality: SpecRow[] = [
  { label: "Physical Parameters", value: "[Add physical parameters]" },
  { label: "Chemical Parameters", value: "[Add chemical parameters]" },
  { label: "Microbiological", value: "[Add micro limits]" },
  { label: "Pesticide Residue", value: "[Add residue standard followed]" },
  { label: "Testing", value: "[Add testing arrangement]" },
];

const defaultPackaging = [
  "[PACKAGING TYPE] — PP woven bags",
  "[PACKAGING TYPE] — custom / private label",
];

const base = {
  origin: "India — [ADD SOURCING REGION]",
  moq: "[ADD MOQ]",
  shelfLife: "[ADD SHELF LIFE]",
  storage: "Store in a cool, dry, well-ventilated place away from direct sunlight and strong odours. [ADD STORAGE CONDITIONS]",
  specifications: defaultSpecs,
  qualityParameters: defaultQuality,
  packaging: defaultPackaging,
  hsCode: undefined,
  highlightSpec: undefined,
  highlightPacking: undefined,
};

/* ------------------------------------------------------------
   Products
   Add / remove entries freely — everything else is derived.
   ------------------------------------------------------------ */
export const products: Product[] = [
  /* ---------------- WHOLE SPICES ---------------- */
  {
    ...base,
    id: "black-pepper-whole-spice",
    name: "Black Pepper Whole Spice",
    badgeLabel: "Black Pepper",
    slug: "black-pepper-whole-spice",
    category: "whole-spices",
    image: "images/black_pepper_whole_spice.jpeg",
    imageAlt: "Whole black pepper spice sourced for bulk export",
    shortDescription: "Premium whole black pepper with a strong aromatic profile and clean appearance.",
    description:
      "Whole black pepper is supplied in clean, export-ready lots for food processors, spice blenders and retail packing operations.",
    forms: ["Whole Berries", "Machine Clean"],
    applications: ["Spice Blending", "Food Manufacturing", "Retail Packing"],
    featured: true,
    tags: ["whole spice", "black pepper", "export"],
  },
  {
    ...base,
    id: "cinnamon-whole-spice",
    name: "Cinnamon Whole Spice",
    badgeLabel: "Cinnamon",
    slug: "cinnamon-whole-spice",
    category: "whole-spices",
    image: "images/cinnamon_whole_spice.jpeg",
    imageAlt: "Whole cinnamon spice for culinary and blending applications",
    shortDescription: "Aromatic cinnamon quills and bark selected for flavour and appearance.",
    description:
      "Cinnamon is supplied as whole quills and bark cuts for use in premium spice blends, bakery, beverage and food manufacturing.",
    forms: ["Quills", "Cut Lengths"],
    applications: ["Bakery", "Beverage", "Spice Blending"],
    featured: true,
    tags: ["whole spice", "cinnamon", "aromatic"],
  },
  {
    ...base,
    id: "cloves-whole-spice",
    name: "Cloves Whole Spice",
    badgeLabel: "Cloves",
    slug: "cloves-whole-spice",
    category: "whole-spices",
    image: "images/cloves_whole_spice.jpeg",
    imageAlt: "Whole cloves ready for bulk spice supply",
    shortDescription: "Whole cloves selected for aroma, colour and clean head-to-stem ratio.",
    description:
      "Cloves are made available in whole form for seasoning blends, food processing, beverage applications and export packing.",
    forms: ["Whole Cloves"],
    applications: ["Food Manufacturing", "Spice Blending", "Beverage"],
    featured: false,
    tags: ["whole spice", "cloves", "aromatic"],
  },
  {
    ...base,
    id: "cumin-seeds-whole-spice",
    name: "Cumin Seeds Whole Spice",
    badgeLabel: "Cumin",
    slug: "cumin-seeds-whole-spice",
    category: "whole-spices",
    image: "images/cumin_seeds_whole_spice.jpeg",
    imageAlt: "Whole cumin seeds ready for bulk spice supply",
    shortDescription: "Clean cumin seed chosen for earthy aroma and consistent size.",
    description:
      "Cumin seeds are supplied as premium whole spice for culinary use, grinding, blending and large-scale food production.",
    forms: ["Whole Seeds", "Machine Clean"],
    applications: ["Spice Blending", "Food Manufacturing", "Grinding Units"],
    featured: true,
    tags: ["whole spice", "cumin", "seed spice"],
  },
  {
    ...base,
    id: "cumin-whole-spice",
    name: "Cumin Whole Spice",
    badgeLabel: "Cumin",
    slug: "cumin-whole-spice",
    category: "whole-spices",
    image: "images/cumin_whole_spice.jpeg",
    imageAlt: "Whole cumin spice presented for export and trade",
    shortDescription: "Whole cumin in clean, consistent lots suited to industrial and culinary uses.",
    description:
      "This whole spice product is selected for uniform size, aroma retention and reliable performance in blends and direct application.",
    forms: ["Whole Spice"],
    applications: ["Spice Blending", "Food Manufacturing"],
    featured: false,
    tags: ["whole spice", "cumin"],
  },
  {
    ...base,
    id: "elaichi-whole-spice",
    name: "Elaichi Whole Spice",
    badgeLabel: "Green Cardamom",
    slug: "elaichi-whole-spice",
    category: "whole-spices",
    image: "images/elaichi_whole_spice.jpeg",
    imageAlt: "Whole cardamom spice for premium culinary and blending use",
    shortDescription: "Aromatic whole cardamom pods suited to premium spice and food applications.",
    description:
      "Whole cardamom is chosen for colour, pod condition and fragrance, offering premium character for specialty blends and culinary products.",
    forms: ["Whole Pods"],
    applications: ["Premium Blending", "Bakery", "Beverage"],
    featured: false,
    tags: ["whole spice", "cardamom", "premium"],
  },
  {
    ...base,
    id: "nut-meg-whole-spice",
    name: "Nut Meg Whole Spice",
    badgeLabel: "Nut Meg",
    slug: "nut-meg-whole-spice",
    category: "whole-spices",
    image: "images/nut_meg_whole_spice.jpeg",
    imageAlt: "Whole nutmeg spice suitable for bulk trade",
    shortDescription: "Whole nutmeg sourced for flavour, quality and reliable grading.",
    description:
      "Nutmeg is supplied in whole form for premium spice houses, bakery, confectionery and food ingredient buyers.",
    forms: ["Whole Nutmeg"],
    applications: ["Bakery", "Confectionery", "Spice Blending"],
    featured: false,
    tags: ["whole spice", "nutmeg", "premium"],
  },
  {
    ...base,
    id: "red-chili-whole-spice",
    name: "Red Chili Whole Spice",
    badgeLabel: "Dry Red Chilli",
    slug: "red-chili-whole-spice",
    category: "whole-spices",
    image: "images/red_chili_whole_spice.jpeg",
    imageAlt: "Whole dried red chili spice for export and bulk supply",
    shortDescription: "Whole red chilli selected for colour, heat and clean lot presentation.",
    description:
      "Dried red chilli is supplied as whole spice for seasoning, ingredient processing and culinary applications where a clean, visible product is preferred.",
    forms: ["Whole Chilli"],
    applications: ["Food Manufacturing", "Sauce Production", "Spice Blending"],
    featured: true,
    tags: ["whole spice", "chili", "seasoning"],
  },
  {
    ...base,
    id: "saffron-whole-spice",
    name: "Saffron Whole Spice",
    badgeLabel: "Saffron",
    slug: "saffron-whole-spice",
    category: "whole-spices",
    image: "images/saffron_whole_spice.jpeg",
    imageAlt: "Whole saffron spice for premium export and retail use",
    shortDescription: "Premium saffron offered as a high-value whole spice for specialty markets.",
    description:
      "Saffron is handled with care and supplied as a premium whole spice for food, beverage and luxury product formulations.",
    forms: ["Whole Saffron"],
    applications: ["Premium Food", "Beverage", "Retail"],
    featured: false,
    tags: ["whole spice", "saffron", "premium"],
  },
  {
    ...base,
    id: "turmeric-whole-spice",
    name: "Turmeric Whole Spice",
    badgeLabel: "Turmeric",
    slug: "turmeric-whole-spice",
    category: "whole-spices",
    image: "images/turmeric_whole_spice.jpeg",
    imageAlt: "Whole turmeric spice for trade and processing",
    shortDescription: "Whole turmeric supplied for colour, aroma and further processing needs.",
    description:
      "Turmeric is supplied as whole spice in export-ready lots for blending, grinding and food ingredient use.",
    forms: ["Whole Turmeric"],
    applications: ["Food Manufacturing", "Grinding Units", "Spice Blending"],
    featured: true,
    tags: ["whole spice", "turmeric", "bulk"],
  },

  /* ---------------- DEHYDRATED PRODUCTS ---------------- */
  {
    ...base,
    id: "garlic-dehydrated-products",
    name: "Garlic Dehydrated Products",
    badgeLabel: "Dehydrated Garlic",
    slug: "garlic-dehydrated-products",
    category: "dehydrated",
    image: "images/garlic_whole_spice.jpeg",
    imageAlt: "Garlic dehydrated product image for bulk ingredient supply",
    shortDescription: "Dehydrated garlic product supplied for seasoning and food processing needs.",
    description:
      "Dehydrated garlic is used in dry mixes, seasonings, soups and ready-to-eat foods where consistency and shelf life matter.",
    forms: ["Dehydrated Garlic"],
    applications: ["Food Manufacturing", "Seasoning Blends", "Instant Foods"],
    featured: true,
    tags: ["dehydrated", "garlic", "ingredient"],
  },
  {
    ...base,
    id: "onion-dehydrated-products",
    name: "Onion Dehydrated Products",
    badgeLabel: "Dehydrated Onion",
    slug: "onion-dehydrated-products",
    category: "dehydrated",
    image: "images/onion_whole_spice.jpeg",
    imageAlt: "Onion dehydrated product image for bulk ingredient supply",
    shortDescription: "Dehydrated onion offered for ready-use food ingredients and dry blends.",
    description:
      "Dehydrated onion supports soup, seasoning, marinade and processed food applications with lower moisture and longer shelf life.",
    forms: ["Dehydrated Onion"],
    applications: ["Food Manufacturing", "Seasoning Blends", "Soup Production"],
    featured: true,
    tags: ["dehydrated", "onion", "ingredient"],
  },
];

/* ------------------------------------------------------------
   Derived helpers
   ------------------------------------------------------------ */
export const getCategory = (id: CategoryId) => categories.find((c) => c.id === id)!;

export const getProductBySlug = (slug: string) => products.find((p) => p.slug === slug);

export const productsByCategory = (id: CategoryId) => products.filter((p) => p.category === id);

export const featuredProducts = products.filter((p) => p.featured);

export const allForms = Array.from(
  new Set(
    products.flatMap((p) => p.forms.filter((f) => !f.startsWith("["))).map((f) => f.trim()),
  ),
).sort();

export const allApplications = Array.from(
  new Set(products.flatMap((p) => p.applications)),
).sort();

export const countByCategory = (id: CategoryId) => productsByCategory(id).length;
