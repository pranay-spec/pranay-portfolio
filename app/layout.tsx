import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from "@/lib/site-config";
import { JsonLd } from "@/components/json-ld";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: "Pranay Gujar | AI Engineer & Full-Stack Developer",
    template: "%s | Pranay Gujar",
  },
  description:
    "Pranay Gujar is an Artificial Intelligence undergraduate at VIT Pune building full-stack applications, machine learning systems, and financial digital twins.",
  applicationName: "Pranay Gujar Developer Portfolio",
  authors: [{ name: "Pranay Gujar", url: SITE_CONFIG.url }],
  creator: "Pranay Gujar",
  publisher: "Pranay Gujar",
  keywords: [
    "Pranay Gujar",
    "Pranay Gujar Pune",
    "AI Engineer Pune",
    "Full-Stack Developer",
    "Applied Machine Learning",
    "Equinox Flow",
    "Parallax Edge",
    "Sentinel-X",
    "VIT Pune",
    "Monte Carlo Simulation",
    "FastAPI Next.js",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Pranay Gujar Portfolio",
    title: "Pranay Gujar | AI Engineer & Full-Stack Developer",
    description:
      "Artificial Intelligence undergraduate at VIT Pune building full-stack applications, machine-learning systems, and data-driven products.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pranay Gujar | AI Engineer & Full-Stack Developer",
    description:
      "Artificial Intelligence undergraduate at VIT Pune building full-stack applications, machine-learning systems, and data-driven products.",
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
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth dark`}
    >
      <head>
        <JsonLd />
      </head>
      <body className="min-h-screen bg-[#090B10] text-[#F3F4F6] font-sans antialiased selection:bg-[#C5F36B] selection:text-[#090B10]">
        {/* Accessible Skip Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#C5F36B] focus:text-[#090B10] focus:font-mono focus:text-xs focus:font-semibold focus:rounded focus:outline-none"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
