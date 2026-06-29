import type {
  CollectionCard,
  FaqItem,
  HeroSlide,
  LuzzLink,
  MarqueeQuote,
  ProductTab,
  TeamMember,
  VideoReview,
} from "@/types/luzz";

export const announcementMessages = [
  "Free shipping on orders over $30",
  "30-Day Easy Returns | 1-Year Warranty",
  "Luzz Lab Phase 02 is LIVE",
];

export const primaryNavLinks: LuzzLink[] = [
  { label: "Paddles", href: "https://luzzpickleball.com/collections/all" },
  { label: "Accessories", href: "https://luzzpickleball.com/collections/pickleball-accessories" },
  { label: "Resources", href: "https://luzzpickleball.com/blogs/pickleball-lessons" },
  { label: "Idea & Lab", href: "https://luzzpickleball.com/pages/luzz-lab-phase-02" },
  { label: "Customer Care", href: "https://luzzpickleball.com/pages/faq" },
  { label: "Team Luzz", href: "https://luzzpickleball.com/pages/team-luzz" },
];

export const heroSlides: HeroSlide[] = [
  {
    alt: "Luzz Glider 2026 hero slide",
    href: "https://luzzpickleball.com/products/luzz-glider-2026",
    image: "/images/luzzpickleball/hero-slide-1.png",
  },
  {
    alt: "Luzz Inferno Frozen hero slide",
    href: "https://luzzpickleball.com/products/luzz-pro-4-frozen-inferno",
    image: "/images/luzzpickleball/hero-slide-2.jpg",
  },
  {
    alt: "Luzz x Kung Fu Panda hero slide",
    href: "https://luzzpickleball.com/products/luzzpickleball-kung-fu-panda-t700-carbon-friction-surface-thermoformed",
    image: "/images/luzzpickleball/hero-slide-3.jpg",
  },
];

export const marqueeQuotes: MarqueeQuote[] = [
  {
    author: "Pickleball Willy",
    avatar: "/images/luzzpickleball/avatars/pickleball-willy.jpg",
    outlet: "Pickleball Willy",
    quote: '"First Foam Paddle With Real Feedback"',
  },
  {
    author: "Pickleball Pursuit",
    avatar: "/images/luzzpickleball/avatars/pickleball-pursuit.png",
    outlet: "Pickleball Pursuit",
    quote: '"ONE OF THE BEST PADDLES I\'VE USED"',
  },
  {
    author: "John Kew Pickleball",
    avatar: "/images/luzzpickleball/avatars/john-kew.png",
    outlet: "John Kew Pickleball",
    quote: '"NO BRAINER"',
  },
  {
    author: "West Side Pickleball",
    avatar: "/images/luzzpickleball/avatars/west-side.png",
    outlet: "West Side Pickleball",
    quote: '"With the BEST price to performance ratio"',
  },
];

