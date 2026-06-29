import type { Metadata } from "next";

import { SearchPageView } from "@/components/luzz-site-shell";

export const metadata: Metadata = {
  title: "Search | Luzzpickleball",
  description: "Local search route for the cloned Luzzpickleball site.",
};

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const rawQuery = params.q;
  const query = Array.isArray(rawQuery) ? rawQuery[0] : rawQuery;

  return <SearchPageView query={query} />;
}
