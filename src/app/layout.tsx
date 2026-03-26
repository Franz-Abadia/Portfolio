import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tonywrites.net"),

  title: {
    default: "Franz Abadia | Conversion-Focused Copywriter",
    template: "%s | Franz Abadia",
  },
  description:
    "High-converting landing pages, email sequences, and sales copy that turn browsers into buyers. Strategic copywriting for results-driven brands.",
  
  keywords: ["Copywriter", "Franz Abadia", "Tony Writes", "Conversion Copywriting", "Landing Page Specialist", "Email Marketing", "Sales Copy"],
  
  icons: {
    icon: "/FranzHero.png", 
    apple: "/FranzHero.png",
  },
  openGraph: {
    title: "Franz Abadia | Conversion-Focused Copywriter",
    description: "I help brands scale revenue through psychology-driven copy and strategic narratives.",
    url: "https://tonywrites.net",
    siteName: "Tony Writes | Franz Abadia",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/FranzHero.png",
        width: 1200,
        height: 630,
        alt: "Franz Abadia - Conversion Copywriter",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Franz Abadia | Copywriter",
    description: "Turning browsers into buyers with strategic copy.",
    images: ["/FranzHero.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://tonywrites.net",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${newsreader.variable} font-sans bg-background text-foreground antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}