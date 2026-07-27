import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "Yohannes Haile — Senior Full Stack Engineer",
  description:
    "Senior Full Stack Engineer crafting premium digital products with clean architecture, product-first thinking, and thoughtful UI/UX design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrains.variable}`} suppressHydrationWarning>
      <head>
        <Script id="theme-init" strategy="beforeInteractive">{`
          (function() {
            var stored = localStorage.getItem('theme');
            var prefersDark = stored === 'dark' || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches);
            if (prefersDark) document.documentElement.classList.add('dark');
            else document.documentElement.classList.remove('dark');
          })();
        `}</Script>
      </head>
      <body className={`${spaceGrotesk.className} antialiased`}>{children}</body>
    </html>
  );
}