export const productTabs: ProductTab[] = [
  {
    id: "pro",
    label: "Pro",
    title: "Pro Paddles",
    href: "https://luzzpickleball.com/collections/pro-series",
    products: [
      {
        name: "Luzz Inferno Frozen Paddle",
        href: "https://luzzpickleball.com/products/luzz-pro-4-frozen-inferno",
        image: "/images/luzzpickleball/products/pro-inferno-frozen.jpg",
        price: "$249.00 USD",
        rating: "5.0",
      },
      {
        name: "Luzz Glider 2026 Hybrid Paddle",
        href: "https://luzzpickleball.com/products/luzz-glider-2026",
        image: "/images/luzzpickleball/products/pro-glider-2026.jpg",
        price: "$119.00 USD",
        rating: "4.9",
        badge: "Pre-order",
      },
      {
        name: "Luzz Cannon Paddle",
        href: "https://luzzpickleball.com/products/luzzpickleball-cannon-paddle-t700-carbon-friction-surface-thermoformed",
        image: "/images/luzzpickleball/products/pro-cannon.jpg",
        price: "From $109.00 USD",
        rating: "4.9",
      },
      {
        name: "Luzz Pro 4 Inferno",
        href: "https://luzzpickleball.com/products/luzzpickleball-pro-4-inferno-mpp-pickleball-paddle-large-sweet-spot-durable-core",
        image: "/images/luzzpickleball/products/pro-inferno.jpg",
        price: "From $229.00 USD",
        rating: "4.9",
      },
      {
        name: "Luzz Kung Fu Panda Cannon",
        href: "https://luzzpickleball.com/products/luzzpickleball-kung-fu-panda-t700-carbon-friction-surface-thermoformed",
        image: "/images/luzzpickleball/products/pro-kung-fu-panda.jpg",
        price: "$119.00 USD",
        rating: "4.9",
      },
      {
        name: "Luzz Candy Cannon",
        href: "https://luzzpickleball.com/products/luzzpickleball-candy-cannon-paddle-t700-carbon-friction-surface-thermoformed",
        image: "/images/luzzpickleball/products/pro-candy-cannon.jpg",
        price: "$114.00 USD",
        rating: "4.9",
      },
    ],
  },
  {
    id: "performance",
    label: "Performance",
    title: "Performance",
    href: "https://luzzpickleball.com/collections/advanced",
    products: [
      {
        name: "Luzz Ultra Fog Original Paddle",
        href: "https://luzzpickleball.com/products/luzzpickleball-ultra-fog-original-paddle-14mm-t700-raw-carbon-fiber-frameless-thermoformed",
        image: "/images/luzzpickleball/products/performance-fog.jpg",
        price: "$79.99 USD",
        compareAt: "$129.00 USD",
        badge: "Sale!",
      },
      {
        name: "Luzz Ultra Guitar Original Paddle",
        href: "https://luzzpickleball.com/products/luzzpickleball-ultra-original-paddle-14mm-t700-raw-carbon-fiber-frameless-thermoformed",
        image: "/images/luzzpickleball/products/performance-guitar.jpg",
        price: "$79.99 USD",
        compareAt: "$129.00 USD",
        badge: "Sale!",
      },
      {
        name: "Luzz Ultra Whisper Original Paddle",
        href: "https://luzzpickleball.com/products/luzzpickleball-ultra-whisper-original-paddle-14mm-t700-raw-carbon-fiber-frameless-thermoformed",
        image: "/images/luzzpickleball/products/performance-whisper.jpg",
        price: "$79.99 USD",
        compareAt: "$129.00 USD",
        badge: "Sale!",
      },
      {
        name: "Imperial Dragon Limited Collection",
        href: "https://luzzpickleball.com/products/luzzpickleball-imperial-dragon-paddle14mmt700-carbon-friction-surface-thermoformed",
        image: "/images/luzzpickleball/products/performance-imperial-dragon.jpg",
        price: "$199.00 USD",
        compareAt: "$269.00 USD",
        badge: "Sold out",
      },
      {
        name: "GoldenVeil Limited Collection",
        href: "https://luzzpickleball.com/products/luzzpickleball-goldenveil",
        image: "/images/luzzpickleball/products/performance-goldenveil.jpg",
        price: "$199.00 USD",
        compareAt: "$259.00 USD",
        badge: "Sale!",
      },
      {
        name: "ZZ Frameless Limited Collection",
        href: "https://luzzpickleball.com/products/luzzpickleball-zz-frameless-paddle14mmt700-carbon-friction-surface-thermoformed",
        image: "/images/luzzpickleball/products/performance-zz.jpg",
        price: "$199.00 USD",
        compareAt: "$269.00 USD",
        badge: "Sold out",
      },
    ],
  },
  {
    id: "infinity",
    label: "Infinity",
    title: "Infinity Paddles",
    href: "https://luzzpickleball.com/collections/infinity-series-us",
    products: [
      {
        name: "Luzz Infinity Paddles Set of 2",
        href: "https://luzzpickleball.com/products/luzz-infinity-paddles-set-of-2-t700-carbon-fiber-sandblasted-christmas-gift",
        image: "/images/luzzpickleball/products/infinity-set.jpg",
        price: "$59.98 USD",
        compareAt: "$99.00 USD",
        badge: "Sale!",
      },
      {
        name: "Luzz Guitar Groove Original Paddle",
        href: "https://luzzpickleball.com/products/luzzpickleball-guitar-groove-original-paddle-16mm-t700-carbon-fiber-us",
        image: "/images/luzzpickleball/products/infinity-guitar-groove.jpg",
        price: "$29.99 USD",
        compareAt: "$59.99 USD",
        badge: "Sale!",
      },
      {
        name: "Luzz Bunny Blitz Original Paddle",
        href: "https://luzzpickleball.com/products/luzzpickleball-bunny-blitz-original-paddle-16mm-t700-carbon-fiber-us",
        image: "/images/luzzpickleball/products/infinity-bunny-blitz.jpg",
        price: "$29.99 USD",
        compareAt: "$59.99 USD",
        badge: "Sale!",
      },
      {
        name: "Luzz Purr Original Paddle",
        href: "https://luzzpickleball.com/products/luzzpickleball-purr-original-paddle-16mm-t700-carbon-fiber-sandblasted-surface-us",
        image: "/images/luzzpickleball/products/infinity-purr.jpg",
        price: "$29.99 USD",
        compareAt: "$59.99 USD",
        badge: "Sale!",
      },
      {
        name: "Luzz Butterfly Original Paddle",
        href: "https://luzzpickleball.com/products/luzzpickleball-butterfly-original-paddle-16mm-t700-carbon-fiber-us",
        image: "/images/luzzpickleball/products/infinity-butterfly.jpg",
        price: "$29.99 USD",
        compareAt: "$59.99 USD",
        badge: "Sale!",
      },
    ],
  },
];

