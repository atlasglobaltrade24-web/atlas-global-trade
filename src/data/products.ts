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
    id: "ws-cumin",
    name: "Cumin Seeds",
    slug: "cumin-seeds",
    category: "whole-spices",
    image: px(37568646),
    imageAlt: "Whole Indian cumin seeds for bulk supply and export",
    shortDescription:
      "Machine-cleaned cumin seed with a warm, earthy aroma — a core seed spice for blenders and  s.",
    description:
      "Cumin (jeera) is one of the highest-volume seed spices moving out of India. We supply machine-cleaned and sortex-grade cumin selected for aroma strength, uniform seed length and low admixture, suitable for grinding, blending and direct culinary use.",
    forms: ["Whole", "Sortex Clean", "Machine Clean", "[ADD FORM]"],
    applications: ["Spice Blending", "Food Manufacturing", "Grinding Units", "Commercial Kitchens"],
    featured: true,
    hsCode: "090931",
    highlightSpec: "Moisture 8-9% max, Purity 99% Sortex",
    highlightPacking: "25kg/50kg PP Woven Bags",
    tags: ["seed spice", "sortex", "bulk", "export"],
  },
  {
    ...base,
    id: "ws-coriander",
    name: "Coriander Seeds",
    slug: "coriander-seeds",
    category: "whole-spices",
    image: px(7283473),
    imageAlt: "Whole coriander seeds sourced from Indian growing regions",
    shortDescription:
      "Round and split coriander seed with a mild citrus-sweet profile, widely used as a blend base.",
    description:
      "Coriander seed is a volume base material in masala and seasoning formulations. Lots are selected on colour, size uniformity and cleanliness, and can be supplied as whole seed or against a defined sieve specification.",
    forms: ["Whole (Eagle)", "Whole (Scooter)", "Split", "[ADD FORM]"],
    applications: ["Spice Blending", "Food Manufacturing", "Retail Repacking", "Ingredient Processing"],
    featured: true,
    hsCode: "090921",
    highlightSpec: "Moisture 9% max, Purity 99% Machine Cleaned",
    highlightPacking: "25kg PP/Paper Bags",
    tags: ["seed spice", "blend base", "bulk"],
  },
  {
    ...base,
    id: "ws-black-pepper",
    name: "Black Pepper",
    slug: "black-pepper",
    category: "whole-spices",
    image: px(8559086),
    imageAlt: "Whole black peppercorns close up for B2B spice supply",
    shortDescription:
      "Whole black peppercorns graded on bulk density and appearance for consistent commercial use.",
    description:
      "Black pepper is graded largely on density, size and cleanliness. We can discuss the grade that fits your application, whether that is table-grade whole pepper, grinding material or blend input.",
    forms: ["Whole Berries", "Garbled", "Ungarbled", "[ADD FORM]"],
    applications: ["Food Manufacturing", "Restaurants & Hotels", "Spice Blending", "Retail & Private Label"],
    featured: true,
    hsCode: "090411",
    highlightSpec: "Moisture 12% max, Bulk Density 500-550g/l",
    highlightPacking: "25kg Paper/PP Bags",
    tags: ["tree spice", "premium", "export"],
  },
  {
    ...base,
    id: "ws-turmeric",
    name: "Turmeric Fingers",
    slug: "turmeric-fingers",
    category: "whole-spices",
    image: px(14163204),
    imageAlt: "Dried turmeric fingers in a wooden bowl",
    shortDescription:
      "Dried turmeric fingers and bulbs selected on colour and curcumin expectation for grinding.",
    description:
      "Turmeric is usually specified on curcumin content and colour. We supply dried fingers and bulbs from Indian turmeric belts, with the variety and target parameters agreed before purchase.",
    forms: ["Fingers", "Bulbs", "Polished", "[ADD FORM]"],
    applications: ["Ingredient Processing", "Spice Blending", "Food Manufacturing", "Extraction Units"],
    featured: true,
    hsCode: "091030",
    highlightSpec: "Moisture 10% max, Curcumin 2-5%",
    highlightPacking: "25kg/50kg Jute/PP Bags",
    tags: ["rhizome", "colour", "grinding"],
  },
  {
    ...base,
    id: "ws-red-chilli",
    name: "Dry Red Chilli",
    slug: "dry-red-chilli",
    category: "whole-spices",
    image: px(32446431),
    imageAlt: "Dried whole red chillies for bulk spice export from India",
    shortDescription:
      "Whole dry red chilli across heat and colour profiles, with or without stem as required.",
    description:
      "Chilli is selected on variety, colour value, heat level and stem condition. Because requirements differ so widely between markets, we prefer to work from your target colour and pungency parameters.",
    forms: ["Whole with Stem", "Stemless", "Crushed", "[ADD FORM]"],
    applications: ["Spice Blending", "Food Manufacturing", "Sauce & Condiment", "Retail & Private Label"],
    featured: true,
    hsCode: "090421",
    highlightSpec: "Moisture 10% max, Color/Heat as per grade",
    highlightPacking: "10kg/25kg PP/Jute Bags",
    tags: ["chilli", "colour value", "pungency"],
  },
  {
    ...base,
    id: "ws-fennel",
    name: "Fennel Seeds",
    slug: "fennel-seeds",
    category: "whole-spices",
    image: px(5623163),
    imageAlt: "Whole fennel seeds spread on a dark surface",
    shortDescription:
      "Green fennel seed with a clean sweet-anise character, graded for colour and uniformity.",
    description:
      "Fennel is valued for its colour retention and sweet aromatic profile. Supply can be discussed as standard commercial grade or as a selected green grade depending on the end use.",
    forms: ["Whole", "Sortex Clean", "Polished", "[ADD FORM]"],
    applications: ["Spice Blending", "Confectionery & Mouth Freshener", "Food Manufacturing", "Retail Repacking"],
    featured: false,
    tags: ["seed spice", "aromatic"],
  },
  {
    ...base,
    id: "ws-fenugreek",
    name: "Fenugreek Seeds",
    slug: "fenugreek-seeds",
    category: "whole-spices",
    image: px(35156984),
    imageAlt: "Golden fenugreek seeds in a glass jar",
    shortDescription:
      "Hard, uniform fenugreek seed used in blends, pickles and ingredient processing.",
    description:
      "Fenugreek (methi) seed is supplied cleaned and graded, with attention to colour uniformity and freedom from broken or discoloured seed.",
    forms: ["Whole", "Sortex Clean", "[ADD FORM]"],
    applications: ["Spice Blending", "Pickle Manufacturing", "Ingredient Processing", "Food Manufacturing"],
    featured: false,
    tags: ["seed spice", "blend base"],
  },
  {
    ...base,
    id: "ws-mustard",
    name: "Mustard Seeds",
    slug: "mustard-seeds",
    category: "whole-spices",
    image: px(38615155),
    imageAlt: "Mustard seeds arranged with other cooking ingredients",
    shortDescription:
      "Black, brown and yellow mustard seed for tempering, pickling and condiment production.",
    description:
      "Mustard seed is supplied by variety and sieve size. Oil content and pungency expectations should be shared upfront so the right lot is selected.",
    forms: ["Black", "Brown", "Yellow", "[ADD FORM]"],
    applications: ["Condiment Manufacturing", "Pickle Manufacturing", "Spice Blending", "Commercial Kitchens"],
    featured: false,
    tags: ["seed spice", "condiment"],
  },
  {
    ...base,
    id: "ws-cardamom",
    name: "Green Cardamom",
    slug: "green-cardamom",
    category: "whole-spices",
    image: px(15318488),
    imageAlt: "Green cardamom pods with other Indian whole spices",
    shortDescription:
      "Green cardamom pods graded on size, colour and aroma retention.",
    description:
      "Cardamom is graded on pod size and colour. Given the value of the material, we recommend confirming grade, bold count and packing before committing to volume.",
    forms: ["Whole Pods", "Bold", "Superior", "[ADD FORM]"],
    applications: ["Premium Blending", "Beverage & Bakery", "Hotels & Fine Dining", "Retail & Private Label"],
    featured: false,
    tags: ["tree spice", "premium", "aromatic"],
  },
  {
    ...base,
    id: "ws-cinnamon",
    name: "Cinnamon / Cassia",
    slug: "cinnamon-cassia",
    category: "whole-spices",
    image: px(7829483),
    imageAlt: "Whole cinnamon quills and other tree spices on a wooden board",
    shortDescription:
      "Cinnamon quills and cassia bark supplied in cut lengths or as whole quills.",
    description:
      "Supplied as quills, split or cut lengths depending on whether the material is destined for grinding, infusion or visible culinary use.",
    forms: ["Quills", "Split", "Cut Lengths", "[ADD FORM]"],
    applications: ["Spice Blending", "Bakery & Beverage", "Food Manufacturing", "Hotels & Restaurants"],
    featured: false,
    tags: ["tree spice", "bark"],
  },
  {
    ...base,
    id: "ws-cloves",
    name: "Cloves",
    slug: "cloves",
    category: "whole-spices",
    image: px(31280796),
    imageAlt: "Whole cloves and Indian spices in bowls",
    shortDescription:
      "Whole cloves selected on head condition, oil character and freedom from stem.",
    description:
      "Cloves are selected on head-to-stem ratio, colour and aroma. Handpicked and machine-cleaned options can both be discussed.",
    forms: ["Whole (Handpicked)", "Whole (Machine Clean)", "[ADD FORM]"],
    applications: ["Spice Blending", "Food Manufacturing", "Beverage", "Retail & Private Label"],
    featured: false,
    tags: ["tree spice", "aromatic"],
  },
  {
    ...base,
    id: "ws-star-anise",
    name: "Star Anise",
    slug: "star-anise",
    category: "whole-spices",
    image: px(36745315),
    imageAlt: "Whole star anise on a dark surface",
    shortDescription:
      "Whole star anise with intact points, plus broken grade for grinding applications.",
    description:
      "Star anise is supplied as whole stars where appearance matters, or as broken/pieces grade where the material will be ground or infused.",
    forms: ["Whole Stars", "Broken / Pieces", "[ADD FORM]"],
    applications: ["Spice Blending", "Broth & Stock Manufacturing", "Beverage", "Hotels & Restaurants"],
    featured: false,
    tags: ["tree spice", "aromatic"],
  },
  {
    ...base,
    id: "ws-nigella",
    name: "Nigella Seeds",
    slug: "nigella-seeds",
    category: "whole-spices",
    image: px(35156986),
    imageAlt: "Black nigella seeds viewed from above in a glass jar",
    shortDescription:
      "Nigella (kalonji) seed cleaned for bakery topping and blend applications.",
    description:
      "Nigella seed is supplied cleaned and graded, commonly used as a bakery topping, in pickle masalas and in regional seasoning blends.",
    forms: ["Whole", "Sortex Clean", "[ADD FORM]"],
    applications: ["Bakery", "Spice Blending", "Pickle Manufacturing", "Retail Repacking"],
    featured: false,
    tags: ["seed spice", "bakery"],
  },
  {
    ...base,
    id: "ws-sesame",
    name: "Sesame Seeds",
    slug: "sesame-seeds",
    category: "whole-spices",
    image: px(9974499),
    imageAlt: "Close up of whole seeds and spice material",
    shortDescription:
      "Natural and hulled sesame seed graded on purity, colour and oil content expectation.",
    description:
      "Sesame is specified on purity, admixture, colour and sometimes oil content. Both natural and hulled material can be discussed depending on the application.",
    forms: ["Natural White", "Hulled", "Black", "[ADD FORM]"],
    applications: ["Bakery", "Confectionery", "Food Manufacturing", "Oil Extraction"],
    featured: false,
    tags: ["seed", "bakery", "export"],
  },
  {
    ...base,
    id: "ws-mace",
    name: "Mace",
    slug: "mace",
    category: "whole-spices",
    image: px(32144887),
    imageAlt: "Mace and mixed Indian whole spices arranged from above",
    shortDescription:
      "Whole mace blades with attention to colour and blade integrity.",
    description:
      "Mace (javitri) is a high-value aromatic supplied as whole blades or broken grade. Colour and blade condition are the main commercial variables.",
    forms: ["Whole Blades", "Broken", "[ADD FORM]"],
    applications: ["Premium Blending", "Food Manufacturing", "Hotels & Fine Dining", "Ingredient Processing"],
    featured: false,
    tags: ["tree spice", "premium"],
  },
  {
    ...base,
    id: "ws-nutmeg",
    name: "Nutmeg",
    slug: "nutmeg",
    category: "whole-spices",
    image: px(4871133),
    imageAlt: "Whole nutmeg with assorted spices and herbs",
    shortDescription:
      "Whole nutmeg, with or without shell, graded on count per kilogram.",
    description:
      "Nutmeg is normally traded on count per kilogram and shell condition. Confirm your preferred count band and we will select accordingly.",
    forms: ["Without Shell", "With Shell", "Broken", "[ADD FORM]"],
    applications: ["Spice Blending", "Bakery", "Food Manufacturing", "Retail & Private Label"],
    featured: false,
    tags: ["tree spice", "premium"],
  },

  /* ---------------- DEHYDRATED PRODUCTS ---------------- */
  {
    ...base,
    id: "dh-onion-kibbled",
    name: "Dehydrated White Onion — Kibbled",
    slug: "dehydrated-white-onion-kibbled",
    category: "dehydrated",
    image: px(4197448),
    imageAlt: "White onions used for dehydrated kibbled onion production",
    shortDescription:
      "Kibbled white onion cut to a defined size band for soups, seasonings and dry blends.",
    description:
      "Kibbled dehydrated onion delivers onion character without the moisture, handling and shelf-life issues of fresh material. Cut size, colour and moisture are set against your specification.",
    forms: ["Kibbled", "Chopped", "Minced", "[ADD FORM]"],
    applications: ["Food Manufacturing", "Soup & Seasoning", "Hotels & Restaurants", "Catering"],
    featured: true,
    hsCode: "071220",
    highlightSpec: "Moisture 6% max, Size 8-15mm",
    highlightPacking: "14kg/20kg Cartons",
    tags: ["dehydrated", "onion", "kibbled"],
  },
  {
    ...base,
    id: "dh-onion-flakes",
    name: "Dehydrated Onion Flakes",
    slug: "dehydrated-onion-flakes",
    category: "dehydrated",
    image: px(4197440),
    imageAlt: "Onion and garlic in bowls representing dehydrated onion flakes",
    shortDescription:
      "Onion flakes with consistent flake size and controlled moisture for dry mixes.",
    description:
      "Flake material is commonly used where visible onion pieces are needed in the finished product. Flake dimensions and colour band are agreed before production.",
    forms: ["Flakes", "Large Flakes", "[ADD FORM]"],
    applications: ["Dry Mix Manufacturing", "Instant Foods", "Retail & Private Label", "Catering"],
    featured: true,
    hsCode: "071220",
    highlightSpec: "Moisture 6% max, A-Grade",
    highlightPacking: "14kg/20kg Poly-lined Cartons",
    tags: ["dehydrated", "onion", "flakes"],
  },
  {
    ...base,
    id: "dh-onion-granules",
    name: "Dehydrated Onion Granules",
    slug: "dehydrated-onion-granules",
    category: "dehydrated",
    image: px(4197446),
    imageAlt: "Garlic and onions on a marble surface for dehydrated granule production",
    shortDescription:
      "Free-flowing onion granules supplied to an agreed mesh specification.",
    description:
      "Granulated onion is used where even dispersion matters — seasoning blends, coatings and dry rubs. Mesh range and flowability requirements should be shared upfront.",
    forms: ["Granules", "Coarse Granules", "Fine Granules", "[ADD FORM]"],
    applications: ["Seasoning Blends", "Snack Coatings", "Food Manufacturing", "Retail & Private Label"],
    featured: false,
    tags: ["dehydrated", "onion", "granules"],
  },
  {
    ...base,
    id: "dh-garlic-flakes",
    name: "Dehydrated Garlic Flakes",
    slug: "dehydrated-garlic-flakes",
    category: "dehydrated",
    image: px(4197436),
    imageAlt: "Garlic bulbs used to produce dehydrated garlic flakes",
    shortDescription:
      "Dehydrated garlic flakes with strong aroma retention and controlled moisture.",
    description:
      "Garlic flakes are widely used in dry blends, marinades and instant food formats. Flake size, colour and pungency expectation should be defined in the enquiry.",
    forms: ["Flakes", "Kibbled", "Minced", "[ADD FORM]"],
    applications: ["Food Manufacturing", "Dry Mix Manufacturing", "Catering", "Retail & Private Label"],
    featured: true,
    hsCode: "071290",
    highlightSpec: "Moisture 6% max, A-Grade",
    highlightPacking: "20kg Poly-lined Cartons",
    tags: ["dehydrated", "garlic", "flakes"],
  },
  {
    ...base,
    id: "dh-garlic-granules",
    name: "Dehydrated Garlic Granules",
    slug: "dehydrated-garlic-granules",
    category: "dehydrated",
    image: px(4871138),
    imageAlt: "Spices in a white bowl beside garlic, representing garlic granules",
    shortDescription:
      "Free-flowing garlic granules supplied to a defined mesh band.",
    description:
      "Granulated garlic is a standard input for seasoning houses and coating systems. Mesh specification and moisture control determine performance in the blend.",
    forms: ["Granules", "Coarse Granules", "Fine Granules", "[ADD FORM]"],
    applications: ["Seasoning Blends", "Snack Coatings", "Food Manufacturing", "Hotels & Restaurants"],
    featured: false,
    tags: ["dehydrated", "garlic", "granules"],
  },
  {
    ...base,
    id: "dh-chilli-flakes",
    name: "Dehydrated Red Chilli Flakes",
    slug: "dehydrated-red-chilli-flakes",
    category: "dehydrated",
    image: px(33440717),
    imageAlt: "Crushed red chilli flakes and seeds on a dark background",
    shortDescription:
      "Crushed chilli flakes with a defined seed ratio, colour value and heat band.",
    description:
      "Chilli flakes are supplied against a target colour value and heat level, with seed ratio adjusted for the intended application. [ADD AVAILABLE VARIANTS]",
    forms: ["Crushed Flakes", "Coarse Flakes", "Deseeded", "[ADD FORM]"],
    applications: ["Pizza & Table Condiment", "Food Manufacturing", "Hotels & Restaurants", "Retail & Private Label"],
    featured: false,
    tags: ["dehydrated", "chilli", "flakes"],
  },
  {
    ...base,
    id: "dh-other-vegetables",
    name: "Other Dehydrated Vegetables",
    slug: "other-dehydrated-vegetables",
    category: "dehydrated",
    image: px(4197440),
    imageAlt: "Assorted vegetables prepared for dehydration",
    shortDescription:
      "Additional dehydrated vegetable lines developed against buyer requirement.",
    description:
      "Beyond onion and garlic, additional dehydrated vegetable lines can be discussed subject to season, availability and volume commitment. [ADD AVAILABLE DEHYDRATED VEGETABLE LINES]",
    forms: ["[ADD FORM]", "[ADD FORM]", "[ADD FORM]"],
    applications: ["Food Manufacturing", "Instant Foods", "Soup & Seasoning", "Catering"],
    featured: false,
    tags: ["dehydrated", "vegetables", "custom"],
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
