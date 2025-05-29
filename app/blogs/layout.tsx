import { Inter, Poppins } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"], display: "swap" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"], display: "swap" });

export const metadata = {
  title: "Jinnah Xperts Solar Blog | Latest Solar Energy News in Pakistan",
  description:
    "Explore Jinnah Xperts’ blog for the latest solar energy news, solar panel installation tips, and renewable energy insights in Pakistan.",
  keywords: [
    "Jinnah Xperts solar blog",
    "solar energy Pakistan",
    "solar panel installation tips",
    "renewable energy news",
    "solar technology Pakistan",
    "solar power savings",
    "solar company blog Pakistan",
  ],
  openGraph: {
    title: "Jinnah Xperts Solar Blog | Latest Solar Energy News in Pakistan",
    description:
      "Explore Jinnah Xperts’ blog for the latest solar energy news, solar panel installation tips, and renewable energy insights in Pakistan.",
    url: "https://www.jinnahexpert.com/blogs",
    siteName: "Jinnah Xperts",
    images: [
      {
        url: "https://images.pexels.com/photos/159397/solar-panel-array-power-sun-electricity-159397.jpeg",
        width: 1200,
        height: 630,
        alt: "Jinnah Xperts Solar Blog",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jinnah Xperts Solar Blog",
    description:
      "Stay updated with Jinnah Xperts’ solar blog for tips on solar panel installation and renewable energy in Pakistan.",
    images: ["https://images.pexels.com/photos/159397/solar-panel-array-power-sun-electricity-159397.jpeg"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function BlogLayout({
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
              "@type": "Blog",
              name: "Jinnah Xperts Solar Blog",
              description:
                "Jinnah Xperts’ blog provides the latest news, tips, and insights on solar energy and renewable solutions in Pakistan.",
              url: "https://www.jinnahexpert.com/blogs",
              publisher: {
                "@type": "Organization",
                name: "Jinnah Xperts",
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