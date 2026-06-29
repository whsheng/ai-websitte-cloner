import {
  collectionCards,
  faqItems,
  legalLinks,
  primaryNavLinks,
  productTabs,
  socialLinks,
  teamMembers,
  universalCollab,
  videoReviews,
} from "@/lib/luzz-data";
import type {
  BlogPage,
  CollectionDetail,
  ContentPage,
  FooterGroup,
  LuzzLink,
  PolicyPage,
  ProductDetail,
  ProductSpec,
} from "@/types/luzz";

const siteOrigin = "https://luzzpickleball.com";

function asAbsolute(path: string) {
  return path.startsWith("http") ? path : `${siteOrigin}${path.startsWith("/") ? path : `/${path}`}`;
}

function localPathFromAbsolute(url: string) {
  if (!url.startsWith(siteOrigin)) {
    return url;
  }

  const path = url.slice(siteOrigin.length) || "/";
  return path || "/";
}

function buildSpecs(items: Array<[string, string]>): ProductSpec[] {
  return items.map(([label, value]) => ({ label, value }));
}

const productDetailsBySlug: Record<string, ProductDetail> = {
  "luzz-pro-4-frozen-inferno": {
    ...productTabs[0].products[0],
    slug: "luzz-pro-4-frozen-inferno",
    series: "Pro Series",
    tagline: "Frozen power for aggressive players who still want touch in transition.",
    description:
      "A thermoformed control-power paddle tuned for fast hands, high spin, and a compact confident feel on resets.",
    body:
      "The Frozen Inferno is one of the flagship Luzz paddles on the homepage. This local clone page preserves the product storytelling and makes the route navigable without sending you back to the live Shopify store.",
    collectionSlugs: ["pro-series", "all"],
    specs: buildSpecs([
      ["Shape", "Hybrid"],
      ["Core", "Foam + PP Honeycomb"],
      ["Thickness", "16 mm"],
      ["Skill level", "Pro"],
    ]),
    features: [
      "Thermoformed unibody construction",
      "High-spin carbon friction surface",
      "Stability for counters and drives",
      "Large sweet spot with compact handling",
    ],
  },
  "luzz-glider-2026": {
    ...productTabs[0].products[1],
    slug: "luzz-glider-2026",
    series: "Pro Series",
    tagline: "A hybrid all-court paddle built for glide, resets, and fast transitions.",
    description:
      "Balanced swing, forgiving response, and a clean hybrid silhouette that suits modern doubles play.",
    body:
      "The 2026 Glider appears in the homepage hero and featured rail. Here it becomes a local route so you can review the product without bouncing out to the live store.",
    collectionSlugs: ["pro-series", "all"],
    specs: buildSpecs([
      ["Shape", "Hybrid"],
      ["Core", "PP Honeycomb"],
      ["Thickness", "16 mm"],
      ["Skill level", "Intermediate to Pro"],
    ]),
    features: [
      "Fast reload speed at the kitchen",
      "Forgiving launch for resets",
      "Balanced feel across drives and drops",
      "Pre-order spotlight product",
    ],
  },
  "luzzpickleball-cannon-paddle-t700-carbon-friction-surface-thermoformed": {
    ...productTabs[0].products[2],
    slug: "luzzpickleball-cannon-paddle-t700-carbon-friction-surface-thermoformed",
    series: "Cannon Collection",
    tagline: "Budget-friendly pop with a shape and face tuned for attacking play.",
    description:
      "One of the most referenced paddles on the homepage review rail, positioned as standout price-to-performance value.",
    body:
      "The Cannon is heavily featured across the homepage testimonials and review cards. This page acts as the local PDP for that highlighted story.",
    collectionSlugs: ["cannon-paddle", "pro-series", "all"],
    specs: buildSpecs([
      ["Shape", "Elongated"],
      ["Core", "PP Honeycomb"],
      ["Thickness", "14 mm"],
      ["Skill level", "Intermediate"],
    ]),
    features: [
      "T700 carbon friction surface",
      "Strong pop for drives and put-aways",
      "Accessible price point",
      "Reviewed repeatedly on the homepage",
    ],
  },
  "luzzpickleball-pro-4-inferno-mpp-pickleball-paddle-large-sweet-spot-durable-core": {
    ...productTabs[0].products[3],
    slug: "luzzpickleball-pro-4-inferno-mpp-pickleball-paddle-large-sweet-spot-durable-core",
    series: "Pro Series",
    tagline: "Large-sweet-spot power paddle for players who want confidence under pressure.",
    description:
      "A core Pro lineup paddle aimed at aggressive doubles players who still need forgiveness on off-center contact.",
    body:
      "This route carries the main product essentials into the local clone so internal navigation stays consistent.",
    collectionSlugs: ["pro-series", "all"],
    specs: buildSpecs([
      ["Shape", "Elongated"],
      ["Core", "MPP durable core"],
      ["Thickness", "16 mm"],
      ["Skill level", "Pro"],
    ]),
    features: [
      "Large sweet spot emphasis",
      "Durable thermoformed build",
      "Power-oriented response",
      "Pro lineup positioning",
    ],
  },
  "luzzpickleball-kung-fu-panda-t700-carbon-friction-surface-thermoformed": {
    ...productTabs[0].products[4],
    slug: "luzzpickleball-kung-fu-panda-t700-carbon-friction-surface-thermoformed",
    series: "Universal Collection",
    tagline: "Character collaboration paddle with Cannon DNA and full-on visual attitude.",
    description:
      "A Universal collaboration paddle blending collectible artwork with the same performance-forward language seen throughout the homepage.",
    body:
      "The Kung Fu Panda product is the hero focus in the current homepage capture, so it needs a local PDP to make the clone feel complete.",
    collectionSlugs: ["kung-fu-panda", "universal-co-branding", "pro-series", "all"],
    specs: buildSpecs([
      ["Shape", "Elongated"],
      ["Core", "PP Honeycomb"],
      ["Thickness", "14 mm"],
      ["Skill level", "Intermediate to Pro"],
    ]),
    features: [
      "Universal Pictures collaboration",
      "Thermoformed carbon construction",
      "Art-led collectible presentation",
      "Homepage hero product route",
    ],
  },
  "luzzpickleball-candy-cannon-paddle-t700-carbon-friction-surface-thermoformed": {
    ...productTabs[0].products[5],
    slug: "luzzpickleball-candy-cannon-paddle-t700-carbon-friction-surface-thermoformed",
    series: "Cannon Collection",
    tagline: "Playful art direction on top of an attack-minded Cannon platform.",
    description:
      "A color-forward take on the Cannon family, keeping the same price-to-performance framing.",
    body:
      "This route extends the Cannon family locally so collection and recommendation flows stay inside the cloned site.",
    collectionSlugs: ["cannon-paddle", "pro-series", "all"],
    specs: buildSpecs([
      ["Shape", "Elongated"],
      ["Core", "PP Honeycomb"],
      ["Thickness", "14 mm"],
      ["Skill level", "Intermediate"],
    ]),
    features: [
      "Cannon family construction",
      "T700 face",
      "Energetic collectible graphics",
      "Strong value positioning",
    ],
  },
  "luzzpickleball-ultra-fog-original-paddle-14mm-t700-raw-carbon-fiber-frameless-thermoformed": {
    ...productTabs[1].products[0],
    slug: "luzzpickleball-ultra-fog-original-paddle-14mm-t700-raw-carbon-fiber-frameless-thermoformed",
    series: "Performance",
    tagline: "Frameless original paddle built to feel quick, crisp, and low-drag.",
    description:
      "A sale-highlighted Performance paddle with a raw carbon fiber face and a frameless silhouette.",
    body:
      "The Performance collection becomes locally browsable with this PDP, keeping the conversion path inside the clone.",
    collectionSlugs: ["advanced", "all"],
    specs: buildSpecs([
      ["Shape", "Frameless"],
      ["Core", "PP Honeycomb"],
      ["Thickness", "14 mm"],
      ["Skill level", "Intermediate"],
    ]),
    features: [
      "Raw carbon fiber face",
      "Frameless profile",
      "Sale-highlight positioning",
      "Quick feel through the air",
    ],
  },
  "luzzpickleball-ultra-original-paddle-14mm-t700-raw-carbon-fiber-frameless-thermoformed": {
    ...productTabs[1].products[1],
    slug: "luzzpickleball-ultra-original-paddle-14mm-t700-raw-carbon-fiber-frameless-thermoformed",
    series: "Performance",
    tagline: "A guitar-themed original paddle with a crisp, lively frameless response.",
    description:
      "Another entry in the Performance rail, carrying the same price and sale treatment as the Fog version.",
    body:
      "This page provides the local route for the Ultra Guitar Original and keeps internal merchandising intact.",
    collectionSlugs: ["advanced", "all"],
    specs: buildSpecs([
      ["Shape", "Frameless"],
      ["Core", "PP Honeycomb"],
      ["Thickness", "14 mm"],
      ["Skill level", "Intermediate"],
    ]),
    features: [
      "Raw carbon fiber face",
      "Frameless body",
      "Sale-focused positioning",
      "Graphic-led identity",
    ],
  },
  "luzzpickleball-ultra-whisper-original-paddle-14mm-t700-raw-carbon-fiber-frameless-thermoformed": {
    ...productTabs[1].products[2],
    slug: "luzzpickleball-ultra-whisper-original-paddle-14mm-t700-raw-carbon-fiber-frameless-thermoformed",
    series: "Performance",
    tagline: "A calmer visual treatment on the same quick frameless platform.",
    description:
      "Built for players who want the Ultra line's responsiveness in a cleaner, understated finish.",
    body:
      "This route completes the core trio shown in the homepage Performance tab.",
    collectionSlugs: ["advanced", "all"],
    specs: buildSpecs([
      ["Shape", "Frameless"],
      ["Core", "PP Honeycomb"],
      ["Thickness", "14 mm"],
      ["Skill level", "Intermediate"],
    ]),
    features: [
      "Frameless construction",
      "Raw carbon surface",
      "Responsive profile",
      "Part of the homepage Performance trio",
    ],
  },
  "luzzpickleball-imperial-dragon-paddle14mmt700-carbon-friction-surface-thermoformed": {
    ...productTabs[1].products[3],
    slug: "luzzpickleball-imperial-dragon-paddle14mmt700-carbon-friction-surface-thermoformed",
    series: "Limited Collection",
    tagline: "A limited-edition dragon graphic on a premium thermoformed platform.",
    description:
      "A collector-leaning limited release shown in the Performance tab with sold-out status.",
    body:
      "Limited collection routes still need local pages so visual browsing stays coherent inside the clone.",
    collectionSlugs: ["advanced", "all"],
    specs: buildSpecs([
      ["Shape", "Elongated"],
      ["Core", "PP Honeycomb"],
      ["Thickness", "14 mm"],
      ["Skill level", "Advanced"],
    ]),
    features: [
      "Limited-edition artwork",
      "Sold-out badge state",
      "Thermoformed construction",
      "Collector appeal",
    ],
  },
  "luzzpickleball-goldenveil": {
    ...productTabs[1].products[4],
    slug: "luzzpickleball-goldenveil",
    series: "Limited Collection",
    tagline: "Lightweight frameless expression of the premium limited collection line.",
    description:
      "A premium stylized paddle with a frameless presentation and strong visual identity.",
    body:
      "GoldenVeil sits inside the homepage Performance tab and now has a matching local PDP.",
    collectionSlugs: ["advanced", "all"],
    specs: buildSpecs([
      ["Shape", "Frameless"],
      ["Core", "PP Honeycomb"],
      ["Thickness", "14 mm"],
      ["Skill level", "Advanced"],
    ]),
    features: [
      "Lightweight frameless build",
      "Premium limited-collection positioning",
      "Distinctive golden visual treatment",
      "Sale-highlight state on homepage",
    ],
  },
  "luzzpickleball-zz-frameless-paddle14mmt700-carbon-friction-surface-thermoformed": {
    ...productTabs[1].products[5],
    slug: "luzzpickleball-zz-frameless-paddle14mmt700-carbon-friction-surface-thermoformed",
    series: "Limited Collection",
    tagline: "A frameless limited paddle that leans into speed, pop, and visual edge.",
    description:
      "The ZZ limited route gives the homepage Performance tab a local landing page instead of a live-store exit.",
    body:
      "This local PDP closes the loop on the sold-out limited collection items shown on the homepage.",
    collectionSlugs: ["advanced", "all"],
    specs: buildSpecs([
      ["Shape", "Frameless"],
      ["Core", "PP Honeycomb"],
      ["Thickness", "14 mm"],
      ["Skill level", "Advanced"],
    ]),
    features: [
      "Frameless silhouette",
      "Sold-out state in homepage rail",
      "T700 friction surface",
      "Limited-edition positioning",
    ],
  },
  "luzz-infinity-paddles-set-of-2-t700-carbon-fiber-sandblasted-christmas-gift": {
    ...productTabs[2].products[0],
    slug: "luzz-infinity-paddles-set-of-2-t700-carbon-fiber-sandblasted-christmas-gift",
    series: "Infinity",
    tagline: "A beginner-friendly two-pack that keeps entry into the sport approachable.",
    description:
      "The Infinity line is framed on the homepage as the beginner collection, and this set anchors that story.",
    body:
      "This page acts as the local PDP for the Infinity set so entry-level shopping stays inside the clone.",
    collectionSlugs: ["infinity-series-us", "all"],
    specs: buildSpecs([
      ["Shape", "Standard"],
      ["Core", "Polymer"],
      ["Thickness", "16 mm"],
      ["Skill level", "Beginner"],
    ]),
    features: [
      "Set of 2 paddles",
      "Beginner-focused positioning",
      "Sale pricing",
      "Gift-oriented merchandising",
    ],
  },
  "luzzpickleball-guitar-groove-original-paddle-16mm-t700-carbon-fiber-us": {
    ...productTabs[2].products[1],
    slug: "luzzpickleball-guitar-groove-original-paddle-16mm-t700-carbon-fiber-us",
    series: "Infinity",
    tagline: "Original Infinity paddle with playful graphics and easy-entry pricing.",
    description:
      "One of several Infinity originals shown in the homepage tab for beginner and casual players.",
    body:
      "This local PDP keeps the Infinity catalog navigable from inside the cloned site.",
    collectionSlugs: ["infinity-series-us", "all"],
    specs: buildSpecs([
      ["Shape", "Standard"],
      ["Core", "Polymer"],
      ["Thickness", "16 mm"],
      ["Skill level", "Beginner"],
    ]),
    features: [
      "Accessible beginner price",
      "Graphic-led personality",
      "16 mm comfort profile",
      "Part of the Infinity family",
    ],
  },
  "luzzpickleball-bunny-blitz-original-paddle-16mm-t700-carbon-fiber-us": {
    ...productTabs[2].products[2],
    slug: "luzzpickleball-bunny-blitz-original-paddle-16mm-t700-carbon-fiber-us",
    series: "Infinity",
    tagline: "Fun original artwork paired with an approachable beginner-friendly platform.",
    description:
      "Built to feel inviting for newer players while carrying the same visual energy as the rest of the Infinity line.",
    body:
      "A local PDP for Bunny Blitz keeps the homepage Infinity tab fully navigable in the clone.",
    collectionSlugs: ["infinity-series-us", "all"],
    specs: buildSpecs([
      ["Shape", "Standard"],
      ["Core", "Polymer"],
      ["Thickness", "16 mm"],
      ["Skill level", "Beginner"],
    ]),
    features: [
      "Bright original artwork",
      "Affordable entry-level pricing",
      "Comfortable 16 mm feel",
      "Homepage Infinity tab item",
    ],
  },
  "luzzpickleball-purr-original-paddle-16mm-t700-carbon-fiber-sandblasted-surface-us": {
    ...productTabs[2].products[3],
    slug: "luzzpickleball-purr-original-paddle-16mm-t700-carbon-fiber-sandblasted-surface-us",
    series: "Infinity",
    tagline: "Sandblasted-surface Infinity paddle with friendly all-around playability.",
    description:
      "A cat-themed Infinity design keeping the lineup playful and beginner-accessible.",
    body:
      "This page gives the Purr paddle its own local route instead of bouncing to Shopify.",
    collectionSlugs: ["infinity-series-us", "all"],
    specs: buildSpecs([
      ["Shape", "Standard"],
      ["Core", "Polymer"],
      ["Thickness", "16 mm"],
      ["Skill level", "Beginner"],
    ]),
    features: [
      "Sandblasted surface",
      "Beginner positioning",
      "Graphic-rich identity",
      "Sale-state merchandising",
    ],
  },
  "luzzpickleball-butterfly-original-paddle-16mm-t700-carbon-fiber-us": {
    ...productTabs[2].products[4],
    slug: "luzzpickleball-butterfly-original-paddle-16mm-t700-carbon-fiber-us",
    series: "Infinity",
    tagline: "Butterfly-themed Infinity original with beginner-first positioning.",
    description:
      "A final Infinity route so the full tab shown on the homepage is internally navigable.",
    body:
      "This local PDP closes out the primary Infinity items featured on the homepage.",
    collectionSlugs: ["infinity-series-us", "all"],
    specs: buildSpecs([
      ["Shape", "Standard"],
      ["Core", "Polymer"],
      ["Thickness", "16 mm"],
      ["Skill level", "Beginner"],
    ]),
    features: [
      "Expressive butterfly graphics",
      "16 mm comfort core",
      "Beginner-friendly pricing",
      "Infinity family route",
    ],
  },
};

