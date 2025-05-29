import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: "About Jinnah Xperts | Leading Solar Energy Solutions in Pakistan",
  description:
    "Discover Jinnah Xperts, your trusted partner for solar energy solutions in Pakistan. Learn about our mission to provide sustainable solar panel installations and renewable energy services.",
  keywords: [
    "Jinnah Xperts",
    "solar energy Pakistan",
    "solar panel installation",
    "renewable energy solutions",
    "solar company Pakistan",
    "solar power services",
    "about Jinnah Xperts",
  ],
  openGraph: {
    title: "About Jinnah Xperts | Leading Solar Energy Solutions in Pakistan",
    description:
      "Discover Jinnah Xperts, your trusted partner for solar energy solutions in Pakistan. Learn about our mission to provide sustainable solar panel installations and renewable energy services.",
    url: "https://www.jinnahexpert.com/about",
    siteName: "Jinnah Xperts",
    images: [
      {
        url: "https://www.jinnahexpert.com/favicon.ico",
        width: 1200,
        height: 630,
        alt: "Jinnah Xperts Solar Energy Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Jinnah Xperts",
    description:
      "Discover Jinnah Xperts’ mission to deliver top-tier solar energy solutions and sustainable power in Pakistan.",
    images: ["https://www.jinnahexpert.com/favicon.ico"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={inter.className} role="main">
      <Head>
        <link
          rel="preload"
          href="/fonts/inter.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Jinnah Xperts",
              description:
                "Jinnah Xperts provides top-tier solar energy solutions, including solar panel installation and renewable energy services in Pakistan.",
              url: "https://www.jinnahexpert.com/about",
              telephone: "+92333-8211195",
              email: "info@jinnahexpert.com",
              address: [
                {
                  "@type": "PostalAddress",
                  streetAddress: "Office # 63 & 64, Ground Floor, Cantonment Shopping Mall, Main Rashid Minhas Road, Gulshan-e-Jamal",
                  addressLocality: "Karachi",
                  addressRegion: "Sindh",
                  postalCode: "75300",
                  addressCountry: "PK",
                },
                {
                  "@type": "PostalAddress",
                  streetAddress: "Office # 09, Runway Commercial, AOHS Falcon, New Malir",
                  addressLocality: "Karachi",
                  addressRegion: "Sindh",
                  postalCode: "75050",
                  addressCountry: "PK",
                },
                {
                  "@type": "PostalAddress",
                  streetAddress: "Office # 12, Ittehad Plaza, near Qadafi Stadium, Main Liberty Chowk, Gulberg III",
                  addressLocality: "Lahore",
                  addressRegion: "Punjab",
                  postalCode: "54660",
                  addressCountry: "PK",
                },
                {
                  "@type": "PostalAddress",
                  streetAddress: "Office # 05, Pehlwan Chowk, Main GT Road",
                  addressLocality: "Gujrat",
                  addressRegion: "Punjab",
                  postalCode: "50700",
                  addressCountry: "PK",
                },
                {
                  "@type": "PostalAddress",
                  streetAddress: "Office # 14, Satellite Town",
                  addressLocality: "Rawalpindi",
                  addressRegion: "Punjab",
                  postalCode: "46000",
                  addressCountry: "PK",
                },
              ],
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+92333-8211195",
                  contactType: "Customer Service",
                  areaServed: "PK",
                  availableLanguage: ["English", "Urdu"],
                },
                {
                  "@type": "ContactPoint",
                  telephone: "+9221-34572065",
                  contactType: "Customer Service",
                  areaServed: "PK",
                  availableLanguage: ["English", "Urdu"],
                },
                {
                  "@type": "ContactPoint",
                  telephone: "+9221-34685110",
                  contactType: "Customer Service",
                  areaServed: "PK",
                  availableLanguage: ["English", "Urdu"],
                },
                {
                  "@type": "ContactPoint",
                  email: "info@jinnahexpert.com",
                  contactType: "Customer Service",
                  areaServed: "PK",
                  availableLanguage: ["English", "Urdu"],
                },
              ],
              image: "https://www.jinnahexpert.com/favicon.ico",
              logo: {
                "@type": "ImageObject",
                url: "https://www.jinnahexpert.com/favicon.ico",
              },
              sameAs: [
                "https://www.facebook.com/profile.php?id=61575885641451",
                "https://www.instagram.com/jinnah__xperts",
                "https://www.linkedin.com/company/jinnahxpert",
              ],
            }),
          }}
        />
      </Head>
      {children}
    </div>
  );
}