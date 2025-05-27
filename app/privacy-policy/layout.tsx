import { Inter, Poppins } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"], weight: ["400", "600", "700"], display: "swap" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"], display: "swap" });

export const metadata = {
  title: "Privacy Policy | Jinnah Xpert Solar Energy Solutions Pakistan",
  description:
    "Read Jinnah Xpert’s Privacy Policy to understand how we protect your data while providing solar energy solutions in Karachi, Lahore, Gujrat, and Rawalpindi.",
  keywords: [
    "Jinnah Xpert privacy policy",
    "solar company privacy policy Pakistan",
    "solar energy Karachi",
    "renewable energy privacy",
    "solar panel installation Lahore",
    "solar solutions Rawalpindi",
    "data protection solar company",
  ],
  openGraph: {
    title: "Privacy Policy | Jinnah Xpert Solar Energy Solutions Pakistan",
    description:
      "Learn how Jinnah Xpert safeguards your personal information while delivering solar energy services across Karachi, Lahore, Gujrat, and Rawalpindi.",
    url: "https://www.jinnahexpert.com/privacy-policy",
    siteName: "Jinnah Xpert",
    images: [
      {
        url: "https://www.jinnahexpert.com/favicon.ico",
        width: 1200,
        height: 630,
        alt: "Jinnah Xpert Privacy Policy",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Jinnah Xpert",
    description:
      "Jinnah Xpert’s Privacy Policy outlines how we protect your data for solar energy services in Pakistan.",
    images: ["https://www.jinnahexpert.com/favicon.ico"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function PrivacyPolicyLayout({
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
              name: "Privacy Policy",
              description:
                "Jinnah Xpert’s Privacy Policy details how we handle personal data for our solar energy solutions in Pakistan.",
              url: "https://www.jinnahexpert.com/privacy-policy",
              publisher: {
                "@type": "Organization",
                name: "Jinnah Xpert",
                description:
                  "Jinnah Xpert provides solar panel installation and renewable energy solutions across Pakistan.",
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
                  "https://www.facebook.com/jinnahexpert",
                  "https://www.twitter.com/jinnahexpert",
                  "https://www.linkedin.com/company/jinnahexpert",
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