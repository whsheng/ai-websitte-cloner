import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import { faqItems, socialLinks, teamMembers } from "@/lib/luzz-data";
import {
  cloneLink,
  cloneLinks,
  getAccountPageCopy,
  getBreadcrumbsForCollection,
  getBreadcrumbsForProduct,
  getCartPageCopy,
  getProductsForCollection,
  getSearchKeywords,
  getSearchResultProducts,
  getTrackingPage,
  siteCollections,
  siteFooterGroups,
  siteLegalLinks,
  sitePrimaryNavLinks,
  siteProducts,
  toLocalHref,
} from "@/lib/luzz-site";
import type {
  BlogPage,
  CollectionDetail,
  ContentPage,
  PolicyPage,
  ProductDetail,
} from "@/types/luzz";

function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-black/8 bg-white/92 backdrop-blur-md">
      <div className="luzz-container flex flex-col gap-4 py-4">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="relative h-11 w-24 shrink-0">
            <Image src="/images/luzzpickleball/luzz-white.svg" alt="Luzzpickleball" fill className="object-contain invert" />
          </Link>
          <nav className="hidden items-center gap-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#111111] xl:flex">
            {sitePrimaryNavLinks.map((link) => (
              <Link key={link.label} href={link.href} className="hover:text-[#0075da]">
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3 text-sm text-[#111111]/70">
            <Link href="/search" className="hover:text-[#0075da]">
              Search
            </Link>
            <Link href="/account/login" className="hover:text-[#0075da]">
              Account
            </Link>
            <Link href="/cart" className="rounded-full border border-black/10 px-3 py-1.5 font-medium text-[#111111] hover:border-[#0075da] hover:text-[#0075da]">
              Cart
            </Link>
          </div>
        </div>
        <form action="/search" method="get" role="search" className="flex items-center gap-3 rounded-full border border-black/8 bg-white px-4 py-3 shadow-[0_10px_24px_rgba(0,0,0,0.06)] lg:hidden">
          <input
            type="search"
            name="q"
            placeholder="What are you looking for?"
            aria-label="Search the site"
            className="min-w-0 flex-1 bg-transparent text-sm text-[#111111] placeholder:text-[#111111]/45 focus:outline-none"
          />
          <button type="submit" className="text-sm font-medium text-[#111111]/70 hover:text-[#0075da]">
            Search
          </button>
        </form>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-black/8 bg-white py-8">
      <div className="luzz-container space-y-8">
        <div className="grid gap-8 md:grid-cols-[minmax(0,220px)_1fr]">
          <div>
            <p className="font-heading text-3xl text-[#111111]">Luzzpickleball</p>
            <p className="mt-4 text-sm leading-7 text-[#111111]/65">
              Performance-driven paddles and accessories built to remove friction and get you on court faster.
            </p>
            <div className="mt-5 flex flex-wrap gap-3 text-sm font-medium text-[#242833]">
              {socialLinks.map((link) => (
                <Link key={link.label} href={link.href} className="hover:text-[#0075da]">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {siteFooterGroups.map((group) => (
              <div key={group.title}>
                <h3 className="font-heading text-2xl text-[#111111]">{group.title}</h3>
                <ul className="mt-4 space-y-3 text-sm text-[#111111]/70">
                  {cloneLinks(group.links).map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="hover:text-[#0075da]">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4 border-t border-black/8 pt-5 text-xs text-[#111111]/55 md:flex-row md:items-center md:justify-between">
          <p>&copy; 2026, Luzzpickleball</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {siteLegalLinks.map((link) => (
              <Link key={link.label} href={link.href} className="hover:text-[#0075da]">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function PageHero({
  body,
  cta,
  description,
  eyebrow,
  title,
}: Readonly<{
  body?: string;
  cta?: { href: string; label: string };
  description: string;
  eyebrow: string;
  title: string;
}>) {
  return (
    <section className="bg-[linear-gradient(180deg,#242833_0%,#1f222c_100%)] py-16 text-white md:py-20">
      <div className="luzz-container grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,360px)] lg:items-end">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/65">{eyebrow}</p>
          <h1 className="mt-4 font-heading text-5xl leading-none md:text-7xl">{title}</h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-white/72 md:text-lg">{description}</p>
          {body ? <p className="mt-6 max-w-3xl whitespace-pre-line text-sm leading-7 text-white/64 md:text-base">{body}</p> : null}
        </div>
        {cta ? (
          <div className="rounded-2xl border border-white/10 bg-white/6 p-6 backdrop-blur-sm">
            <p className="text-sm leading-7 text-white/72">Continue deeper into the cloned site without leaving localhost.</p>
            <Link
              href={cta.href}
              className="mt-5 inline-flex rounded-md bg-[#0075da] px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white hover:bg-[#0b66bc]"
            >
              {cta.label}
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}

function Breadcrumbs({ items }: Readonly<{ items: Array<{ href: string; label: string }> }>) {
  return (
    <nav className="text-xs uppercase tracking-[0.18em] text-[#111111]/50">
      <div className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => (
          <span key={item.href} className="flex items-center gap-2">
            {index > 0 ? <span>/</span> : null}
            <Link href={item.href} className="hover:text-[#0075da]">
              {item.label}
            </Link>
          </span>
        ))}
      </div>
    </nav>
  );
}

function ProductCardGrid({ products }: Readonly<{ products: ProductDetail[] }>) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {products.map((product) => (
        <article
          key={product.slug}
          className="group overflow-hidden rounded-[14px] border border-black/8 bg-white shadow-[0_20px_40px_rgba(0,0,0,0.06)]"
        >
          <Link href={toLocalHref(product.href)} className="block">
            <div className="relative aspect-square overflow-hidden bg-[#f6f6f6]">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(min-width: 1280px) 30vw, (min-width: 640px) 45vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              {product.badge ? (
                <span className="absolute right-3 top-3 rounded-full bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#242833] shadow-sm">
                  {product.badge}
                </span>
              ) : null}
            </div>
            <div className="space-y-4 p-5 text-center">
              <div>
                <h3 className="text-base font-semibold text-[#111111] md:text-lg">{product.name}</h3>
                {product.rating ? (
                  <div className="mt-2 flex items-center justify-center gap-2 text-[#111111]">
                    <span className="text-[11px] tracking-[0.18em]" aria-hidden="true">
                      ★★★★★
                    </span>
                    <b className="text-sm">{product.rating}</b>
                  </div>
                ) : null}
              </div>
              <div className="space-y-1">
                <p className="text-lg font-semibold text-[#111111]">{product.price}</p>
                {product.compareAt ? <p className="text-sm text-[#111111]/45 line-through">{product.compareAt}</p> : null}
              </div>
            </div>
          </Link>
        </article>
      ))}
    </div>
  );
}

export function ProductPageView({ product }: Readonly<{ product: ProductDetail }>) {
  const relatedCollections = product.collectionSlugs
    .map((slug) => siteCollections.find((collection) => collection.slug === slug))
    .filter((collection): collection is CollectionDetail => Boolean(collection));
  const relatedProducts = relatedCollections.length > 0 ? getProductsForCollection(relatedCollections[0].slug).filter((item) => item.slug !== product.slug).slice(0, 3) : [];

  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <PageHero eyebrow={product.series} title={product.name} description={product.description} body={product.tagline} />
      <main className="luzz-container space-y-14 py-12 md:py-16">
        <Breadcrumbs items={getBreadcrumbsForProduct(product)} />
        <section className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,460px)] lg:items-start">
          <div className="relative aspect-square overflow-hidden rounded-[26px] bg-[#f6f6f6] shadow-[0_24px_48px_rgba(0,0,0,0.08)]">
            <Image src={product.image} alt={product.name} fill sizes="(min-width: 1024px) 46vw, 100vw" className="object-cover" />
          </div>
          <div className="space-y-8">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#0075da]">{product.series}</p>
              <h2 className="mt-3 font-heading text-4xl text-[#111111] md:text-5xl">{product.name}</h2>
              <p className="mt-4 text-lg font-semibold text-[#111111]">{product.price}</p>
              {product.compareAt ? <p className="mt-1 text-sm text-[#111111]/45 line-through">{product.compareAt}</p> : null}
              {product.rating ? <p className="mt-3 text-sm font-medium text-[#111111]/72">Rated {product.rating} out of 5.0 on the source homepage</p> : null}
            </div>
            <p className="text-base leading-8 text-[#111111]/72">{product.body}</p>
            <div className="grid gap-4 rounded-2xl border border-black/8 bg-[#f6f6f6] p-6">
              <h3 className="font-heading text-3xl text-[#111111]">Quick Specs</h3>
              <dl className="grid gap-4 sm:grid-cols-2">
                {product.specs.map((spec) => (
                  <div key={spec.label} className="rounded-xl bg-white p-4">
                    <dt className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#111111]/45">{spec.label}</dt>
                    <dd className="mt-2 text-base font-semibold text-[#111111]">{spec.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div>
              <h3 className="font-heading text-3xl text-[#111111]">Highlights</h3>
              <ul className="mt-4 grid gap-3">
                {product.features.map((feature) => (
                  <li key={feature} className="rounded-xl border border-black/8 px-4 py-3 text-sm leading-7 text-[#111111]/72">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            {relatedCollections.length > 0 ? (
              <div className="flex flex-wrap gap-3">
                {relatedCollections.map((collection) => (
                  <Link
                    key={collection.slug}
                    href={toLocalHref(collection.href)}
                    className="rounded-full border border-black/10 px-4 py-2 text-sm font-medium text-[#111111] hover:border-[#0075da] hover:text-[#0075da]"
                  >
                    {collection.title}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>
        </section>
        {relatedProducts.length > 0 ? (
          <section className="space-y-6">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#0075da]">Related</p>
                <h3 className="mt-2 font-heading text-4xl text-[#111111]">More from this collection</h3>
              </div>
              <Link href={toLocalHref(relatedCollections[0].href)} className="text-sm font-semibold uppercase tracking-[0.18em] text-[#111111] hover:text-[#0075da]">
                View collection
              </Link>
            </div>
            <ProductCardGrid products={relatedProducts} />
          </section>
        ) : null}
      </main>
      <SiteFooter />
    </div>
  );
}

export function CollectionPageView({ collection }: Readonly<{ collection: CollectionDetail }>) {
  const products = getProductsForCollection(collection.slug);

  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <PageHero eyebrow={collection.eyebrow} title={collection.title} description={collection.description} body={collection.body} />
      <main className="luzz-container space-y-12 py-12 md:py-16">
        <Breadcrumbs items={getBreadcrumbsForCollection(collection)} />
        <section className="grid gap-8 rounded-[28px] bg-[#f6f6f6] p-6 md:grid-cols-[minmax(0,1fr)_minmax(0,320px)] md:p-8">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#0075da]">Collection Overview</p>
            <h2 className="mt-3 font-heading text-4xl text-[#111111] md:text-5xl">{collection.title}</h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-[#111111]/72">{collection.body}</p>
            <p className="mt-5 text-sm leading-7 text-[#111111]/58">
              This local route currently includes {products.length} featured products cloned from the homepage merchandising data.
            </p>
          </div>
          <div className="relative aspect-[5/4] overflow-hidden rounded-[22px] bg-white shadow-[0_24px_48px_rgba(0,0,0,0.06)]">
            <Image src={collection.image} alt={collection.title} fill sizes="(min-width: 768px) 320px, 100vw" className="object-cover" />
          </div>
        </section>
        <section className="space-y-6">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#0075da]">Products</p>
              <h3 className="mt-2 font-heading text-4xl text-[#111111]">Browse the collection</h3>
            </div>
            <Link href="/collections/all" className="text-sm font-semibold uppercase tracking-[0.18em] text-[#111111] hover:text-[#0075da]">
              View all collections
            </Link>
          </div>
          <ProductCardGrid products={products} />
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

export function ContentPageLayout({
  page,
  extras,
}: Readonly<{
  page: BlogPage | ContentPage | PolicyPage;
  extras?: ReactNode;
}>) {
  const title = "eyebrow" in page ? page.title : page.title;
  const description = page.description;
  const eyebrow = "eyebrow" in page ? page.eyebrow : "Information";
  const cta = "cta" in page ? page.cta : undefined;

  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <PageHero eyebrow={eyebrow} title={title} description={description} cta={cta ? cloneLink(cta) : undefined} />
      <main className="luzz-container space-y-8 py-12 md:py-16">
        <div className="grid gap-6 rounded-[28px] border border-black/8 bg-white p-6 shadow-[0_24px_48px_rgba(0,0,0,0.05)] md:p-8">
          {page.body.map((paragraph) => (
            <p key={paragraph} className="whitespace-pre-line text-base leading-8 text-[#111111]/72">
              {paragraph}
            </p>
          ))}
        </div>
        {extras}
      </main>
      <SiteFooter />
    </div>
  );
}

export function ContentPageView({ page }: Readonly<{ page: BlogPage | ContentPage | PolicyPage }>) {
  return <ContentPageLayout page={page} />;
}

export function SearchPageView({ query }: Readonly<{ query?: string }>) {
  const normalized = query?.trim() ?? "";
  const keywords = getSearchKeywords();
  const products = getSearchResultProducts().filter((product) => {
    if (!normalized) {
      return true;
    }

    const haystack = `${product.name} ${product.series} ${product.description}`.toLowerCase();
    return haystack.includes(normalized.toLowerCase());
  });

  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <PageHero
        eyebrow="Search"
        title={normalized ? `Search results for "${normalized}"` : "Search"}
        description="A local search route preserving the source site's search flows without redirecting back to Shopify."
      />
      <main className="luzz-container space-y-10 py-12 md:py-16">
        <section className="rounded-[24px] bg-[#f6f6f6] p-6 md:p-8">
          <form action="/search" method="get" className="flex flex-col gap-4 md:flex-row">
            <input
              type="search"
              name="q"
              defaultValue={normalized}
              placeholder="What are you looking for?"
              className="min-w-0 flex-1 rounded-full border border-black/8 bg-white px-5 py-3 text-sm text-[#111111] placeholder:text-[#111111]/45 focus:outline-none"
            />
            <button type="submit" className="rounded-full bg-[#242833] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white hover:bg-[#0075da]">
              Search
            </button>
          </form>
          <div className="mt-5 flex flex-wrap gap-3">
            {keywords.map((keyword) => (
              <Link
                key={keyword}
                href={`/search?q=${encodeURIComponent(keyword)}`}
                className="rounded-full border border-black/10 px-4 py-2 text-sm font-medium text-[#111111]/72 hover:border-[#0075da] hover:text-[#0075da]"
              >
                {keyword}
              </Link>
            ))}
          </div>
        </section>
        <section className="space-y-6">
          <h2 className="font-heading text-4xl text-[#111111] md:text-5xl">
            {products.length} result{products.length === 1 ? "" : "s"}
          </h2>
          <ProductCardGrid products={products} />
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

export function CartPageView() {
  const page = getCartPageCopy();

  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <PageHero
        eyebrow="Cart"
        title={page.title}
        description={page.description}
      />
      <main className="luzz-container py-12 md:py-16">
        <div className="rounded-[28px] border border-black/8 bg-[#f6f6f6] p-8 text-center">
          {page.body.map((paragraph) => (
            <p key={paragraph} className="mx-auto max-w-2xl text-base leading-8 text-[#111111]/72">
              {paragraph}
            </p>
          ))}
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link href="/" className="rounded-full bg-[#242833] px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white hover:bg-[#0075da]">
              Back to home
            </Link>
            <Link href="/collections/all" className="rounded-full border border-black/10 px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#111111] hover:border-[#0075da] hover:text-[#0075da]">
              Shop all paddles
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

export function AccountPageView() {
  const page = getAccountPageCopy();

  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <PageHero eyebrow="Account" title={page.title} description={page.description} />
      <main className="luzz-container py-12 md:py-16">
        <div className="grid gap-6 rounded-[28px] border border-black/8 bg-white p-6 shadow-[0_24px_48px_rgba(0,0,0,0.05)] md:p-8 lg:grid-cols-2">
          <div className="rounded-[22px] bg-[#f6f6f6] p-6">
            <h2 className="font-heading text-3xl text-[#111111]">Login is not wired</h2>
            {page.body.map((paragraph) => (
              <p key={paragraph} className="mt-4 text-base leading-8 text-[#111111]/72">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="rounded-[22px] border border-black/8 p-6">
            <h3 className="font-heading text-2xl text-[#111111]">Continue browsing</h3>
            <ul className="mt-4 space-y-3 text-sm text-[#111111]/72">
              <li>
                <Link href="/collections/all" className="hover:text-[#0075da]">
                  Browse all paddles
                </Link>
              </li>
              <li>
                <Link href="/pages/team-luzz" className="hover:text-[#0075da]">
                  Meet Team Luzz
                </Link>
              </li>
              <li>
                <Link href="/pages/faq" className="hover:text-[#0075da]">
                  Read FAQs
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

export function TrackingPageView() {
  const page = getTrackingPage();

  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <PageHero eyebrow={page.eyebrow} title={page.title} description={page.description} />
      <main className="luzz-container py-12 md:py-16">
        <div className="grid gap-6 rounded-[28px] border border-black/8 bg-white p-6 shadow-[0_24px_48px_rgba(0,0,0,0.05)] md:p-8 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div className="space-y-4">
            {page.body.map((paragraph) => (
              <p key={paragraph} className="text-base leading-8 text-[#111111]/72">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="rounded-[22px] bg-[#f6f6f6] p-6">
            <h2 className="font-heading text-3xl text-[#111111]">Continue locally</h2>
            <div className="mt-5 flex flex-col gap-3">
              <Link href="/pages/faq" className="rounded-full bg-[#242833] px-5 py-3 text-center text-sm font-semibold uppercase tracking-[0.18em] text-white hover:bg-[#0075da]">
                Read FAQs
              </Link>
              <Link href="/pages/shipping-policy" className="rounded-full border border-black/10 px-5 py-3 text-center text-sm font-semibold uppercase tracking-[0.18em] text-[#111111] hover:border-[#0075da] hover:text-[#0075da]">
                Shipping page
              </Link>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

export function NotFoundPageView() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <PageHero
        eyebrow="Not Found"
        title="This route is not cloned yet"
        description="The site is being expanded from the homepage outward. The route you requested does not have a local implementation yet."
      />
      <main className="luzz-container space-y-10 py-12 md:py-16">
        <section className="rounded-[28px] bg-[#f6f6f6] p-8">
          <p className="max-w-3xl text-base leading-8 text-[#111111]/72">
            You can still continue through the homepage, product detail pages, collection pages, support pages, and other internal routes that have already been cloned locally.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/" className="rounded-full bg-[#242833] px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white hover:bg-[#0075da]">
              Home
            </Link>
            <Link href="/collections/all" className="rounded-full border border-black/10 px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#111111] hover:border-[#0075da] hover:text-[#0075da]">
              Collections
            </Link>
            <Link href="/search" className="rounded-full border border-black/10 px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#111111] hover:border-[#0075da] hover:text-[#0075da]">
              Search
            </Link>
          </div>
        </section>
        <section className="grid gap-5 md:grid-cols-3">
          {siteCollections.slice(0, 3).map((collection) => (
            <Link
              key={collection.slug}
              href={toLocalHref(collection.href)}
              className="group overflow-hidden rounded-[22px] border border-black/8 bg-white shadow-[0_20px_40px_rgba(0,0,0,0.05)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#f6f6f6]">
                <Image src={collection.image} alt={collection.title} fill sizes="(min-width: 768px) 30vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
              </div>
              <div className="p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#0075da]">{collection.eyebrow}</p>
                <h3 className="mt-2 font-heading text-3xl text-[#111111]">{collection.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#111111]/65">{collection.description}</p>
              </div>
            </Link>
          ))}
        </section>
        <section className="grid gap-5 md:grid-cols-3">
          {siteProducts.slice(0, 3).map((product) => (
            <Link
              key={product.slug}
              href={toLocalHref(product.href)}
              className="group rounded-[22px] border border-black/8 bg-white p-5 shadow-[0_20px_40px_rgba(0,0,0,0.05)]"
            >
              <div className="relative aspect-square overflow-hidden rounded-[18px] bg-[#f6f6f6]">
                <Image src={product.image} alt={product.name} fill sizes="(min-width: 768px) 30vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
              </div>
              <h3 className="mt-4 font-heading text-2xl text-[#111111]">{product.name}</h3>
              <p className="mt-2 text-sm leading-7 text-[#111111]/65">{product.tagline}</p>
            </Link>
          ))}
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

export function TeamPageExtras() {
  return (
    <section className="grid gap-5 md:grid-cols-3">
      {teamMembers.slice(0, 3).map((member) => (
        <article key={member.name} className="overflow-hidden rounded-[22px] border border-black/8 bg-white shadow-[0_20px_40px_rgba(0,0,0,0.05)]">
          <div className="relative aspect-[4/5] bg-[#f6f6f6]">
            <Image src={member.image} alt={member.name} fill sizes="(min-width: 768px) 30vw, 100vw" className="object-cover" />
          </div>
          <div className="p-5">
            <h3 className="font-heading text-2xl text-[#111111]">{member.name}</h3>
          </div>
        </article>
      ))}
    </section>
  );
}

export function FaqPageExtras() {
  return (
    <section className="grid gap-3">
      {faqItems.map((item, index) => (
        <article key={item.question} className="rounded-[18px] border border-black/8 bg-white p-5">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#111111]/45">{index + 1}</p>
          <h3 className="mt-2 font-heading text-2xl text-[#111111]">{item.question}</h3>
          <p className="mt-3 text-sm leading-7 text-[#111111]/65">{item.answer}</p>
          {item.href ? (
            <Link href={toLocalHref(item.href)} className="mt-3 inline-flex text-sm font-semibold text-[#0075da] hover:text-[#242833]">
              {item.hrefLabel}
            </Link>
          ) : null}
        </article>
      ))}
    </section>
  );
}
