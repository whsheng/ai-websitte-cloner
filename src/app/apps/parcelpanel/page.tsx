import type { Metadata } from "next";

import { TrackingPageView } from "@/components/luzz-site-shell";

export const metadata: Metadata = {
  title: "Track Your Order | Luzzpickleball",
  description: "Local order tracking placeholder for the cloned Luzzpickleball site.",
};

export default function ParcelPanelPage() {
  return <TrackingPageView />;
}
