import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OrganizationJsonLd from "@/components/OrganizationJsonLd";
import { COMPANY_LEGAL_NAME, COMPANY_URL } from "@/lib/company";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const description = "Building intelligent tools for modern developers and enterprises";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen flex flex-col bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300`}>
        <OrganizationJsonLd />
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
