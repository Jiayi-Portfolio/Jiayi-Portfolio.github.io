import type { Metadata } from "next";
import { Inter, Urbanist } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const urbanist = Urbanist({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-urbanist',
});

export const metadata: Metadata = {
  title: "Jiayi Li",
  description: "Jiayi Li's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className={`${inter.variable} ${urbanist.variable}`}>
          {children}
        </div>
      </body>
    </html>
  );
}
