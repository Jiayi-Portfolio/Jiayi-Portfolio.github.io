import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const sora = Sora({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sora',
});

const siteUrl = "https://jiayi-portfolio.github.io";
const siteDescription =
  "Portfolio of Jiayi Li — creative technologist and interaction designer working across games, VR, physical computing, and AI-driven experiences.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Jiayi Li — Creative Technologist & Interaction Designer",
    template: "%s · Jiayi Li",
  },
  description: siteDescription,
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Jiayi Li",
    title: "Jiayi Li — Creative Technologist & Interaction Designer",
    description: siteDescription,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jiayi Li — Creative Technologist & Interaction Designer",
    description: siteDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body>
        {children}
      </body>
    </html>
  )
}