export const luzzGoBody =
  "We believe pickleball should be played more often, more confidently, and with zero friction. We're committed to removing excuses, through better design, better performance, and gear that earns its place on court. When you're ready to play, we are too. LUZZ GO!";

export const warrantyBody =
  "We don't just talk about quality, we guarantee it. Every Luzz Pro paddle is backed by a full 12-month warranty. Because when you build paddles this tough, you can stand behind them without hesitation.";

export const videoReviews: VideoReview[] = [
  {
    quote: '"The Luzz Cannon punches way above its weight class in price."',
    author: "The Honest Take",
    outlet: "The Honest Take",
    href: "https://luzzpickleball.com/collections/cannon-paddle",
    thumbnail: "/images/luzzpickleball/reviews/review-honest-take.jpg",
    avatar: "/images/luzzpickleball/avatars/the-honest-take.jpg",
  },
  {
    quote: '"The Best Budget Gen-3 Paddle Yet?"',
    author: "Matt's Pickleball",
    outlet: "Matt's Pickleball",
    href: "https://luzzpickleball.com/collections/cannon-paddle",
    thumbnail: "/images/luzzpickleball/reviews/review-matts-pickleball.jpg",
    avatar: "/images/luzzpickleball/avatars/matts-pickleball.jpg",
  },
  {
    quote: '"THIS Paddle Is An Absolute STEAL"',
    author: "Chris Wilson",
    outlet: "Chris Wilson",
    href: "https://luzzpickleball.com/collections/cannon-paddle",
    thumbnail: "/images/luzzpickleball/reviews/review-chris-wilson.jpg",
    avatar: "/images/luzzpickleball/avatars/chris-wilson.jpg",
  },
  {
    quote: '"They\'re honestly all very solid paddles"',
    author: "Tickle My Pickleball",
    outlet: "Tickle My Pickleball",
    href: "https://luzzpickleball.com/collections/all",
    thumbnail: "/images/luzzpickleball/reviews/review-tickle-my-pickleball.jpg",
    avatar: "/images/luzzpickleball/avatars/tickle-my-pickleball.jpg",
  },
];

export const collectionCards: CollectionCard[] = [
  {
    title: "Pro Series",
    description: "Professional grade equipment",
    href: "https://luzzpickleball.com/collections/pro-series",
    image: "/images/luzzpickleball/collections/pro-series.jpg",
  },
  {
    title: "Infinity Series",
    description: "Perfect Paddle For Beginners",
    href: "https://luzzpickleball.com/collections/infinityseries-pickleball-paddles",
    image: "/images/luzzpickleball/collections/infinity-series.png",
  },
  {
    title: "Pickleball Bag",
    description: "Complete sets",
    href: "https://luzzpickleball.com/collections/pickleball-paddle-bag",
    image: "/images/luzzpickleball/collections/pickleball-bag.png",
  },
  {
    title: "Accessories",
    description: "Essential gear",
    href: "https://luzzpickleball.com/collections/pickleball-accessories",
    image: "/images/luzzpickleball/collections/accessories.png",
  },
  {
    title: "New Arrivals",
    description: "Latest products",
    href: "https://luzzpickleball.com/collections/new-arrivals",
    image: "/images/luzzpickleball/collections/new-arrivals.png",
  },
];

