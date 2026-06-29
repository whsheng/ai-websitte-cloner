import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { ContentPageView } from "@/components/luzz-site-shell";
import { getPolicyPageBySlug, sitePolicyPages } from "@/lib/luzz-site";

export const dynamicParams = false;

export function generateStaticParams() {
  return sitePolicyPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getPolicyPageBySlug(slug);

  if (!page) {
    return {
      title: "Policy not found | Luzzpickleball",
    };
  }

  return {
    title: `${page.title} | Luzzpickleball`,
    description: page.description,
  };
}

export default async function PolicyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getPolicyPageBySlug(slug);

  if (!page) {
    notFound();
  }

  return <ContentPageView page={page} />;
}