const collectionDetailsBySlug: Record<string, CollectionDetail> = {
  all: {
    slug: "all",
    href: `${siteOrigin}/collections/all`,
    title: "All Paddles",
    eyebrow: "Collections",
    description: "A local collection view that gathers the full Luzz homepage product mix into one browsable route.",
    body: "This local collection is the broadest browsing surface in the cloned site. It combines the featured homepage products so internal links no longer jump out to the live store.",
    image: "/images/luzzpickleball/collections/pro-series.jpg",
    productSlugs: Object.keys(productDetailsBySlug),
  },
  "pro-series": {
    slug: "pro-series",
    href: `${siteOrigin}/collections/pro-series`,
    title: "Pro Series",
    eyebrow: "Collections",
    description: "Professional-grade paddles tuned for modern competitive play.",
    body: "The Pro Series collection groups the flagship performance products shown across the homepage hero and featured tabs.",
    image: collectionCards[0].image,
    productSlugs: [
      "luzz-pro-4-frozen-inferno",
      "luzz-glider-2026",
      "luzzpickleball-cannon-paddle-t700-carbon-friction-surface-thermoformed",
      "luzzpickleball-pro-4-inferno-mpp-pickleball-paddle-large-sweet-spot-durable-core",
      "luzzpickleball-kung-fu-panda-t700-carbon-friction-surface-thermoformed",
      "luzzpickleball-candy-cannon-paddle-t700-carbon-friction-surface-thermoformed",
    ],
  },
  advanced: {
    slug: "advanced",
    href: `${siteOrigin}/collections/advanced`,
    title: "Performance",
    eyebrow: "Collections",
    description: "Responsive frameless and limited paddles presented as the Performance line on the homepage.",
    body: "The Performance collection mirrors the second homepage featured tab and gives those products local collection context.",
    image: "/images/luzzpickleball/products/performance-fog.jpg",
    productSlugs: [
      "luzzpickleball-ultra-fog-original-paddle-14mm-t700-raw-carbon-fiber-frameless-thermoformed",
      "luzzpickleball-ultra-original-paddle-14mm-t700-raw-carbon-fiber-frameless-thermoformed",
      "luzzpickleball-ultra-whisper-original-paddle-14mm-t700-raw-carbon-fiber-frameless-thermoformed",
      "luzzpickleball-imperial-dragon-paddle14mmt700-carbon-friction-surface-thermoformed",
      "luzzpickleball-goldenveil",
      "luzzpickleball-zz-frameless-paddle14mmt700-carbon-friction-surface-thermoformed",
    ],
  },
  "infinity-series-us": {
    slug: "infinity-series-us",
    href: `${siteOrigin}/collections/infinity-series-us`,
    title: "Infinity Paddles",
    eyebrow: "Collections",
    description: "Beginner-friendly originals and bundle offers from the Infinity line.",
    body: "Infinity is framed on the homepage as the approachable entry line, and this local collection preserves that merchandising path.",
    image: collectionCards[1].image,
    productSlugs: [
      "luzz-infinity-paddles-set-of-2-t700-carbon-fiber-sandblasted-christmas-gift",
      "luzzpickleball-guitar-groove-original-paddle-16mm-t700-carbon-fiber-us",
      "luzzpickleball-bunny-blitz-original-paddle-16mm-t700-carbon-fiber-us",
      "luzzpickleball-purr-original-paddle-16mm-t700-carbon-fiber-sandblasted-surface-us",
      "luzzpickleball-butterfly-original-paddle-16mm-t700-carbon-fiber-us",
    ],
  },
  "infinityseries-pickleball-paddles": {
    slug: "infinityseries-pickleball-paddles",
    href: `${siteOrigin}/collections/infinityseries-pickleball-paddles`,
    title: "Infinity Series",
    eyebrow: "Collections",
    description: "A mirrored local route for the collection card variant pointing into the Infinity family.",
    body: "This route exists so the homepage collection tile stays local, while still surfacing the Infinity family products.",
    image: collectionCards[1].image,
    productSlugs: [
      "luzz-infinity-paddles-set-of-2-t700-carbon-fiber-sandblasted-christmas-gift",
      "luzzpickleball-guitar-groove-original-paddle-16mm-t700-carbon-fiber-us",
      "luzzpickleball-bunny-blitz-original-paddle-16mm-t700-carbon-fiber-us",
      "luzzpickleball-purr-original-paddle-16mm-t700-carbon-fiber-sandblasted-surface-us",
      "luzzpickleball-butterfly-original-paddle-16mm-t700-carbon-fiber-us",
    ],
  },
  "pickleball-paddle-bag": {
    slug: "pickleball-paddle-bag",
    href: `${siteOrigin}/collections/pickleball-paddle-bag`,
    title: "Pickleball Bag",
    eyebrow: "Collections",
    description: "Accessory-oriented collection route mirroring the homepage card.",
    body: "The source site has broader accessory inventory, but this local collection focuses on keeping navigation coherent from the cloned homepage.",
    image: collectionCards[2].image,
    productSlugs: [
      "luzzpickleball-cannon-paddle-t700-carbon-friction-surface-thermoformed",
      "luzz-glider-2026",
    ],
  },
  "pickleball-accessories": {
    slug: "pickleball-accessories",
    href: `${siteOrigin}/collections/pickleball-accessories`,
    title: "Accessories",
    eyebrow: "Collections",
    description: "Accessory and gear route used by homepage navigation and collection cards.",
    body: "This local collection is a bridge page for the accessory-focused links that appear in the header and collection grid.",
    image: collectionCards[3].image,
    productSlugs: [
      "luzzpickleball-cannon-paddle-t700-carbon-friction-surface-thermoformed",
      "luzz-infinity-paddles-set-of-2-t700-carbon-fiber-sandblasted-christmas-gift",
    ],
  },
  "new-arrivals": {
    slug: "new-arrivals",
    href: `${siteOrigin}/collections/new-arrivals`,
    title: "New Arrivals",
    eyebrow: "Collections",
    description: "Latest drops and spotlighted hero products from the homepage.",
    body: "The new-arrivals tile on the homepage now lands on a local route featuring the most prominently surfaced current products.",
    image: collectionCards[4].image,
    productSlugs: [
      "luzz-glider-2026",
      "luzz-pro-4-frozen-inferno",
      "luzzpickleball-kung-fu-panda-t700-carbon-friction-surface-thermoformed",
    ],
  },
  "kung-fu-panda": {
    slug: "kung-fu-panda",
    href: `${siteOrigin}/collections/kung-fu-panda`,
    title: "Kung Fu Panda Collection",
    eyebrow: "Universal Collection",
    description: "A local collection route for the panda collaboration promoted in the hero and Universal block.",
    body: "This collection keeps the most visible collaboration in the homepage clone fully local.",
    image: universalCollab.banners[0].image,
    productSlugs: ["luzzpickleball-kung-fu-panda-t700-carbon-friction-surface-thermoformed"],
  },
  "minions-mania": {
    slug: "minions-mania",
    href: `${siteOrigin}/collections/minions-mania`,
    title: "Minions Mania Collection",
    eyebrow: "Universal Collection",
    description: "A companion route for the Minions collaboration promo banner.",
    body: "The source site contains more collaboration inventory, but this local route preserves the promotional path and visual storytelling.",
    image: universalCollab.banners[1].image,
    productSlugs: [
      "luzzpickleball-kung-fu-panda-t700-carbon-friction-surface-thermoformed",
      "luzzpickleball-candy-cannon-paddle-t700-carbon-friction-surface-thermoformed",
    ],
  },
  "universal-co-branding": {
    slug: "universal-co-branding",
    href: `${siteOrigin}/collections/universal-co-branding`,
    title: "Universal Collection",
    eyebrow: "Collections",
    description: "Landing collection for the Universal collaboration family referenced in the source header.",
    body: "This collection groups the collaboration products and the two promoted sub-collections into one local landing page.",
    image: universalCollab.banners[0].image,
    productSlugs: [
      "luzzpickleball-kung-fu-panda-t700-carbon-friction-surface-thermoformed",
      "luzzpickleball-candy-cannon-paddle-t700-carbon-friction-surface-thermoformed",
    ],
  },
  "cannon-paddle": {
    slug: "cannon-paddle",
    href: `${siteOrigin}/collections/cannon-paddle`,
    title: "Cannon Paddle",
    eyebrow: "Collections",
    description: "The budget-performance collection most referenced by the homepage review cards.",
    body: "This collection captures the Cannon-focused conversion paths from the homepage review content.",
    image: "/images/luzzpickleball/products/pro-cannon.jpg",
    productSlugs: [
      "luzzpickleball-cannon-paddle-t700-carbon-friction-surface-thermoformed",
      "luzzpickleball-candy-cannon-paddle-t700-carbon-friction-surface-thermoformed",
    ],
  },
};

