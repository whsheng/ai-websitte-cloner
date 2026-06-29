"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useEffectEvent, useRef, useState } from "react";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Camera,
  Mail,
  Play,
  X,
} from "lucide-react";

import {
  announcementMessages,
  collectionCards,
  faqItems,
  heroSlides,
  legalLinks,
  luzzGoBody,
  marqueeQuotes,
  productTabs,
  socialLinks,
  teamMembers,
  universalCollab,
  videoReviews,
  warrantyBody,
} from "@/lib/luzz-data";
import { cloneLinks, toLocalHref } from "@/lib/luzz-site";

const siteLegalLinks = cloneLinks(legalLinks);

type HeaderMenuLink = {
  href: string;
  label: string;
};

type HeaderMenuSection = {
  links: HeaderMenuLink[];
  title: string;
};

type HeaderMenuItem =
  | {
      href: string;
      kind: "link";
      label: string;
    }
  | {
      href: string;
      kind: "dropdown";
      label: string;
      links: HeaderMenuLink[];
    }
  | {
      href: string;
      kind: "mega";
      label: string;
      promo: {
        alt: string;
        href: string;
        image: string;
        title: string;
      };
      sections: HeaderMenuSection[];
    };

const desktopHeaderMenu: HeaderMenuItem[] = [
  {
    kind: "mega",
    label: "Paddles",
    href: "/collections/all",
    sections: [
      {
        title: "Series",
        links: [
          { label: "Cannon", href: "/collections/cannon-paddle" },
          { label: "Inferno", href: "/collections/pro-series" },
          { label: "Tornazo", href: "/collections/pro-series" },
          { label: "Glider", href: "/products/luzz-glider-2026" },
        ],
      },
      {
        title: "Shape",
        links: [
          { label: "Elongated", href: "/collections/pro-series" },
          { label: "Hybrid", href: "/products/luzz-glider-2026" },
          { label: "Frameless", href: "/collections/advanced" },
        ],
      },
      {
        title: "Core",
        links: [
          { label: "Foam Core", href: "/collections/pro-series" },
          { label: "PP Honeycomb Core", href: "/collections/advanced" },
        ],
      },
      {
        title: "Skill Level",
        links: [
          { label: "Beginner", href: "/collections/infinityseries-pickleball-paddles" },
          { label: "Intermediate", href: "/collections/advanced" },
          { label: "Pro", href: "/collections/pro-series" },
        ],
      },
      {
        title: "Thickness",
        links: [
          { label: "16 mm", href: "/collections/infinity-series-us" },
          { label: "14 mm", href: "/collections/advanced" },
        ],
      },
    ],
    promo: {
      title: "Universal Collection",
      href: "/collections/universal-co-branding",
      image: "/images/luzzpickleball/universal/kung-fu-panda.jpg",
      alt: "Universal Collection promo",
    },
  },
  {
    kind: "dropdown",
    label: "Accessories",
    href: "/collections/pickleball-accessories",
    links: [
      { label: "Bags & Covers", href: "/collections/pickleball-paddle-bag" },
      { label: "Accessories", href: "/collections/pickleball-accessories" },
      { label: "Pickleball Nets", href: "/collections/pickleball-accessories" },
      { label: "Paddle Grip Tape", href: "/collections/pickleball-accessories" },
      { label: "Balls", href: "/collections/pickleball-accessories" },
      { label: "Apparel", href: "/collections/all" },
    ],
  },
  {
    kind: "dropdown",
    label: "Resources",
    href: "/blogs/pickleball-lessons",
    links: [
      { label: "Tutorials", href: "/blogs/pickleball-lessons" },
      { label: "Sponsorship", href: "/pages/sponsorship" },
      { label: "Retailer", href: "/pages/become-a-dealer" },
      { label: "Court Finder", href: "/pages/find-your-nearest-luzz-pickleball-court" },
      { label: "Careers", href: "/pages/hire" },
      { label: "News", href: "/blogs/news" },
    ],
  },
  {
    kind: "dropdown",
    label: "Idea & Lab",
    href: "/pages/luzz-lab-phase-02",
    links: [
      { label: "Luzz LAB Phase 02", href: "/pages/luzz-lab-phase-02" },
      { label: "Luzz Idea", href: "/pages/designidea" },
      { label: "Rare Cannon", href: "/pages/rare-cannon-1" },
    ],
  },
  {
    kind: "dropdown",
    label: "Customer Care",
    href: "/pages/faq",
    links: [
      { label: "Track Your Order", href: "/apps/parcelpanel" },
      { label: "Shipping", href: "/pages/shipping-policy" },
      { label: "Returns & Refunds", href: "/policies/refund-policy" },
      { label: "Warranty", href: "/pages/warranty" },
      { label: "Contact Us", href: "/pages/contact-us" },
      { label: "FAQ", href: "/pages/faq" },
      { label: "About Us", href: "/pages/about-us" },
    ],
  },
  {
    kind: "link",
    label: "Team Luzz",
    href: "/pages/team-luzz",
  },
];

const utilitySocialLinks = socialLinks.slice(0, 5);
const announcementSlides = [
  {
    href: "/pages/luzz-lab-phase-02",
    label: announcementMessages[2],
    showArrow: true,
  },
  {
    href: "/",
    label: announcementMessages[0],
    showArrow: false,
  },
  {
    href: "/",
    label: announcementMessages[1],
    showArrow: false,
  },
];

function AnnouncementBar() {
  const [index, setIndex] = useState(0);
  const advance = useEffectEvent(() => {
    setIndex((current) => (current + 1) % announcementSlides.length);
  });
  const retreat = () => {
    setIndex((current) => (current - 1 + announcementSlides.length) % announcementSlides.length);
  };
  const activeSlide = announcementSlides[index];

  useEffect(() => {
    const timer = window.setInterval(() => advance(), 3200);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="border-b border-black/7 bg-white">
      <div className="luzz-container grid grid-cols-[auto_1fr_auto] items-center gap-4 py-[0.42rem]">
        <div className="flex items-center gap-[0.55rem]">
          {utilitySocialLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              aria-label={link.label}
              target="_blank"
              rel="noreferrer"
              className="luzz-utility-social-link text-[#111111]"
            >
              <SocialGlyph label={link.label} />
            </Link>
          ))}
        </div>
        <div className="flex items-center justify-center gap-3 justify-self-center" aria-live="polite">
          <button
            type="button"
            aria-label="Previous announcement"
            onClick={retreat}
            className="luzz-utility-button"
          >
            <AnnouncementPrevIcon className="h-[14px] w-[14px]" />
          </button>
          <Link
            href={activeSlide.href}
            className="inline-flex min-w-0 items-center gap-2 text-center text-[11px] font-semibold uppercase tracking-[0.12em] text-[#111111] transition-colors hover:text-[#0075da]"
          >
            <span className="truncate">{activeSlide.label}</span>
            {activeSlide.showArrow ? <AnnouncementArrowRightIcon className="h-[14px] w-[14px]" /> : null}
          </Link>
          <button
            type="button"
            aria-label="Next announcement"
            onClick={() => setIndex((current) => (current + 1) % announcementSlides.length)}
            className="luzz-utility-button"
          >
            <AnnouncementNextIcon className="h-[14px] w-[14px]" />
          </button>
        </div>
        <div className="w-[154px] justify-self-end" aria-hidden="true" />
      </div>
    </div>
  );
}

