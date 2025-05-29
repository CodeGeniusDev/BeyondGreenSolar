import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { NavbarSection } from "./components/NavbarSection";
import Footer from "./components/Footer/footer";
import Whatsapp from "./components/ui/Whatsapp";
import Script from "next/script";
import "./globals.css";
import SocialLinks from "./components/ui/social";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jinnah Xperts Solar | Solar Panels & Solutions in Pakistan",
  description:
    "Jinnah Xperts Solar offers high-efficiency solar panels and renewable energy solutions for homes and businesses in Karachi, Lahore, Gujrat, and Rawalpindi. Go solar now!",
  keywords: [
    "solar panels Pakistan",
    "solar panel manufacturer Pakistan",
    "Jinnah Xperts Solar",
    "renewable energy Pakistan",
    "solar energy Karachi",
    "solar power for homes",
    "solar power for businesses",
    "solar solutions Lahore",
    "solar equipment Rawalpindi",
    "solar systems Gujrat",
    "jinnahexpert.com",
  ],
  authors: [
    { name: "Jinnah Xperts Solar Team", url: "https://jinnahexpert.com" },
  ],
  robots:
    "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  openGraph: {
    title: "Jinnah Xperts Solar | Top Solar Solutions in Pakistan",
    description:
      "Switch to renewable energy with Jinnah Xperts Solar’s high-efficiency solar panels in Karachi, Lahore, Gujrat, and Rawalpindi. Contact us today!",
    url: "https://jinnahexpert.com",
    siteName: "Jinnah Xperts Solar",
    images: [
      {
        url: "https://jinnahexpert.com/favicon.ico",
        width: 1200,
        height: 630,
        alt: "Jinnah Xperts Solar Panels - Renewable Energy Solutions",
      },
    ],
    locale: "en_PK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jinnah Xperts Solar | Solar Panels in Pakistan",
    description:
      "Go green with Jinnah Xperts Solar’s solar panels and energy solutions in Karachi, Lahore, and beyond. Contact us!",
    images: ["https://jinnahexpert.com/favicon.ico"],
    creator: "@jinnahexpert",
  },
  alternates: {
    canonical: "https://jinnahexpert.com",
    languages: {
      "en-PK": "https://jinnahexpert.com/en-pk",
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Jinnah Xperts Solar",
      url: "https://jinnahexpert.com",
      logo: "https://jinnahexpert.com/favicon.ico",
      address: [
        {
          "@type": "PostalAddress",
          streetAddress:
            "Office # 63 & 64, Ground Floor, Cantonment Shopping Mall, Main Rashid Minhas Road, Gulshan-e-Jamal",
          addressLocality: "Karachi",
          addressRegion: "Sindh",
          postalCode: "75300",
          addressCountry: "PK",
        },
        {
          "@type": "PostalAddress",
          streetAddress:
            "Office # 09, Runway Commercial, AOHS Falcon, New Malir",
          addressLocality: "Karachi",
          addressRegion: "Sindh",
          postalCode: "75050",
          addressCountry: "PK",
        },
        {
          "@type": "PostalAddress",
          streetAddress:
            "Office # 12, Ittehad Plaza, near Qadafi Stadium, Main Liberty Chowk, Gulberg III",
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
    }),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-PK"
      dir="ltr"
      className={`${inter.variable} ${poppins.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" />
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
        <Script
          id="iubenda-cs-configuration"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              var _iub = _iub || [];
              _iub.csConfiguration = {
                siteId: 4031420,
                cookiePolicyId: 17708919,
                lang: "en",
                storage: { useSiteId: true }
              };
            `,
          }}
        />
        <Script
          src="https://cs.iubenda.com/autoblocking/4031420.js"
          strategy="lazyOnload"
        />
        <Script src="//cdn.iubenda.com/cs/gpp/stub.js" strategy="lazyOnload" />
        <Script
          src="//cdn.iubenda.com/cs/iubenda_cs.js"
          charSet="UTF-8"
          strategy="lazyOnload"
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-CQGN7YD88N"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-CQGN7YD88N');
            `,
          }}
        />
        <Script
          src="https://www.clarity.ms/tag/rojyflares"
          strategy="afterInteractive"
        />
        {/* <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.bq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '4110146695884260');
              fbq('track', 'PageView');
            `,
          }}
        /> */}
        {/* <Script
          id="meta-pixel-noscript"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              <noscript>
                <img
                  height="1"
                  width="1"
                  style="display:none"
                  src="https://www.facebook.com/tr?id=4110146695884260&ev=PageView&noscript=1"
                  alt=""
                />
              </noscript>
            `,
          }}
        /> */}
      </head>
      <body className="antialiased overflow-x-hidden">
        <NavbarSection />
        <main role="main">{children}</main>
        <Footer />
        <div className="fixed bottom-10 right-10 z-[9999] cursor-pointer">
          <Whatsapp />
        </div>
        <SocialLinks />
      </body>
    </html>
  );
}
