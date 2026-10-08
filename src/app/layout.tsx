import type { Metadata, Viewport } from "next";
import { Cookie, Raleway } from "next/font/google";
import { SiteFrame } from "@/components/SiteFrame";
import { site, socials } from "@/content/site";
import "./globals.css";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-raleway",
  display: "swap",
});

const cookie = Cookie({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-cookie",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Zookini Tours. Celebrating Life!",
    template: "%s. Zookini Tours",
  },
  description:
    "Small South African tours, planned in the Cape Winelands for leisure travellers, teams, and schools.",
  openGraph: {
    title: "Zookini Tours. Celebrating Life!",
    description:
      "Small South African tours for leisure travellers, teams, and schools.",
    locale: "en_ZA",
    type: "website",
    siteName: "Zookini Tours",
    url: site.url,
  },
};

export const viewport: Viewport = {
  themeColor: "#80A6AD",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: site.name,
  slogan: site.tagline,
  url: site.url,
  email: site.email,
  telephone: site.phoneTel,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Paarl",
    addressRegion: "Western Cape",
    addressCountry: "ZA",
  },
  sameAs: socials.map((social) => social.href),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${raleway.variable} ${cookie.variable} h-full antialiased`}>
      <body className="min-h-full">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <SiteFrame>{children}</SiteFrame>
      </body>
    </html>
  );
}
