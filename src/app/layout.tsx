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
  title: "Franz Abadia -Copywriter",
  description:
    "I write landing pages, email sequences, and sales copy that turn browsers into buyers. You VALUE your time, and you NEED a copywriter. In that case, I got you!",
  openGraph: {
    title: "Franz Abadia -Copywriter",
    description:
      "I write landing pages, email sequences, and sales copy that turn browsers into buyers. You VALUE your time, and you NEED a copywriter. In that case, I got you!",
    type: "website",
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
