import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://catsafeflowers.com"),
  title: {
    default: "Cat Safe Flowers | Premium Lily-Free Bouquets in Newton, MA",
    template: "%s | Cat Safe Flowers",
  },
  description:
    "Premium lily-free bouquets for thoughtful pet households. Small-batch weekend floral drops based in Newton, Massachusetts.",
  keywords: [
    "cat safe flowers",
    "lily free bouquet",
    "Newton florist",
    "pet conscious flowers",
    "weekend bouquet drop",
  ],
  openGraph: {
    title: "Cat Safe Flowers",
    description:
      "Premium lily-free bouquets for thoughtful pet households in Newton, Massachusetts.",
    url: "https://catsafeflowers.com",
    siteName: "Cat Safe Flowers",
    images: [
      {
        url: "/images/og-cat-safe-flowers.svg",
        width: 1200,
        height: 630,
        alt: "Cat Safe Flowers lily-free bouquet landing page",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cat Safe Flowers",
    description:
      "Premium lily-free bouquets for thoughtful pet households in Newton, Massachusetts.",
    images: ["/images/og-cat-safe-flowers.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
