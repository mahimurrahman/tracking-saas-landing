import type { ReactNode } from "react";

import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";

import { siteConfig } from "@/config/site";

import "./globals.css";

const headingFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["500", "700"]
});

const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"]
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  alternates: {
    canonical: siteConfig.url
  },
  icons: {
    icon: "/icons/favicon.svg",
    shortcut: "/icons/favicon.svg"
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.title
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage]
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html className={`${headingFont.variable} ${bodyFont.variable}`} lang="en">
      <body className="bg-background text-foreground">
        <a
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-black"
          href="#main-content"
        >
          Skip to content
        </a>
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute left-1/2 top-0 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-[rgba(79,70,229,0.15)] blur-3xl" />
          <div className="absolute bottom-0 right-0 h-[24rem] w-[24rem] rounded-full bg-sky-400/10 blur-3xl" />
        </div>
        {children}
      </body>
    </html>
  );
}
