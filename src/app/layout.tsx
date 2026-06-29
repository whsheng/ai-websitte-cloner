import localFont from "next/font/local";
import type { Metadata } from "next";
import "./globals.css";

const figtree = localFont({
  src: [
    { path: "./fonts/luzz/figtree-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/luzz/figtree-500.woff2", weight: "500", style: "normal" },
    { path: "./fonts/luzz/figtree-700.woff2", weight: "700", style: "normal" },
  ],
  display: "swap",
  variable: "--font-luzz-sans",
});

const barlowCondensed = localFont({
  src: [
    { path: "./fonts/luzz/barlow-condensed-600.woff2", weight: "600", style: "normal" },
    { path: "./fonts/luzz/barlow-condensed-700.woff2", weight: "700", style: "normal" },
  ],
  display: "swap",
  variable: "--font-luzz-heading",
});

export const metadata: Metadata = {
  title: "LuzzPickleball - Premium Pickleball Paddles and Accessories",
  description:
    "Discover LuzzPickleball's wide range of top-notch Pickleball rackets, gear, and accessories. Enhance your game with durable, performance-driven products.",
  icons: {
    icon: "/seo/luzzpickleball/favicon.jpg",
    apple: "/seo/luzzpickleball/apple-touch-icon.jpg",
  },
  openGraph: {
    title: "LuzzPickleball - Premium Pickleball Paddles and Accessories",
    description:
      "Discover LuzzPickleball's wide range of top-notch Pickleball rackets, gear, and accessories. Enhance your game with durable, performance-driven products.",
    images: ["/seo/luzzpickleball/og-image.png"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className={`${figtree.variable} ${barlowCondensed.variable} min-h-full flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
