import { notFound } from "next/navigation";
import type { Metadata } from "next";

import {
  ContentPageLayout,
  FaqPageExtras,
  TeamPageExtras,
} from "@/components/luzz-site-shell";
import { getContentPageBySlug, siteContentPages } from "@/lib/luzz-site";

export const dynamicParams = false;

export function generateStaticParams() {
  return siteContentPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getContentPageBySlug(slug);

  if (!page) {
    return {
      title: "Page not found | Luzzpickleball",
    };
  }

  return {
    title: `${page.title} | Luzzpickleball`,
    description: page.description,
  };
}

export default async function ContentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getContentPageBySlug(slug);

  if (!page) {
    notFound();
  }

  const extras =
    slug === "faq" ? <FaqPageExtras /> : slug === "team-luzz" ? <TeamPageExtras /> : undefined;

  return (
    <ContentPageLayout page={page} extras={extras} />
  );
}
