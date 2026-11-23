import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans, Schibsted_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OrganizationJsonLd from "@/components/OrganizationJsonLd";
import { COMPANY_LEGAL_NAME, COMPANY_URL } from "@/lib/company";

const display = Schibsted_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const body = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const description =
  "Blulyne Group makes VitalWall, BlackOps Center, Hey Spotter and VoiceCommit: four live products from one builder working with AI agents.";

export const metadata: Metadata = {
  metadataBase: new URL(COMPANY_URL),
  title: COMPANY_LEGAL_NAME,
  description,
  openGraph: {
    title: COMPANY_LEGAL_NAME,
    description,
    url: COMPANY_URL,
    siteName: COMPANY_LEGAL_NAME,
    type: "website",
    locale: "en_US",
  },
};

export const viewport: Viewport = {
  themeColor: "#070B14",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="min-h-screen flex flex-col text-gray-100">
        <OrganizationJsonLd />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