const contentPagesBySlug: Record<string, ContentPage> = {
  "luzz-lab-phase-02": {
    slug: "luzz-lab-phase-02",
    href: `${siteOrigin}/pages/luzz-lab-phase-02`,
    eyebrow: "Idea & Lab",
    title: "Luzz LAB Phase 02",
    description: "A local concept page for the homepage announcement and navigation destination.",
    body: [
      "Luzz LAB Phase 02 is positioned on the source site as an experimental idea and launch surface.",
      "In this clone, the page works as a branded editorial destination so the announcement bar and header stay on-site.",
    ],
  },
  faq: {
    slug: "faq",
    href: `${siteOrigin}/pages/faq`,
    eyebrow: "Customer Care",
    title: "FAQ",
    description: "Extended FAQ landing page sourced from the homepage support content.",
    body: faqItems.map((item) => `${item.question}\n${item.answer}`),
    cta: { label: "Email service", href: "mailto:service@luzzpickleball.com" },
  },
  warranty: {
    slug: "warranty",
    href: `${siteOrigin}/pages/warranty`,
    eyebrow: "Customer Care",
    title: "Warranty",
    description: "Warranty information landing page for the homepage CTA.",
    body: [
      "Every Luzz Pro paddle in this cloned experience is framed with the same 12-month warranty promise shown on the homepage.",
      "Use this page as the local destination for warranty-related links until deeper policy-specific content is expanded.",
    ],
  },
  "team-luzz": {
    slug: "team-luzz",
    href: `${siteOrigin}/pages/team-luzz`,
    eyebrow: "Team",
    title: "Team Luzz",
    description: "Team roster landing page for the athletes shown in the homepage gallery.",
    body: [
      `Current featured roster: ${teamMembers.map((member) => member.name).join(", ")}.`,
      "This local page exists so the team links and footer paths do not send users back to the live site.",
    ],
  },
  "shipping-policy": {
    slug: "shipping-policy",
    href: `${siteOrigin}/pages/shipping-policy`,
    eyebrow: "Customer Care",
    title: "Shipping",
    description: "Shipping information landing page for support links on the cloned site.",
    body: [
      "The source site has region-specific logistics details. This local page preserves the navigation flow while you continue expanding deeper support content.",
      "For the purposes of this clone, shipping is framed as a support destination connected to FAQ and policy links.",
    ],
  },
  "find-your-nearest-luzz-pickleball-court": {
    slug: "find-your-nearest-luzz-pickleball-court",
    href: `${siteOrigin}/pages/find-your-nearest-luzz-pickleball-court`,
    eyebrow: "Resources",
    title: "Court Finder",
    description: "A local placeholder page for the court finder and demo-location links.",
    body: [
      "The live site offers a court-finder experience. This local page keeps those links inside the cloned project until a dedicated locator UI is built.",
      "It is intentionally simple, but it preserves the internal route architecture.",
    ],
  },
  "contact-us": {
    slug: "contact-us",
    href: `${siteOrigin}/pages/contact-us`,
    eyebrow: "Customer Care",
    title: "Contact Us",
    description: "Local support contact landing page.",
    body: [
      "Reach the brand through the same support pathways surfaced on the homepage and FAQ areas.",
      "This clone currently routes contact actions to email and branded support destinations rather than live Shopify forms.",
    ],
    cta: { label: "Email service", href: "mailto:service@luzzpickleball.com" },
  },
  "about-us": {
    slug: "about-us",
    href: `${siteOrigin}/pages/about-us`,
    eyebrow: "About",
    title: "About Us",
    description: "Brand overview page for cloned internal navigation.",
    body: [
      "Luzz positions itself around removing friction from getting on court, with product storytelling centered on design, performance, and personality.",
      "This local page provides a branded destination for those support and footer links while the rest of the site is being cloned section by section.",
    ],
  },
  sponsorship: {
    slug: "sponsorship",
    href: `${siteOrigin}/pages/sponsorship`,
    eyebrow: "Resources",
    title: "Sponsorship",
    description: "Local sponsorship landing page linked from the Resources navigation.",
    body: [
      "The source site exposes a sponsorship route from the resources menu.",
      "This local page keeps that path inside the clone and can later expand into a proper recruitment or application experience.",
    ],
  },
  "become-a-dealer": {
    slug: "become-a-dealer",
    href: `${siteOrigin}/pages/become-a-dealer`,
    eyebrow: "Resources",
    title: "Retailer",
    description: "Local retailer and dealer inquiry page.",
    body: [
      "Dealer and retailer links now stay inside the cloned site instead of leaving for the live store.",
      "This page is a local placeholder that preserves information architecture for future expansion.",
    ],
  },
  hire: {
    slug: "hire",
    href: `${siteOrigin}/pages/hire`,
    eyebrow: "Resources",
    title: "Careers",
    description: "Local careers landing page.",
    body: [
      "The careers route is represented locally so header navigation remains self-contained.",
      "It can be expanded later into actual job listings or recruiting content.",
    ],
  },
  designidea: {
    slug: "designidea",
    href: `${siteOrigin}/pages/designidea`,
    eyebrow: "Idea & Lab",
    title: "Luzz Idea",
    description: "Local concept page for the Idea & Lab navigation cluster.",
    body: [
      "This page acts as a local destination for the Luzz Idea path found in the source navigation.",
      "It keeps the browse flow inside the clone while preserving the brand's experimental storytelling structure.",
    ],
  },
  "rare-cannon-1": {
    slug: "rare-cannon-1",
    href: `${siteOrigin}/pages/rare-cannon-1`,
    eyebrow: "Idea & Lab",
    title: "Rare Cannon",
    description: "Local editorial route for one of the source site's concept entries.",
    body: [
      "Rare Cannon appears in the Idea & Lab navigation cluster on the live site.",
      "This local page preserves the route hierarchy without forcing a handoff to Shopify content.",
    ],
  },
};

