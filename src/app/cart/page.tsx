import type { Metadata } from "next";

import { CartPageView } from "@/components/luzz-site-shell";

export const metadata: Metadata = {
  title: "Cart | Luzzpickleball",
  description: "Local cart route for the cloned Luzzpickleball site.",
};

export default function CartPage() {
  return <CartPageView />;
}
