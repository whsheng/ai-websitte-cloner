import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { CollectionPageView } from "@/components/luzz-site-shell";
import { getCollectionBySlug, siteCollections } from "@/lib/luzz-site";

export const dynamicParams = false;

export function generateStaticParams() {
  return siteCollections.map((collection) => ({ slug: collection.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const collection = getCollectionBySlug(slug);

  if (!collection) {
    return {
      title: "Collection not found | Luzzpickleball",
    };
  }

  return {
    title: `${collection.title} | Luzzpickleball`,
    description: collection.description,
  };
}

export default async function CollectionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const collection = getCollectionBySlug(slug);

  if (!collection) {
    notFound();
  }

  return <CollectionPageView collection={collection} />;
}