const policyPagesBySlug: Record<string, PolicyPage> = {
  "refund-policy": {
    slug: "refund-policy",
    href: `${siteOrigin}/policies/refund-policy`,
    title: "Refund policy",
    description: "Local policy page preserving the footer navigation structure.",
    body: [
      "Returns and refunds are one of the primary customer-care topics on the source site.",
      "This local clone page keeps the footer policy navigation functional until fuller policy text is imported.",
    ],
  },
  "privacy-policy": {
    slug: "privacy-policy",
    href: `${siteOrigin}/policies/privacy-policy`,
    title: "Privacy policy",
    description: "Local privacy policy route.",
    body: [
      "This page exists to preserve the footer information architecture during the cloning phase.",
      "It can later be replaced with the exact privacy policy copy if you decide to clone policy text verbatim.",
    ],
  },
  "terms-of-service": {
    slug: "terms-of-service",
    href: `${siteOrigin}/policies/terms-of-service`,
    title: "Terms of service",
    description: "Local terms of service route.",
    body: [
      "A placeholder policy route for local navigation continuity.",
      "Useful while the site is still being expanded from homepage clone to broader internal structure.",
    ],
  },
  "shipping-policy": {
    slug: "shipping-policy",
    href: `${siteOrigin}/policies/shipping-policy`,
    title: "Shipping policy",
    description: "Local shipping policy route.",
    body: [
      "This page provides the footer-level shipping policy destination distinct from the content-style shipping page under `/pages`.",
      "It preserves the original site's multiple support entry points.",
    ],
  },
  "contact-information": {
    slug: "contact-information",
    href: `${siteOrigin}/policies/contact-information`,
    title: "Contact information",
    description: "Local contact-information policy route.",
    body: [
      "A local footer destination for policy-style contact information.",
      "Useful for keeping the site's footer complete during phased cloning.",
    ],
  },
};

