import type { Metadata } from "next";
import { Inter_Tight, Playfair_Display } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Frog Coin Jungle Meme Memecoin: Buy Now and Join the Hype",
  description: "Frog Coin is a jungle-themed memecoin built for fun and community. Clear steps to buy, playful visuals, transparent tokenomics, and updates.",
  keywords: ["frog coin","jungle meme","memecoin","buy frog coin","community coin","tokenomics","frog mascot","jungle theme","crypto meme","web3"],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Frog Coin Jungle Meme Memecoin: Buy Now and Join the Hype",
    description: "Frog Coin is a jungle-themed memecoin built for fun and community. Clear steps to buy, playful visuals, transparent tokenomics, and updates.",
    type: "website",
    url: "/",
    siteName: "Frog Coin",
    images: [{
      url: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/tmp/a-flat-cartoon-portrait-of-an-anthropomo-1759247267372-21aa6b52.jpg",
      width: 1200,
      height: 630,
      alt: "A bold green frog mascot leaping through jungle leaves, with Frog Coin logo in jungle greens",
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Frog Coin Jungle Meme Memecoin: Buy Now and Join the Hype",
    description: "Frog Coin is a jungle-themed memecoin built for fun and community. Clear steps to buy, playful visuals, transparent tokenomics, and updates.",
    images: ["https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/tmp/a-flat-cartoon-portrait-of-an-anthropomo-1759247267372-21aa6b52.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interTight.variable} ${playfairDisplay.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}