export const universalCollab = {
  title: "Universally loved paddles",
  logo: "/images/luzzpickleball/luzz-x-universal.svg",
  body:
    "Some things are just universally loved.\nWe teamed up with Universal Pictures to turn iconic characters into high-performance paddles, so whether you channel panda power, minion mayhem, you're bringing personality and precision to every rally.",
  banners: [
    {
      href: "https://luzzpickleball.com/collections/kung-fu-panda",
      image: "/images/luzzpickleball/universal/kung-fu-panda.jpg",
      label: "Kung Fu Panda Collection",
    },
    {
      href: "https://luzzpickleball.com/collections/minions-mania",
      image: "/images/luzzpickleball/universal/minions.jpg",
      label: "Minions Mania Collection",
    },
  ],
};

export const faqItems: FaqItem[] = [
  {
    question: "DO YOU SHIP INTERNATIONALLY?",
    answer:
      "Yes, we offer worldwide shipping. As long as you can place an order and complete the purchase, we can ship it to you.",
  },
  {
    question: "HOW LONG DOES SHIPPING TAKE?",
    answer: "For detailed shipping times by region, please view our shipping policy.",
    href: "https://luzzpickleball.com/pages/shipping-policy",
    hrefLabel: "Shipping policy",
  },
  {
    question: "WHAT WARRANTY DO YOU OFFER?",
    answer: "We offer a 12-month warranty on all paddles, covering manufacturing defects.",
    href: "https://luzzpickleball.com/pages/warranty",
    hrefLabel: "Warranty details",
  },
  {
    question: "HOW TO TRACK MY ORDER?",
    answer: "You can track your order using your order number or tracking number here.",
    href: "https://luzzpickleball.com/apps/parcelpanel",
    hrefLabel: "Track order",
  },
  {
    question: "HOW TO FIND A COURT NEAR ME TO TRY LUZZ?",
    answer: "Use our court finder to locate a nearby pickleball court or partner location.",
    href: "https://luzzpickleball.com/pages/find-your-nearest-luzz-pickleball-court",
    hrefLabel: "Court finder",
  },
];

export const teamMembers: TeamMember[] = [
  { name: "Chris Haworth", image: "/images/luzzpickleball/team/chris-haworth.png" },
  { name: "Kaitlyn Christian", image: "/images/luzzpickleball/team/kaitlyn-christian.jpg" },
  { name: "Roscoe Bellamy", image: "/images/luzzpickleball/team/roscoe-bellamy.jpg" },
  { name: "Ammar Wazirr", image: "/images/luzzpickleball/team/ammar-wazirr.png" },
  { name: "Kim Eung Gwon", image: "/images/luzzpickleball/team/kim-eung-gwon.jpg" },
  { name: "Dusty Boyer", image: "/images/luzzpickleball/team/dusty-boyer.jpg" },
];

export const socialLinks: LuzzLink[] = [
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61560379315878" },
  { label: "Instagram", href: "https://www.instagram.com/luzzpickleball/" },
  { label: "YouTube", href: "https://www.youtube.com/@Luzzpickleball" },
  { label: "TikTok", href: "https://www.tiktok.com/@luzzpickleball" },
  { label: "Pinterest", href: "https://www.pinterest.com/luzzpickleball_official" },
];

export const legalLinks: LuzzLink[] = [
  { label: "Refund policy", href: "https://luzzpickleball.com/policies/refund-policy" },
  { label: "Privacy policy", href: "https://luzzpickleball.com/policies/privacy-policy" },
  { label: "Terms of service", href: "https://luzzpickleball.com/policies/terms-of-service" },
  { label: "Shipping policy", href: "https://luzzpickleball.com/policies/shipping-policy" },
  { label: "Contact information", href: "https://luzzpickleball.com/policies/contact-information" },
];