const blogPagesBySlug: Record<string, BlogPage> = {
  "pickleball-lessons": {
    slug: "pickleball-lessons",
    href: `${siteOrigin}/blogs/pickleball-lessons`,
    eyebrow: "Resources",
    title: "Tutorials",
    description: "Local blog landing page for the tutorials content path.",
    body: [
      "The source site uses this path for pickleball lessons and educational resources.",
      "This local version acts as a lightweight index page so resource navigation stays self-contained.",
    ],
  },
  news: {
    slug: "news",
    href: `${siteOrigin}/blogs/news`,
    eyebrow: "Resources",
    title: "News",
    description: "Local news landing page for internal navigation.",
    body: [
      "The live site has a news route exposed from the Resources menu.",
      "This cloned page preserves that information architecture while the broader site is still being built out.",
    ],
  },
};

const footerGroupsFromSource: FooterGroup[] = [
  {
    title: "Products",
    links: [
      { label: "Paddles", href: `${siteOrigin}/collections/all` },
      { label: "Bag", href: `${siteOrigin}/collections/pickleball-paddle-bag` },
      { label: "Accessories", href: `${siteOrigin}/collections/pickleball-accessories` },
    ],
  },
  {
    title: "Customer Care",
    links: [
      { label: "Shipping", href: `${siteOrigin}/pages/shipping-policy` },
      { label: "Returns & Refunds", href: `${siteOrigin}/policies/refund-policy` },
      { label: "Warranty", href: `${siteOrigin}/pages/warranty` },
      { label: "FAQ", href: `${siteOrigin}/pages/faq` },
    ],
  },
  {
    title: "About",
    links: [
      { label: "About Us", href: `${siteOrigin}/pages/about-us` },
      { label: "Contact Us", href: `${siteOrigin}/pages/contact-us` },
      { label: "Team Luzz", href: `${siteOrigin}/pages/team-luzz` },
      { label: "Court Finder", href: `${siteOrigin}/pages/find-your-nearest-luzz-pickleball-court` },
    ],
  },
];

