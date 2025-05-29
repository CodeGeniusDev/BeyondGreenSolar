import { Inter, Poppins } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"], weight: ["400", "600", "700"], display: "swap" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"], display: "swap" });

export const metadata = {
  title: "Solar Projects | Jinnah Xperts Solar Energy Solutions Pakistan",
  description:
    "Explore Jinnah Xperts’ solar projects, delivering renewable energy solutions for homes and businesses in Karachi, Lahore, Gujrat, and Rawalpindi.",
  keywords: [
    "Jinnah Xperts solar projects",
    "solar projects Pakistan",
    "solar energy Karachi",
    "solar panel installation Lahore",
    "renewable energy projects Rawalpindi",
    "solar solutions Gujrat",
  ],
  openGraph: {
    title: "Solar Projects | Jinnah Xperts Solar Energy Solutions Pakistan",
    description:
      "Discover Jinnah Xperts’ solar projects showcasing renewable energy solutions across Karachi, Lahore, Gujrat, and Rawalpindi.",
    url: "https://www.jinnahexpert.com/projects",
    siteName: "Jinnah Xperts",
    images: [
      {
        url: "https://www.jinnahexpert.com/favicon.ico",
        width: 1200,
        height: 630,
        alt: "Jinnah Xperts Solar Projects",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Solar Projects | Jinnah Xperts",
    description:
      "See Jinnah Xperts’ solar projects transforming energy in Karachi, Lahore, Gujrat, and Rawalpindi.",
    images: ["https://www.jinnahexpert.com/favicon.ico"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={inter.className} role="main">
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Jinnah Xperts",
              description:
                "Jinnah Xperts delivers innovative solar projects, providing renewable energy solutions across Pakistan.",
              url: "https://www.jinnahexpert.com/projects",
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
              project: [
                {
                  "@type": "Project",
                  name: "Karachi Residential Solar Installation",
                  description: "A 10kW solar panel installation for a residential complex in Karachi, reducing energy costs by 60%.",
                  image: "https://www.jinnahexpert.com/favicon.ico",
                  url: "https://www.jinnahexpert.com/projects",
                  location: {
                    "@type": "Place",
                    address: {
                      "@type": "PostalAddress",
                      addressLocality: "Karachi",
                      addressRegion: "Sindh",
                      addressCountry: "PK",
                    },
                  },
                },
                // Add more project entries as needed
              ],
            }),
          }}
        />
      </Head>
      <main className={poppins.className}>{children}</main>
    </div>
  );
}