function MobileSearchBar() {
  return (
    <div className="bg-white lg:hidden">
      <div className="luzz-container py-4">
        <form
          action="/search"
          method="get"
          role="search"
          className="flex items-center gap-3 rounded-full border border-black/8 bg-white px-4 py-3 shadow-[0_10px_24px_rgba(0,0,0,0.08)]"
        >
          <input
            type="search"
            name="q"
            placeholder="What are you looking for?"
            aria-label="Search the site"
            className="min-w-0 flex-1 bg-transparent text-sm text-[#111111] placeholder:text-[#111111]/45 focus:outline-none"
          />
          <button
            type="submit"
            aria-label="Search"
            className="flex h-8 w-8 items-center justify-center rounded-full text-[#111111]/70 transition-colors hover:text-[#111111]"
          >
            <HeaderSearchIcon className="h-4 w-4" />
          </button>
        </form>
      </div>
    </div>
  );
}

function Header() {
  const [isCompact, setIsCompact] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const syncHeaderState = useEffectEvent(() => {
    setIsCompact(window.scrollY > 40);
  });

  useEffect(() => {
    syncHeaderState();
    window.addEventListener("scroll", syncHeaderState, { passive: true });

    return () => window.removeEventListener("scroll", syncHeaderState);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [mobileMenuOpen]);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-30">
      <div className="hidden lg:block">
        <div
          className={`overflow-hidden border-b border-black/7 bg-white transition-all duration-300 ${
            isCompact ? "max-h-0 -translate-y-full opacity-0" : "max-h-16 translate-y-0 opacity-100"
          }`}
        >
          <AnnouncementBar />
        </div>
        <div
          className={`relative transition-all duration-300 ${
            isCompact
              ? "border-b border-white/12 bg-[rgba(24,27,37,0.92)] shadow-[0_22px_48px_rgba(6,10,18,0.24)] backdrop-blur-xl"
              : "border-b border-white/20 bg-[rgba(24,27,37,0.74)] backdrop-blur-[2px]"
          }`}
        >
          <div
            className={`absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/24 to-transparent transition-opacity duration-300 ${
              isCompact ? "opacity-100" : "opacity-70"
            }`}
          />
          <div
            className={`luzz-container flex items-center justify-between text-white transition-[padding] duration-300 ${
              isCompact ? "py-[0.86rem]" : "py-[0.98rem]"
            }`}
          >
            <div className="flex items-center gap-7 xl:gap-[2.65rem]">
              <Link
                href="/"
                className={`pointer-events-auto relative shrink-0 transition-[transform,height,width] duration-300 ${
                  isCompact ? "h-[2.82rem] w-[5.45rem] scale-[0.98]" : "h-[3.1rem] w-[5.95rem]"
                }`}
              >
                <Image
                  src="/images/luzzpickleball/luzz-white.svg"
                  alt="Luzzpickleball"
                  fill
                  className="object-contain"
                  priority
                />
              </Link>
              <nav className="pointer-events-auto hidden lg:block">
                <ul className="flex items-center gap-[0.08rem] text-[11px] font-semibold uppercase tracking-[0.12em]">
                  {desktopHeaderMenu.map((item) => (
                    <DesktopHeaderMenuItem key={item.label} item={item} />
                  ))}
                </ul>
              </nav>
            </div>
            <div className="pointer-events-auto flex items-center gap-[0.7rem] text-white/90">
              <HeaderIcon href="/search" label="Search">
                <HeaderSearchIcon className="h-[18px] w-[18px]" />
              </HeaderIcon>
              <HeaderIcon href="/" label="Localization">
                <HeaderGlobalIcon className="h-[18px] w-[18px]" />
              </HeaderIcon>
              <HeaderIcon href="/account/login" label="Account">
                <HeaderAccountIcon className="h-[18px] w-[18px]" />
              </HeaderIcon>
              <Link
                href="/cart"
                aria-label="Cart"
                className="flex min-w-[78px] items-center justify-center rounded-full border border-white/72 px-[0.82rem] py-[0.34rem] text-white transition-colors hover:border-white hover:bg-white/8"
              >
                <HeaderCartIcon className="h-[17px] w-[17px]" />
                <span className="ml-2 text-[11px] font-semibold tracking-[0.02em]">
                  $0.00
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden">
        <MobileHeroHeader onOpenMenu={() => setMobileMenuOpen(true)} />
      </div>
      <MobileMenuDrawer isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </header>
  );
}

function MobileHeroHeader({ onOpenMenu }: Readonly<{ onOpenMenu: () => void }>) {
  return (
    <div className="border-b border-white/18 bg-[rgba(29,32,42,0.88)] backdrop-blur-md">
      <div className="luzz-container flex items-center justify-between py-3 text-white">
        <button
          type="button"
          aria-label="Open menu"
          onClick={onOpenMenu}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/18 bg-white/6"
        >
          <span className="relative block h-4 w-5">
            <span className="absolute inset-x-0 top-0 h-[1.5px] rounded-full bg-white" />
            <span className="absolute inset-x-0 top-[6px] h-[1.5px] rounded-full bg-white" />
            <span className="absolute inset-x-0 top-3 h-[1.5px] rounded-full bg-white" />
          </span>
        </button>
        <Link href="/" className="relative h-11 w-24 shrink-0">
          <Image src="/images/luzzpickleball/luzz-white.svg" alt="Luzzpickleball" fill className="object-contain" />
        </Link>
        <div className="flex items-center gap-2">
          <HeaderIcon href="/search" label="Search">
            <HeaderSearchIcon className="h-[18px] w-[18px]" />
          </HeaderIcon>
          <HeaderIcon href="/cart" label="Cart">
            <HeaderCartIcon className="h-[17px] w-[17px]" />
          </HeaderIcon>
        </div>
      </div>
    </div>
  );
}

