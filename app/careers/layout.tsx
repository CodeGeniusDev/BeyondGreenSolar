import { Inter, Poppins } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"], weight: ["400", "600", "700"], display: "swap" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"], display: "swap" });

export const metadata = {
  title: "Careers at Jinnah Xperts | Solar Energy Jobs in Pakistan",
  description:
    "Join Jinnah Xperts’ team to shape the future of solar energy in Pakistan. Explore career opportunities in solar panel installation, renewable energy, and more across Karachi, Lahore, Gujrat, and Rawalpindi.",
  keywords: [
    "Jinnah Xperts careers",
    "solar jobs Pakistan",
    "solar panel installation jobs",
    "renewable energy careers",
    "solar company jobs Karachi",
    "solar jobs Lahore",
    "solar careers Pakistan",
  ],
  openGraph: {
    title: "Careers at Jinnah Xperts | Solar Energy Jobs in Pakistan",
    description:
      "Join Jinnah Xperts’ team to shape the future of solar energy in Pakistan. Explore career opportunities in solar panel installation and renewable energy.",
    url: "https://www.jinnahexpert.com/careers",
    siteName: "Jinnah Xperts",
    images: [
      {
        url: "https://www.jinnahexpert.com/favicon.ico",
        width: 1200,
        height: 630,
        alt: "Jinnah Xperts Solar Careers",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers at Jinnah Xperts",
    description:
      "Explore solar energy job opportunities with Jinnah Xperts in Pakistan. Join us in Karachi, Lahore, Gujrat, or Rawalpindi.",
    images: ["https://www.jinnahexpert.com/favicon.ico"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function CareerLayout({
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
                "Jinnah Xperts is a leading solar energy company offering career opportunities in solar panel installation and renewable energy across Pakistan.",
              url: "https://www.jinnahexpert.com/careers",
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
              jobPosting: [
                {
                  "@type": "JobPosting",
                  title: "Solar Installation Technician",
                  description:
                    "Join Jinnah Xperts as a Solar Installation Technician in Karachi, Lahore, Gujrat, or Rawalpindi. Install and maintain solar panels for residential and commercial clients.",
                  datePosted: "2025-05-27",
                  validThrough: "2025-08-27",
                  employmentType: "FULL_TIME",
                  hiringOrganization: {
                    "@type": "Organization",
                    name: "Jinnah Xperts",
                    sameAs: "https://www.jinnahexpert.com",
                  },
                  jobLocation: [
                    {
                      "@type": "Place",
                      address: {
                        "@type": "PostalAddress",
                        streetAddress: "Office # 63 & 64, Ground Floor, Cantonment Shopping Mall, Main Rashid Minhas Road, Gulshan-e-Jamal",
                        addressLocality: "Karachi",
                        addressRegion: "Sindh",
                        postalCode: "75300",
                        addressCountry: "PK",
                      },
                    },
                    {
                      "@type": "Place",
                      address: {
                        "@type": "PostalAddress",
                        streetAddress: "Office # 12, Ittehad Plaza, near Qadafi Stadium, Main Liberty Chowk, Gulberg III",
                        addressLocality: "Lahore",
                        addressRegion: "Punjab",
                        postalCode: "54660",
                        addressCountry: "PK",
                      },
                    },
                  ],
                },
                // Add more JobPosting entries as needed
              ],
            }),
          }}
        />
      </Head>
      <main className={poppins.className}>{children}</main>
    </div>
  );
}