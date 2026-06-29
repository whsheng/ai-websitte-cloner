export type LuzzLink = {
  href: string;
  label: string;
};

export type HeroSlide = {
  alt: string;
  href: string;
  image: string;
};

export type MarqueeQuote = {
  author: string;
  avatar: string;
  outlet: string;
  quote: string;
};

export type ProductCard = {
  badge?: string;
  compareAt?: string;
  href: string;
  image: string;
  name: string;
  price: string;
  rating?: string;
};

export type ProductSpec = {
  label: string;
  value: string;
};

export type ProductDetail = ProductCard & {
  body: string;
  collectionSlugs: string[];
  description: string;
  series: string;
  slug: string;
  specs: ProductSpec[];
  tagline: string;
  features: string[];
};

export type ProductTab = {
  href: string;
  id: string;
  label: string;
  products: ProductCard[];
  title: string;
};

export type CollectionDetail = {
  body: string;
  description: string;
  eyebrow: string;
  href: string;
  image: string;
  productSlugs: string[];
  slug: string;
  title: string;
};

export type VideoReview = {
  author: string;
  avatar: string;
  href: string;
  outlet: string;
  quote: string;
  thumbnail: string;
};

export type CollectionCard = {
  description: string;
  href: string;
  image: string;
  title: string;
};

export type FaqItem = {
  answer: string;
  href?: string;
  hrefLabel?: string;
  question: string;
};

export type TeamMember = {
  image: string;
  name: string;
};

export type FooterGroup = {
  links: LuzzLink[];
  title: string;
};

export type ContentPage = {
  body: string[];
  cta?: LuzzLink;
  description: string;
  eyebrow: string;
  href: string;
  slug: string;
  title: string;
};

export type PolicyPage = {
  body: string[];
  description: string;
  href: string;
  slug: string;
  title: string;
};

export type BlogPage = {
  body: string[];
  description: string;
  eyebrow: string;
  href: string;
  slug: string;
  title: string;
};
