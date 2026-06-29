import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { ContentPageView } from "@/components/luzz-site-shell";
import { getBlogPageBySlug, siteBlogPages } from "@/lib/luzz-site";

export const dynamicParams = false;

export function generateStaticParams() {
  return siteBlogPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getBlogPageBySlug(slug);

  if (!page) {
    return {
      title: "Blog not found | Luzzpickleball",
    };
  }

  return {
    title: `${page.title} | Luzzpickleball`,
    description: page.description,
  };
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getBlogPageBySlug(slug);

  if (!page) {
    notFound();
  }

  return <ContentPageView page={page} />;
}