const allInternalLinks = new Set<string>();

function registerLinks(links: LuzzLink[]) {
  links.forEach((link) => {
    if (link.href.startsWith(siteOrigin)) {
      allInternalLinks.add(link.href);
    }
  });
}

registerLinks(primaryNavLinks);
registerLinks(legalLinks);
registerLinks(socialLinks);
registerLinks(footerGroupsFromSource.flatMap((group) => group.links));
registerLinks(
  [
    ...productTabs.flatMap((tab) => [{ label: tab.title, href: tab.href }, ...tab.products.map((product) => ({ label: product.name, href: product.href }))]),
    ...collectionCards.map((card) => ({ label: card.title, href: card.href })),
    ...videoReviews.map((review) => ({ label: review.author, href: review.href })),
    ...faqItems.flatMap((item) => (item.href ? [{ label: item.question, href: item.href }] : [])),
    ...universalCollab.banners.map((banner) => ({ label: banner.label, href: banner.href })),
    { label: "Universal Collection", href: `${siteOrigin}/collections/universal-co-branding` },
    { label: "Search", href: `${siteOrigin}/search` },
    { label: "Cart", href: `${siteOrigin}/cart` },
    { label: "Account", href: `${siteOrigin}/account/login` },
  ] satisfies LuzzLink[]
);