function MobileMenuDrawer({
  isOpen,
  onClose,
}: Readonly<{
  isOpen: boolean;
  onClose: () => void;
}>) {
  const [openSection, setOpenSection] = useState<string | null>("Paddles");

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-40 transition-opacity duration-300 lg:hidden ${
        isOpen ? "opacity-100" : "opacity-0"
      }`}
      aria-hidden={!isOpen}
    >
      <button
        type="button"
        aria-label="Close menu"
        onClick={onClose}
        className={`absolute inset-0 bg-black/45 transition-opacity duration-300 ${
          isOpen ? "pointer-events-auto opacity-100" : "opacity-0"
        }`}
      />
      <div
        className={`absolute inset-y-0 left-0 flex w-[92vw] max-w-[420px] flex-col bg-white text-[#111111] shadow-[0_24px_60px_rgba(0,0,0,0.28)] transition-transform duration-300 ${
          isOpen ? "pointer-events-auto translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-black/8 px-5 py-4">
          <Link href="/" onClick={onClose} className="relative h-11 w-24">
            <Image src="/images/luzzpickleball/luzz-white.svg" alt="Luzzpickleball" fill className="object-contain invert" />
          </Link>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/8 bg-[#f5f5f5] text-[#111111]"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <div className="grid gap-3 border-b border-black/8 px-5 py-4">
          <Link
            href="/account/login"
            onClick={onClose}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#242833] px-4 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white"
          >
            <HeaderAccountIcon className="h-[17px] w-[17px]" />
            Log in
          </Link>
          <Link
            href="/search"
            onClick={onClose}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-black/10 px-4 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#111111]"
          >
            <HeaderSearchIcon className="h-[17px] w-[17px]" />
            Search
          </Link>
        </div>
        <div className="flex-1 overflow-y-auto px-4 py-4">
          {desktopHeaderMenu.map((item) => (
            <MobileMenuItem
              key={item.label}
              isOpen={openSection === item.label}
              item={item}
              onClose={onClose}
              onToggle={() => setOpenSection((current) => (current === item.label ? null : item.label))}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function MobileMenuItem({
  isOpen,
  item,
  onClose,
  onToggle,
}: Readonly<{
  isOpen: boolean;
  item: HeaderMenuItem;
  onClose: () => void;
  onToggle: () => void;
}>) {
  if (item.kind === "link") {
    return (
      <Link
        href={item.href}
        onClick={onClose}
        className="flex items-center justify-between rounded-[18px] px-4 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-[#111111]"
      >
        <span>{item.label}</span>
        <ChevronRight className="h-4 w-4 text-[#111111]/45" />
      </Link>
    );
  }

  return (
    <div className="rounded-[18px] bg-[#fafafa]">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between px-4 py-4 text-left text-sm font-semibold uppercase tracking-[0.14em] text-[#111111]"
      >
        <span>{item.label}</span>
        <ChevronDown className={`h-4 w-4 text-[#111111]/52 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <div className={`grid transition-[grid-template-rows] duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
        <div className="overflow-hidden">
          <div className="space-y-4 px-4 pb-4">
            {"links" in item ? (
              <ul className="space-y-2">
                {item.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className="block rounded-[14px] px-3 py-3 text-sm text-[#111111]/72 transition-colors hover:bg-white hover:text-[#0075da]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="space-y-4">
                {item.sections.map((section) => (
                  <div key={section.title}>
                    <p className="px-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#111111]/45">
                      {section.title}
                    </p>
                    <ul className="mt-2 space-y-1">
                      {section.links.map((link) => (
                        <li key={link.label}>
                          <Link
                            href={link.href}
                            onClick={onClose}
                            className="block rounded-[14px] px-3 py-3 text-sm text-[#111111]/72 transition-colors hover:bg-white hover:text-[#0075da]"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                <Link href={item.promo.href} onClick={onClose} className="block overflow-hidden rounded-[18px] bg-white">
                  <div className="relative aspect-[5/3]">
                    <Image src={item.promo.image} alt={item.promo.alt} fill sizes="360px" className="object-cover" />
                  </div>
                  <p className="px-4 py-3 text-sm font-semibold text-[#111111]">{item.promo.title}</p>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function DesktopHeaderMenuItem({ item }: Readonly<{ item: HeaderMenuItem }>) {
  if (item.kind === "link") {
    return (
      <li className="list-none">
        <Link href={item.href} className="luzz-header-trigger">
          <span>{item.label}</span>
        </Link>
      </li>
    );
  }

  return (
    <li className="luzz-header-menu-item group relative list-none">
      <div className="flex items-center">
        <Link href={item.href} className="luzz-header-trigger">
          <span>{item.label}</span>
        </Link>
        <HeaderCaretIcon className="pointer-events-none h-[13px] w-[13px] text-white/70 transition-transform duration-300 group-hover:rotate-180 group-hover:text-white group-focus-within:rotate-180 group-focus-within:text-white" />
      </div>
      <div className="pointer-events-none absolute left-0 top-full z-40 pt-[1.05rem] opacity-0 transition-all duration-300 group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100">
        {item.kind === "mega" ? <MegaMenuPanel item={item} /> : <DropdownMenuPanel item={item} />}
      </div>
    </li>
  );
}

function MegaMenuPanel({
  item,
}: Readonly<{
  item: Extract<HeaderMenuItem, { kind: "mega" }>;
}>) {
  return (
    <div className="relative w-[1088px] max-w-[calc(100vw-4rem)] translate-y-3 scale-[0.985] border border-[#ececec] bg-white px-9 py-7 text-[#111111] shadow-[0_22px_55px_rgba(7,11,20,0.14)] transition-all duration-300 group-hover:translate-y-0 group-hover:scale-100 group-focus-within:translate-y-0 group-focus-within:scale-100">
      <div className="flex items-start gap-9">
        {item.sections.map((section) => (
          <div key={section.title} className="min-w-[112px] flex-1">
            <p className="font-heading text-[21px] leading-none text-[#111111]">{section.title}</p>
            <ul className="mt-4 space-y-[0.95rem]">
              {section.links.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="group/link inline-flex text-[13px] font-medium leading-none text-[#111111]/68 transition-colors hover:text-[#111111]">
                    <span className="translate-x-0 transition-transform duration-300 group-hover/link:translate-x-[2px]">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="ml-auto w-[248px] shrink-0">
          <Link href={item.promo.href} className="group/promo block">
            <div className="relative aspect-square overflow-hidden bg-[#f5f5f5]">
              <Image
                src={item.promo.image}
                alt={item.promo.alt}
                fill
                sizes="248px"
                className="object-cover transition-transform duration-500 group-hover/promo:scale-[1.04]"
              />
            </div>
            <p className="mt-2 text-center text-[13px] font-medium text-[#111111]">{item.promo.title}</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

function DropdownMenuPanel({
  item,
}: Readonly<{
  item: Extract<HeaderMenuItem, { kind: "dropdown" }>;
}>) {
  return (
    <div className="relative min-w-[286px] max-w-[312px] translate-y-3 scale-[0.985] border border-[#ececec] bg-white px-0 py-2 text-[#111111] shadow-[0_18px_45px_rgba(7,11,20,0.14)] transition-all duration-300 group-hover:translate-y-0 group-hover:scale-100 group-focus-within:translate-y-0 group-focus-within:scale-100">
      <ul className="space-y-0">
        {item.links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="group/link block px-5 py-[0.82rem] text-[13px] font-medium text-[#111111]/72 transition-colors duration-300 hover:text-[#111111]"
            >
              <span className="translate-x-0 transition-transform duration-300 group-hover/link:translate-x-1">
                {link.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function HeaderIcon({
  children,
  href,
  label,
}: Readonly<{
  children: React.ReactNode;
  href: string;
  label: string;
}>) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="flex h-8 w-8 items-center justify-center rounded-full text-white/88 transition-all duration-300 hover:bg-white/10 hover:text-white"
    >
      {children}
    </Link>
  );
}

function SocialGlyph({ label }: Readonly<{ label: string }>) {
  if (label === "Facebook") {
    return (
      <svg className="h-[15px] w-[15px]" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path
          d="M3.7758 16.5658C3.7758 12.3096 5.90391 7.86833 8.40213 7.86833C9.79004 7.86833 10.9004 8.70107 12.6584 11.1993C10.9929 13.79 9.97509 15.363 9.97509 15.363C7.75445 18.879 7.01423 19.6192 5.81139 19.6192C4.60854 19.7117 3.7758 18.6014 3.7758 16.5658ZM18.3025 14.9929L16.7295 12.4021C16.3594 11.7544 15.8968 11.1068 15.5267 10.5516C16.9146 8.42349 18.0249 7.31317 19.4128 7.31317C22.1886 7.31317 24.4093 11.4769 24.4093 16.6584C24.4093 18.6014 23.7616 19.7117 22.4662 19.7117C21.1708 19.7117 20.7082 18.879 18.3025 14.9929ZM14.3238 8.70107C12.2883 6.01779 10.5302 5 8.49466 5C4.23843 5 1 10.6441 1 16.5658C1 20.2669 2.75801 22.5801 5.71886 22.5801C7.84697 22.5801 9.3274 21.5623 12.1032 16.7509C12.1032 16.7509 13.2135 14.7153 14.0463 13.3274C14.3238 13.79 14.6014 14.2527 14.879 14.8078L16.1744 17.0285C18.6726 21.2847 20.0605 22.6726 22.5587 22.6726C25.427 22.6726 27 20.2669 27 16.4733C26.9075 10.1815 23.5765 5 19.5979 5C17.4698 5 15.8043 6.66548 14.3238 8.70107Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (label === "Instagram") {
    return (
      <svg className="h-[15px] w-[15px]" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.04359 2.14728C7.09013 2.23542 5.39698 2.71301 4.02979 4.07442C2.65783 5.44299 2.18617 7.14285 2.09781 9.07599C2.04288 10.2826 1.7217 19.398 2.65306 21.7885C3.28113 23.4012 4.51813 24.6412 6.14561 25.2713C6.90503 25.5667 7.77193 25.7666 9.04359 25.825C19.6766 26.3062 23.6181 26.0442 25.2802 21.7885C25.5751 21.031 25.7781 20.1648 25.8343 18.8963C26.3202 8.23605 25.7555 5.92538 23.9023 4.07442C22.4324 2.60819 20.7034 1.61009 9.04359 2.14728ZM9.14148 23.6811C7.97728 23.6287 7.34564 23.4347 6.92414 23.2715C5.86383 22.8594 5.0674 22.0662 4.65784 21.0121C3.94858 19.1957 4.18382 10.5686 4.2471 9.17267C4.30919 7.80529 4.58621 6.55561 5.551 5.59083C6.74504 4.39973 8.28773 3.81599 18.7918 4.29005C20.1625 4.35198 21.4151 4.62843 22.3823 5.59083C23.5763 6.78191 24.1686 8.33648 23.6862 18.8002C23.6336 19.9615 23.439 20.5917 23.2754 21.0121C22.1948 23.7814 19.7088 24.1658 9.14148 23.6811ZM18.9076 7.62755C18.9076 8.41606 19.5488 9.05724 20.3405 9.05724C21.1321 9.05724 21.7745 8.41606 21.7745 7.62755C21.7745 6.83905 21.1321 6.19845 20.3405 6.19845C19.5488 6.19845 18.9076 6.83905 18.9076 7.62755ZM7.8352 13.9856C7.8352 17.3635 10.5803 20.1022 13.9666 20.1022C17.353 20.1022 20.0981 17.3635 20.0981 13.9856C20.0981 10.6076 17.353 7.87071 13.9666 7.87071C10.5803 7.87071 7.8352 10.6076 7.8352 13.9856ZM9.98687 13.9856C9.98687 11.794 11.7684 10.0158 13.9666 10.0158C16.1649 10.0158 17.9464 11.794 17.9464 13.9856C17.9464 16.1784 16.1649 17.957 13.9666 17.957C11.7684 17.957 9.98687 16.1784 9.98687 13.9856Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (label === "YouTube") {
    return (
      <svg className="h-[15px] w-[15px]" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path
          d="M4.68929 3H6.66796L7.9425 6.92194H8.06576L9.28127 3H11.2769L8.99049 8.74058V12.8129H7.0265V8.92321L4.68929 3ZM11.4847 7.22594C11.4847 6.65015 11.7213 6.19254 12.1948 5.85092C12.6677 5.50934 13.3034 5.33854 14.102 5.33854C14.8293 5.33854 15.425 5.51902 15.889 5.87886C16.3542 6.23869 16.5861 6.70168 16.5861 7.26891V11.1092C16.5861 11.7452 16.3579 12.2447 15.903 12.6067C15.4475 12.9687 14.8201 13.1502 14.0222 13.1502C13.2534 13.1502 12.6384 12.9633 12.1767 12.5895C11.7157 12.2157 11.4847 11.713 11.4847 11.0802V7.22594ZM13.2934 11.2198C13.2934 11.425 13.3554 11.5819 13.4809 11.6947C13.6061 11.8064 13.7846 11.8611 14.017 11.8611C14.2551 11.8611 14.4445 11.8053 14.5844 11.6914C14.7246 11.5765 14.795 11.4196 14.795 11.2198V7.17006C14.795 7.00783 14.723 6.87678 14.5801 6.7769C14.4373 6.67697 14.2495 6.62647 14.017 6.62647C13.8029 6.62647 13.6283 6.67697 13.4946 6.7769C13.3603 6.87678 13.2934 7.00783 13.2934 7.17006V11.2198ZM23.0142 5.4578V12.8935H21.2541V12.0728C20.9292 12.3757 20.5919 12.6056 20.2406 12.7646C19.8899 12.9214 19.5488 13.0009 19.219 13.0009C18.8119 13.0009 18.5047 12.8903 18.2984 12.669C18.0921 12.4476 17.989 12.1158 17.989 11.6732V5.4578H19.7497V11.1576C19.7497 11.3348 19.7867 11.4616 19.8603 11.541C19.9345 11.6195 20.0537 11.6592 20.2186 11.6592C20.3485 11.6592 20.5124 11.6066 20.7094 11.5024C20.9076 11.3982 21.0891 11.265 21.254 11.1028V5.4578H23.0142ZM21.3648 18.6179C21.2783 18.5223 21.1408 18.4729 20.9517 18.4729C20.7541 18.4729 20.6123 18.5223 20.5264 18.6179C20.4405 18.7146 20.3975 18.8747 20.3975 19.0981V19.5611H21.4942V19.0981C21.4942 18.8747 21.4512 18.7146 21.3648 18.6179ZM16.1629 22.1038C16.2574 22.1424 16.3573 22.1607 16.4626 22.1607C16.6151 22.1607 16.7258 22.1241 16.7978 22.0489C16.8697 21.9748 16.9052 21.8513 16.9052 21.6816V19.0046C16.9052 18.8242 16.8611 18.6878 16.7731 18.5943C16.6844 18.5008 16.555 18.4546 16.3874 18.4546C16.2988 18.4546 16.2113 18.4718 16.1247 18.5062C16.0383 18.5416 15.9529 18.5965 15.8686 18.6695V21.9157C15.9696 22.0038 16.0678 22.0661 16.1629 22.1038ZM24.3275 16.4362C24.3275 15.1472 23.0035 14.102 21.3718 14.102C19.044 14.0235 16.6619 13.9892 14.2318 13.9934C11.8024 13.9891 9.42037 14.0235 7.09177 14.102C5.46089 14.102 4.13692 15.1471 4.13692 16.4362C4.03889 17.4556 3.99644 18.4761 4.00023 19.4966C3.99649 20.5171 4.03889 21.5376 4.13692 22.5581C4.13692 23.8461 5.46089 24.8913 7.09177 24.8913C9.42037 24.9686 11.8024 25.003 14.2318 24.9998C16.6619 25.003 19.044 24.9686 21.3718 24.8913C23.0035 24.8913 24.3275 23.8461 24.3275 22.5581C24.4252 21.5376 24.4676 20.5171 24.4633 19.4966C24.4676 18.4761 24.4252 17.4556 24.3275 16.4362ZM8.43046 22.932V23.0093H7.0324V22.932V16.8262H5.586V16.7499V15.7767V15.7005H9.87716V15.7767V16.7499V16.8262H8.43046V22.932ZM13.4038 17.6737V22.932V23.0093H12.1625V22.932V22.4196C11.9332 22.6376 11.6955 22.802 11.4482 22.9159C11.2003 23.0286 10.9602 23.0856 10.7272 23.0856C10.4403 23.0856 10.2241 23.0061 10.0786 22.8481C9.93274 22.6892 9.85994 22.4507 9.85994 22.1327V22.0554V17.6737V17.5974H11.1018V17.6737V21.6869C11.1018 21.8126 11.1275 21.905 11.1793 21.9609C11.2317 22.0178 11.316 22.0457 11.4323 22.0457C11.5239 22.0457 11.6391 22.0081 11.7788 21.934C11.9179 21.8588 12.0457 21.7632 12.1625 21.6472V17.6737V17.5974H13.4038ZM18.183 18.9445V21.8266V21.9039C18.183 22.2832 18.0857 22.5732 17.8914 22.7751C17.6969 22.9749 17.4154 23.0759 17.048 23.0759C16.8053 23.0759 16.5894 23.0372 16.3992 22.9599C16.2086 22.8815 16.0319 22.7611 15.8686 22.5989V22.9319V23.0093H14.6156V22.9319V15.7767V15.7004H15.8686V15.7767V18.0282C16.0362 17.8649 16.2134 17.7414 16.4014 17.6576C16.59 17.5727 16.7807 17.5298 16.9729 17.5298C17.365 17.5298 17.6658 17.6437 17.8725 17.8714C18.0793 18.0991 18.183 18.431 18.183 18.8672V18.9445ZM22.772 19.1078V20.3893V20.4667H20.3975V21.3958C20.3975 21.6762 20.4383 21.8707 20.52 21.9792C20.6021 22.0877 20.7418 22.1425 20.9394 22.1425C21.1451 22.1425 21.2896 22.0963 21.3718 22.0039C21.4534 21.9126 21.4942 21.7095 21.4942 21.3958V21.1026V21.0253H22.772V21.1026V21.4259V21.5033C22.772 22.05 22.6168 22.4615 22.3053 22.7386C21.9943 23.0158 21.5297 23.1533 20.9115 23.1533C20.3556 23.1533 19.9184 23.0061 19.5988 22.7129C19.2798 22.4196 19.1197 22.0157 19.1197 21.5033V21.4259V19.1078V19.0315C19.1197 18.5686 19.2953 18.1915 19.6456 17.8993C19.9963 17.6082 20.4502 17.4621 21.0055 17.4621C21.5738 17.4621 22.0098 17.5975 22.315 17.8671C22.619 18.1367 22.772 18.5256 22.772 19.0315V19.1078H22.772Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (label === "TikTok") {
    return (
      <svg className="h-[15px] w-[15px]" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path
          d="M14.0409 3.01834C15.242 3 16.4342 3.00954 17.6257 3C17.6653 4.4901 18.2698 5.83125 19.2317 6.82465L19.2302 6.82318C20.2654 7.75569 21.6125 8.36023 23.0974 8.46295L23.118 8.46442V12.1592C21.7152 12.124 20.396 11.8004 19.2067 11.2443L19.2669 11.2693C18.6917 10.9927 18.2053 10.7087 17.7431 10.3918L17.7812 10.4167C17.7724 13.0939 17.79 15.7711 17.7629 18.4387C17.6873 19.7982 17.2354 21.0382 16.5105 22.0734L16.5252 22.0506C15.3131 23.7865 13.3498 24.9259 11.1172 24.9934H11.107C11.0167 24.9978 10.9103 25 10.8032 25C9.53396 25 8.34761 24.6464 7.3366 24.0323L7.36595 24.0492C5.52589 22.942 4.25663 21.0477 4.02186 18.8445L4.01892 18.8144C4.00058 18.3558 3.99178 17.8973 4.01012 17.4483C4.36962 13.942 7.30726 11.2296 10.8781 11.2296C11.2794 11.2296 11.6726 11.2641 12.0549 11.3294L12.0138 11.3236C12.0321 12.6801 11.9771 14.0374 11.9771 15.394C11.6668 15.2817 11.3087 15.2164 10.9353 15.2164C9.56478 15.2164 8.39897 16.0924 7.96757 17.3155L7.96096 17.3375C7.86338 17.6508 7.80689 18.011 7.80689 18.3837C7.80689 18.5348 7.81643 18.6845 7.83404 18.8313L7.83257 18.8136C8.07615 20.3147 9.36302 21.4475 10.9147 21.4475C10.9595 21.4475 11.0035 21.4468 11.0475 21.4446H11.0409C12.1143 21.4123 13.0461 20.8349 13.5728 19.9817L13.5802 19.9685C13.7761 19.6955 13.9103 19.3654 13.9551 19.0066L13.9558 18.9963C14.0475 17.3551 14.0109 15.7234 14.0197 14.0822C14.0285 10.3874 14.0109 6.70139 14.038 3.01614L14.0409 3.01834Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  return (
    <svg className="h-[15px] w-[15px]" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.8482 18.6561C12.2073 21.961 11.3786 24.344 9.06333 26C8.34759 21.0067 10.1137 17.2571 10.9325 13.2731C9.53486 10.9593 11.1005 6.30052 14.0454 7.44685C17.6693 8.86001 11.1683 15.714 15.7084 16.6133C20.4491 17.5507 22.146 9.46141 19.2081 6.52217C14.9616 2.27845 6.50102 5.87699 7.81817 11.8938C8.34899 14.3192 6.54337 15.0096 6.54337 15.0096C5.0808 14.4166 4.94105 12.3639 5.01586 10.3607C5.18386 5.75416 9.21862 2.52833 13.2661 2.08082C18.3851 1.51611 23.1893 3.93161 23.8514 8.67507C24.5996 14.027 21.6392 20.1751 16.1644 19.7573C14.6821 19.6443 12.8482 18.6561 12.8482 18.6561Z"
        fill="currentColor"
      />
    </svg>
  );
}

function AnnouncementArrowRightIcon({ className }: Readonly<{ className?: string }>) {
  return (
    <svg className={className} viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path
        d="M19.1788 13.5L5 13.5V15.5L19.1788 15.5L16.0615 18.6L17.4693 20L23 14.5L17.5698 9L16.162 10.4L19.1788 13.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

function AnnouncementPrevIcon({ className }: Readonly<{ className?: string }>) {
  return (
    <svg className={className} viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path
        d="M10.4495 14L23 2.30588L20.5253 0L7.97475 11.6941L5.5 14L7.97475 16.3059L20.5253 28L23 25.6941L10.4495 14Z"
        fill="currentColor"
      />
    </svg>
  );
}

function AnnouncementNextIcon({ className }: Readonly<{ className?: string }>) {
  return (
    <svg className={className} viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path
        d="M18.0505 14L5.5 2.30588L7.97475 0L20.5253 11.6941L23 14L20.5253 16.3059L7.97475 28L5.5 25.6941L18.0505 14Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ProductRating({ rating }: Readonly<{ rating: string }>) {
  return (
    <div className="mt-2 flex items-center justify-center gap-2 text-[#111111]">
      <span className="text-[11px] tracking-[0.18em]" aria-hidden="true">
        ★★★★★
      </span>
      <b className="text-sm">{rating}</b>
    </div>
  );
}

function HeaderSearchIcon({ className }: Readonly<{ className?: string }>) {
  return (
    <svg className={className} viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path
        d="M12.6667 6C16.3485 6 19.3333 8.98477 19.3333 12.6667M20.2117 20.2065L26 26M23.3333 12.6667C23.3333 18.5577 18.5577 23.3333 12.6667 23.3333C6.77563 23.3333 2 18.5577 2 12.6667C2 6.77563 6.77563 2 12.6667 2C18.5577 2 23.3333 6.77563 23.3333 12.6667Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HeaderGlobalIcon({ className }: Readonly<{ className?: string }>) {
  return (
    <svg className={className} viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path
        d="M26 14C26 15.5758 25.6896 17.1363 25.0866 18.5922C24.4834 20.0481 23.5996 21.371 22.4853 22.4853C21.371 23.5996 20.0481 24.4834 18.5922 25.0866C17.1363 25.6896 15.5758 26 14 26C12.4242 26 10.8637 25.6896 9.4078 25.0866C7.95189 24.4834 6.62902 23.5996 5.51472 22.4853C4.40042 21.371 3.5165 20.0481 2.91344 18.5922C2.31039 17.1363 2 15.5758 2 14C2 12.4242 2.31039 10.8637 2.91345 9.40779C3.5165 7.95189 4.40042 6.62902 5.51472 5.51472C6.62902 4.40042 7.95189 3.5165 9.4078 2.91344C10.8637 2.31039 12.4242 2 14 2C15.5758 2 17.1363 2.31039 18.5922 2.91345C20.0481 3.5165 21.371 4.40042 22.4853 5.51472C23.5996 6.62902 24.4834 7.95189 25.0866 9.4078C25.6896 10.8637 26 12.4242 26 14Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M18.8 14C18.8 15.5758 18.6758 17.1363 18.4346 18.5922C18.1934 20.0481 17.8399 21.371 17.3941 22.4853C16.9484 23.5996 16.4192 24.4834 15.8368 25.0866C15.2545 25.6896 14.6304 26 14 26C13.3696 26 12.7455 25.6896 12.1632 25.0866C11.5807 24.4834 11.0516 23.5996 10.6059 22.4853C10.1602 21.371 9.8066 20.0481 9.56537 18.5922C9.32415 17.1363 9.2 15.5758 9.2 14C9.2 12.4242 9.32415 10.8637 9.56537 9.40779C9.8066 7.95189 10.1602 6.62902 10.6059 5.51472C11.0516 4.40042 11.5807 3.5165 12.1632 2.91344C12.7455 2.31039 13.3696 2 14 2C14.6304 2 15.2545 2.31039 15.8368 2.91345C16.4192 3.5165 16.9484 4.40042 17.3941 5.51472C17.8399 6.62902 18.1934 7.95189 18.4346 9.4078C18.6758 10.8637 18.8 12.4242 18.8 14Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M2 14H26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function HeaderAccountIcon({ className }: Readonly<{ className?: string }>) {
  return (
    <svg className={className} viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.7864 8.26087V10.3478C17.7864 12.7106 15.8673 14.6261 13.5 14.6261C11.1327 14.6261 9.21364 12.7106 9.21364 10.3478V8.26087C9.21364 5.89805 11.1327 3.98261 13.5 3.98261C15.8673 3.98261 17.7864 5.89805 17.7864 8.26087ZM7.22727 8.26087C7.22727 4.80309 10.0357 2 13.5 2C16.9643 2 19.7727 4.80309 19.7727 8.26087V10.3478C19.7727 13.8056 16.9643 16.6087 13.5 16.6087C10.0357 16.6087 7.22727 13.8056 7.22727 10.3478V8.26087ZM3.98636 21.8261C3.98636 20.6159 4.9693 19.6348 6.18182 19.6348H20.8182C22.0307 19.6348 23.0136 20.6159 23.0136 21.8261V22.9739C23.0136 23.5502 22.5456 24.0174 21.9682 24.0174H5.03182C4.45443 24.0174 3.98636 23.5502 3.98636 22.9739V21.8261ZM2 21.8261C2 19.5209 3.87226 17.6522 6.18182 17.6522H20.8182C23.1277 17.6522 25 19.5209 25 21.8261V24.9565C25 25.5328 24.5319 26 23.9545 26H3.04545C2.46807 26 2 25.5328 2 24.9565V21.8261Z"
        fill="currentColor"
      />
    </svg>
  );
}

function HeaderCartIcon({ className }: Readonly<{ className?: string }>) {
  return (
    <svg className={className} viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path
        d="M8.4 8.9V7.9C8.4 4.97 10.95 2.6 14 2.6C17.05 2.6 19.6 4.97 19.6 7.9V8.9"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M6.1 8.9H21.9L20.8 24.4H7.2L6.1 8.9Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HeaderCaretIcon({ className }: Readonly<{ className?: string }>) {
  return (
    <svg className={className} viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path
        d="M14 17.5505L25.6941 5L28 7.47475L16.3059 20.0253L14 22.5L11.6941 20.0253L0 7.47475L2.30588 5L14 17.5505Z"
        fill="currentColor"
      />
    </svg>
  );
}

function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(2);
  const advance = useEffectEvent(() => {
    setActiveIndex((current) => (current + 1) % heroSlides.length);
  });

  useEffect(() => {
    const timer = window.setInterval(() => advance(), 5500);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#242833]">
      <MobileSearchBar />
      <Header />
      <div className="relative aspect-[16/10] min-h-[340px] sm:min-h-[420px] md:aspect-[16/8] lg:min-h-[680px]">
        {heroSlides.map((slide, index) => (
          <Link
            key={slide.image}
            href={toLocalHref(slide.href)}
            aria-hidden={index !== activeIndex}
            tabIndex={index === activeIndex ? 0 : -1}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === activeIndex ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              priority={index === activeIndex}
              sizes="100vw"
              className="object-cover"
            />
          </Link>
        ))}
      </div>
      <div className="luzz-container absolute inset-x-0 bottom-6 z-10 hidden items-center justify-end gap-2 text-white lg:flex">
        <button
          type="button"
          aria-label="Previous hero slide"
          onClick={() => setActiveIndex((current) => (current - 1 + heroSlides.length) % heroSlides.length)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/35 bg-black/20 backdrop-blur-sm transition-colors hover:bg-white/15"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          aria-label="Next hero slide"
          onClick={() => setActiveIndex((current) => (current + 1) % heroSlides.length)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/35 bg-black/20 backdrop-blur-sm transition-colors hover:bg-white/15"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </section>
  );
}

function TestimonialStrip() {
  const repeatedQuotes = [...marqueeQuotes, ...marqueeQuotes];

  return (
    <section className="overflow-hidden bg-[#242833] py-5 text-white md:py-7">
      <div className="luzz-marquee-track flex min-w-max gap-4 px-4 md:gap-6">
        {repeatedQuotes.map((quote, index) => (
          <article
            key={`${quote.author}-${index}`}
            className="flex min-w-[230px] items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm"
          >
            <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-white/15">
              <Image src={quote.avatar} alt={quote.author} fill sizes="48px" className="object-cover" />
            </div>
            <div className="min-w-0">
              <p className="truncate font-heading text-lg leading-none text-white md:text-[22px]">{quote.quote}</p>
              <p className="mt-2 text-[11px] uppercase tracking-[0.18em] text-white/60">{quote.outlet}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function SpotlightSection() {
  const [activeTab, setActiveTab] = useState(productTabs[0]?.id ?? "pro");
  const railRef = useRef<HTMLDivElement>(null);
  const currentTab = productTabs.find((tab) => tab.id === activeTab) ?? productTabs[0];

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="luzz-container">
        <div className="text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#0075da]">Shop the line</p>
          <h2 className="mt-3 font-heading text-5xl text-[#111111] md:text-6xl">Spotlight Paddles</h2>
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {productTabs.map((tab) => {
            const isActive = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                  isActive ? "bg-black text-white" : "bg-[#f1f1f1] text-[#242833] hover:bg-[#e6e6e6]"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
        <div className="mt-10 flex items-end justify-between gap-4">
          <h3 className="font-heading text-3xl text-[#111111] md:text-4xl">{currentTab.title}</h3>
          <div className="hidden items-center gap-4 md:flex">
            <Link
              href={toLocalHref(currentTab.href)}
              className="items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#242833] transition-colors hover:text-[#0075da] md:flex"
            >
              View all
              <ChevronRight className="h-4 w-4" />
            </Link>
            <div className="flex items-center gap-2">
              <button
                type="button"
                aria-label="Previous products"
                onClick={() => railRef.current?.scrollBy({ left: -420, behavior: "smooth" })}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-[#242833] transition-colors hover:bg-[#f6f6f6]"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                aria-label="Next products"
                onClick={() => railRef.current?.scrollBy({ left: 420, behavior: "smooth" })}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-[#242833] transition-colors hover:bg-[#f6f6f6]"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
        <div ref={railRef} className="mt-8 overflow-x-auto pb-4">
          <div className="flex min-w-max gap-5">
            {currentTab.products.map((product) => (
              <article
                key={product.name}
                className="group min-w-[14rem] overflow-hidden rounded-[14px] border border-black/8 bg-white shadow-[0_20px_40px_rgba(0,0,0,0.06)] md:min-w-[24rem]"
              >
                <Link href={toLocalHref(product.href)} className="block">
                  <div className="relative aspect-square overflow-hidden bg-[#f6f6f6]">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(min-width: 768px) 24rem, 14rem"
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
                      <h4 className="text-base font-semibold text-[#111111] md:text-lg">{product.name}</h4>
                      {product.rating ? <ProductRating rating={product.rating} /> : null}
                    </div>
                    <div className="space-y-1">
                      <p className="text-lg font-semibold text-[#111111]">{product.price}</p>
                      {product.compareAt ? (
                        <p className="text-sm text-[#111111]/45 line-through">{product.compareAt}</p>
                      ) : null}
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function LuzzGoSection() {
  return (
    <section className="bg-[#f6f6f6] py-14 md:py-20">
      <div className="luzz-container grid items-center gap-10 lg:grid-cols-[minmax(0,560px)_1fr]">
        <div className="relative rounded-2xl bg-white p-3 shadow-[0_20px_55px_rgba(0,0,0,0.12)]">
          <div className="relative aspect-[6/5] overflow-hidden rounded-xl">
            <Image
              src="/images/luzzpickleball/luzz-go-player.jpg"
              alt="Luzz Go player collage"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
        <div className="lg:-ml-10">
          <div className="relative h-24 w-[280px] md:h-32 md:w-[360px]">
            <Image src="/images/luzzpickleball/luzz-go.svg" alt="Luzz Go" fill className="object-contain" />
          </div>
          <p className="mt-6 max-w-2xl whitespace-pre-line text-base leading-8 text-[#0075da] md:text-lg">
            {luzzGoBody}
          </p>
        </div>
      </div>
    </section>
  );
}

function WarrantySection() {
  return (
    <section className="luzz-warranty-pattern py-12 text-white md:py-16">
      <div className="luzz-container grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,520px)]">
        <h2 className="font-heading text-5xl leading-none md:text-7xl">12 MONTH WARRANTY</h2>
        <div>
          <p className="max-w-xl text-base leading-7 text-white/75 md:text-lg">{warrantyBody}</p>
          <Link
            href="/pages/warranty"
            className="mt-7 inline-flex items-center rounded-md bg-[#0075da] px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-[#0b66bc]"
          >
            Learn more
          </Link>
        </div>
      </div>
    </section>
  );
}

function VideoReviewsSection() {
  return (
    <section className="bg-white py-10 md:py-14">
      <div className="luzz-container overflow-x-auto pb-3">
        <div className="grid min-w-[980px] grid-cols-4 gap-5">
          {videoReviews.map((review) => (
            <article key={review.quote} className="rounded-2xl bg-white shadow-[0_16px_34px_rgba(0,0,0,0.08)]">
              <Link href={toLocalHref(review.href)} className="block">
                <div className="relative aspect-[16/10] overflow-hidden rounded-t-2xl">
                  <Image
                    src={review.thumbnail}
                    alt={review.quote}
                    fill
                    sizes="25vw"
                    className="object-cover"
                  />
                  <span className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-full bg-black/85 text-white">
                    <Play className="ml-0.5 h-4 w-4 fill-current" />
                  </span>
                </div>
                <div className="p-4">
                  <p className="min-h-14 font-semibold text-[#111111]">{review.quote}</p>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="relative h-10 w-10 overflow-hidden rounded-full">
                      <Image src={review.avatar} alt={review.author} fill sizes="40px" className="object-cover" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#242833]">{review.author}</p>
                      <p className="text-xs uppercase tracking-[0.18em] text-[#242833]/55">{review.outlet}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CollectionsSection() {
  return (
    <section className="bg-white py-14 md:py-18">
      <div className="luzz-container">
        <h2 className="text-center font-heading text-5xl text-[#111111] md:text-6xl">Explore Our Collection</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-12 md:grid-rows-6">
          {collectionCards.map((card, index) => {
            const layoutClass =
              index === 0
                ? "md:col-span-7 md:row-span-3"
                : index === 1
                  ? "md:col-span-5 md:row-span-3"
                  : "md:col-span-4 md:row-span-3";

            return (
              <Link
                key={card.title}
                href={toLocalHref(card.href)}
                className={`group relative min-h-[240px] overflow-hidden rounded-xl ${layoutClass}`}
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white md:p-6">
                  <h3 className="font-heading text-3xl md:text-4xl">{card.title}</h3>
                  <p className="mt-1 text-sm text-white/78">{card.description}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function UniversalSection() {
  return (
    <section className="bg-[#f6f6f6] py-3 md:py-5">
      <div className="luzz-container grid gap-3 lg:grid-cols-2">
        <div className="rounded-xl bg-[#efefef] p-7 md:p-8">
          <h2 className="max-w-sm font-heading text-4xl text-[#111111] md:text-5xl">{universalCollab.title}</h2>
          <div className="relative mt-8 h-16 w-full max-w-[420px]">
            <Image src={universalCollab.logo} alt="Luzz x Universal" fill className="object-contain object-left" />
          </div>
          <p className="mt-8 max-w-xl whitespace-pre-line text-sm leading-7 text-[#111111]/75 md:text-base">
            {universalCollab.body}
          </p>
        </div>
        <div className="grid gap-3">
          {universalCollab.banners.map((banner) => (
            <Link
              key={banner.label}
              href={toLocalHref(banner.href)}
              className="group relative min-h-[190px] overflow-hidden rounded-xl md:min-h-[220px]"
            >
              <Image
                src={banner.image}
                alt={banner.label}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-[#f6f6f6] py-16">
      <div className="luzz-container grid gap-10 lg:grid-cols-[minmax(0,420px)_1fr]">
        <div>
          <h2 className="font-heading text-5xl text-[#111111] md:text-6xl">FAQs</h2>
          <p className="mt-5 max-w-sm text-base leading-8 text-[#111111]/70">
            This is where we cover the stuff people ask us most. Quick, clear, and no fluff. If it&apos;s not here, you know where to find us.
          </p>
          <Link
            href="mailto:service@luzzpickleball.com"
            className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#242833] px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-[#aa78e7]"
          >
            <Mail className="h-4 w-4" />
            Email
          </Link>
        </div>
        <div className="space-y-3">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <article key={item.question} className="overflow-hidden rounded-xl border border-black/8 bg-white shadow-[0_14px_30px_rgba(0,0,0,0.05)]">
                <button
                  type="button"
                  onClick={() => setOpenIndex((current) => (current === index ? -1 : index))}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                >
                  <span className="font-semibold text-[#111111]">
                    {index + 1}. {item.question}
                  </span>
                  <ChevronDown className={`h-5 w-5 shrink-0 text-[#242833] transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </button>
                <div className={`grid transition-[grid-template-rows] duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                  <div className="overflow-hidden">
                    <div className="px-5 pb-5 text-sm leading-7 text-[#111111]/70 md:text-base">
                      <p>{item.answer}</p>
                      {item.href ? (
                        <Link
                          href={toLocalHref(item.href)}
                          className="mt-2 inline-flex items-center font-semibold text-[#0075da] hover:text-[#242833]"
                        >
                          {item.hrefLabel}
                        </Link>
                      ) : null}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function TeamSection() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="luzz-container">
        <div className="inline-flex rounded-md bg-white px-2 py-2">
          <h2 className="font-heading text-5xl text-[#111111] md:text-6xl">LUZZ TEAM</h2>
        </div>
        <div className="mt-8 overflow-x-auto pb-4">
          <div className="flex min-w-max gap-4">
            {teamMembers.map((member) => (
              <article key={member.name} className="min-w-[78vw] sm:min-w-[48vw] lg:min-w-[22rem]">
                <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-[#f6f6f6]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(min-width: 1024px) 22rem, (min-width: 640px) 48vw, 78vw"
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-3 font-heading text-xl text-[#111111] md:text-[22px]">{member.name}</h3>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const paymentMethods = ["AMEX", "Apple Pay", "Discover", "G Pay", "iDEAL", "Shop Pay", "Visa"];

  return (
    <footer className="border-t border-black/8 bg-white py-6 md:py-8">
      <div className="luzz-container space-y-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3 text-[#111111]/65">
            <Link
              href={socialLinks[1]?.href ?? "https://www.instagram.com/luzzpickleball/"}
              aria-label="Instagram"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-black/10 transition-colors hover:border-[#0075da] hover:text-[#0075da]"
            >
              <Camera className="h-4 w-4" />
            </Link>
            <div className="hidden flex-wrap gap-3 text-xs font-medium uppercase tracking-[0.18em] sm:flex">
              {socialLinks.slice(0, 4).map((link) => (
                <Link key={link.label} href={link.href} className="hover:text-[#0075da]">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <Link
            href="https://shop.app"
            className="inline-flex items-center justify-center self-start rounded-full bg-[#5a31f4] px-4 py-2 text-xs font-semibold text-white transition-opacity hover:opacity-90 md:self-auto"
          >
            Follow on shop
          </Link>
          <div className="flex flex-wrap gap-2 md:justify-end">
            {paymentMethods.map((method) => (
              <span
                key={method}
                className="rounded-md border border-black/8 bg-[#f8f8f8] px-2.5 py-1 text-[11px] font-medium text-[#111111]/70"
              >
                {method}
              </span>
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

export function LuzzHomePage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroCarousel />
      <TestimonialStrip />
      <SpotlightSection />
      <LuzzGoSection />
      <WarrantySection />
      <VideoReviewsSection />
      <CollectionsSection />
      <UniversalSection />
      <FaqSection />
      <TeamSection />
      <Footer />
    </main>
  );
}
