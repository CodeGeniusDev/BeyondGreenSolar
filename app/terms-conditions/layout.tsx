import { Inter, Poppins } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"], weight: ["400", "600", "700"], display: "swap" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"], display: "swap" });

export const metadata = {
  title: "Terms & Conditions | Jinnah Xperts Solar Energy Solutions Pakistan",
  description:
    "Review Jinnah Xperts’ Terms & Conditions for solar energy services, including solar panel installation and renewable energy solutions in Karachi, Lahore, Gujrat, and Rawalpindi.",
  keywords: [
    "Jinnah Xperts terms and conditions",
    "solar company terms Pakistan",
    "solar energy Karachi",
    "solar panel installation terms Lahore",
    "renewable energy terms Rawalpindi",
    "solar solutions Gujrat",
  ],
  openGraph: {
    title: "Terms & Conditions | Jinnah Xperts Solar Energy Solutions Pakistan",
    description:
      "Understand the Terms & Conditions for Jinnah Xperts’ solar energy services across Karachi, Lahore, Gujrat, and Rawalpindi.",
    url: "https://www.jinnahexpert.com/terms-conditions",
    siteName: "Jinnah Xperts",
    images: [
      {
        url: "https://www.jinnahexpert.com/favicon.ico",
        width: 1200,
        height: 630,
        alt: "Jinnah Xperts Terms & Conditions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms & Conditions | Jinnah Xperts",
    description:
      "Jinnah Xperts’ Terms & Conditions for solar energy solutions in Pakistan.",
    images: ["https://www.jinnahexpert.com/favicon.ico"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function TermsConditionsLayout({
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
        <link
          rel="preload"
          href="/fonts/poppins.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Terms & Conditions",
              description:
                "Jinnah Xperts’ Terms & Conditions outline the terms for our solar energy services in Pakistan.",
              url: "https://www.jinnahexpert.com/terms-conditions",
              publisher: {
                "@type": "Organization",
                name: "Jinnah Xperts",
                description:
                  "Jinnah Xperts provides solar panel installation and renewable energy solutions across Pakistan.",
                url: "https://www.jinnahexpert.com",
                logo: {
                  "@type": "ImageObject",
                  url: "https://www.jinnahexpert.com/favicon.ico",
                },
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
                telephone: "+92333-8211195",
                email: "info@jinnahexpert.com",
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
                sameAs: [
                  "https://www.facebook.com/profile.php?id=61575885641451",
                  "https://www.instagram.com/jinnah__xperts",
                  "https://www.linkedin.com/company/jinnahxpert",
                ],
              },
            }),
          }}
        />
      </Head>
      <main className={poppins.className}>{children}</main>
    </div>
  );
}