export const siteCollections = Object.values(collectionDetailsBySlug);
export const siteProducts = Object.values(productDetailsBySlug);
export const siteContentPages = Object.values(contentPagesBySlug);
export const sitePolicyPages = Object.values(policyPagesBySlug);
export const siteBlogPages = Object.values(blogPagesBySlug);
export const siteFooterGroups = footerGroupsFromSource;
export const sitePrimaryNavLinks = cloneLinks(primaryNavLinks);
export const siteLegalLinks = cloneLinks(legalLinks);

export function getProductBySlug(slug: string) {
  return productDetailsBySlug[slug];
}

export function getCollectionBySlug(slug: string) {
  return collectionDetailsBySlug[slug];
}

export function getContentPageBySlug(slug: string) {
  return contentPagesBySlug[slug];
}

export function getPolicyPageBySlug(slug: string) {
  return policyPagesBySlug[slug];
}

export function getBlogPageBySlug(slug: string) {
  return blogPagesBySlug[slug];
}

export function getTrackingPage() {
  return {
    eyebrow: "Customer Care",
    title: "Track Your Order",
    description: "A local order-tracking placeholder replacing the ParcelPanel redirect from the source site.",
    body: [
      "The live site sends this route into a ParcelPanel integration.",
      "This local version keeps the support flow inside the clone while deeper app routes remain static-first.",
    ],
  };
}

