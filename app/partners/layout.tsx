import { Inter, Poppins } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"], weight: ["400", "600", "700"], display: "swap" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"], display: "swap" });

export const metadata = {
  title: "Partners of Jinnah Xperts | Solar Energy Collaborations in Pakistan",
  description:
    "Discover Jinnah Xperts’ trusted partners in solar energy solutions. Collaborate with us in Karachi, Lahore, Gujrat, or Rawalpindi to advance renewable energy in Pakistan.",
  keywords: [
    "Jinnah Xperts partners",
    "solar partnerships Pakistan",
    "solar energy collaborations",
    "solar panel suppliers Karachi",
    "renewable energy partners Lahore",
    "solar company partnerships",
    "solar solutions Gujrat",
  ],
  openGraph: {
    title: "Partners of Jinnah Xperts | Solar Energy Collaborations in Pakistan",
    description:
      "Explore Jinnah Xperts’ partnerships in solar panel installation and renewable energy solutions across Karachi, Lahore, Gujrat, and Rawalpindi.",
    url: "https://www.jinnahexpert.com/partners",
    siteName: "Jinnah Xperts",
    images: [
      {
        url: "https://www.jinnahexpert.com/favicon.ico",
        width: 1200,
        height: 630,
        alt: "Jinnah Xperts Solar Partnerships",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Partners of Jinnah Xperts",
    description:
      "Join Jinnah Xperts’ network of solar energy partners in Pakistan. Collaborate with us in Karachi, Lahore, Gujrat, or Rawalpindi.",
    images: ["https://www.jinnahexpert.com/favicon.ico"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function PartnersLayout({
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
              "@type": "Organization",
              name: "Jinnah Xperts",
              description:
                "Jinnah Xperts partners with leading solar energy companies to provide top-tier solar panel installation and renewable energy solutions across Pakistan.",
              url: "https://www.jinnahexpert.com/partners",
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
              member: [
                {
                  "@type": "Organization",
                  name: "Sample Solar Partner",
                  description: "A leading solar panel manufacturer collaborating with Jinnah Xperts.",
                  url: "https://www.jinnahexpert.com",
                },
                // Add more partner organizations as needed
              ],
            }),
          }}
        />
      </Head>
      <main className={poppins.className}>{children}</main>
    </div>
  );
}