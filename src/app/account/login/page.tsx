import type { Metadata } from "next";

import { AccountPageView } from "@/components/luzz-site-shell";

export const metadata: Metadata = {
  title: "Account | Luzzpickleball",
  description: "Local account route for the cloned Luzzpickleball site.",
};

export default function AccountLoginPage() {
  return <AccountPageView />;
}