export function getProductsForCollection(slug: string) {
  const collection = getCollectionBySlug(slug);
  if (!collection) {
    return [];
  }

  return collection.productSlugs
    .map((productSlug) => getProductBySlug(productSlug))
    .filter((product): product is ProductDetail => Boolean(product));
}

export function toLocalHref(href: string) {
  if (!href.startsWith(siteOrigin)) {
    return href;
  }

  return localPathFromAbsolute(href);
}

export function cloneLink(link: LuzzLink): LuzzLink {
  return {
    ...link,
    href: toLocalHref(link.href),
  };
}

export function cloneLinks(links: LuzzLink[]) {
  return links.map(cloneLink);
}

export function isInternalLuzzHref(href: string) {
  return href.startsWith(siteOrigin) || href.startsWith("/");
}

export function getAllInternalRouteHrefs() {
  const routes = new Set<string>();

  allInternalLinks.forEach((href) => {
    routes.add(toLocalHref(href));
  });

  siteCollections.forEach((collection) => routes.add(toLocalHref(collection.href)));
  siteProducts.forEach((product) => routes.add(toLocalHref(product.href)));
  siteContentPages.forEach((page) => routes.add(toLocalHref(page.href)));
  sitePolicyPages.forEach((page) => routes.add(toLocalHref(page.href)));
  siteBlogPages.forEach((page) => routes.add(toLocalHref(page.href)));

  routes.add("/");
  routes.add("/search");
  routes.add("/cart");
  routes.add("/account/login");

  return Array.from(routes).sort();
}

export function getSearchKeywords() {
  return ["cannon", "inferno", "guitar", "Bags", "Accessories"];
}

export function getSearchResultProducts() {
  return [
    getProductBySlug("luzzpickleball-cannon-paddle-t700-carbon-friction-surface-thermoformed"),
    getProductBySlug("luzz-pro-4-frozen-inferno"),
    getProductBySlug("luzz-glider-2026"),
    getProductBySlug("luzzpickleball-kung-fu-panda-t700-carbon-friction-surface-thermoformed"),
  ].filter((product): product is ProductDetail => Boolean(product));
}

export function getAccountPageCopy() {
  return {
    title: "Account",
    description: "A local account stub preserving the login path from the source site.",
    body: [
      "The live store uses Shopify authentication. This cloned site keeps the route local and branded while avoiding a redirect back to the production storefront.",
      "If you later want full fidelity here, the next step would be reproducing the login and account shell visuals from the source routes.",
    ],
  };
}

export function getCartPageCopy() {
  return {
    title: "Your cart is empty",
    description: "A local cart stub preserving the cart path from the source site.",
    body: [
      "The homepage footer and header now point into a local cart route instead of the live Shopify cart.",
      "This page currently mirrors the empty-cart state implied by the homepage capture.",
    ],
  };
}

export function getAbsoluteHref(path: string) {
  return asAbsolute(path);
}

export function getBreadcrumbsForProduct(product: ProductDetail) {
  const primaryCollection = product.collectionSlugs[0];
  const collection = primaryCollection ? getCollectionBySlug(primaryCollection) : undefined;

  return [
    { label: "Home", href: "/" },
    collection
      ? { label: collection.title, href: toLocalHref(collection.href) }
      : { label: product.series, href: "/collections/all" },
    { label: product.name, href: toLocalHref(product.href) },
  ];
}

export function getBreadcrumbsForCollection(collection: CollectionDetail) {
  return [
    { label: "Home", href: "/" },
    { label: "Collections", href: "/collections/all" },
    { label: collection.title, href: toLocalHref(collection.href) },
  ];
}
