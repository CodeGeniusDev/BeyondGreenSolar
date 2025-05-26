import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NavbarSection } from "./components/NavbarSection";
import Footer from "./components/Footer/footer";
import Whatsapp from "./components/ui/Whatsapp";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jinnah Expert Solar | Leading Solar Panel Manufacturer in Pakistan",
  description:
    "Jinnah Expert Solar: Pakistan's top solar panel manufacturer offering high-efficiency solar solutions for homes and businesses. Contact us to go solar today!",
  keywords: [
    "solar panels Pakistan",
    "solar panel manufacturer Pakistan",
    "Jinnah Expert Solar",
    "Jinnah Solar",
    "renewable energy Pakistan",
    "solar energy solutions Karachi",
    "sustainable energy systems",
    "solar power for homes",
    "solar power for businesses",
    "solar energy Karachi",
    "jinnahexpert.com",
  ],
  authors: [
    { name: "Jinnah Expert Solar Team", url: "https://jinnahexpert.com" },
  ],
  robots: "index, follow, max-image-preview:large, max-snippet:-1",
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "Jinnah Expert Solar | Premier Solar Panel Manufacturer in Pakistan",
    description:
      "Switch to sustainable energy with Jinnah Expert Solar! High-quality solar panels for homes and businesses in Pakistan. Contact us for a greener future!",
    url: "https://jinnahexpert.com",
    siteName: "Jinnah Expert Solar",
    images: [
      {
        url: "https://jinnahexpert.com/image.jpg",
        width: 1200,
        height: 630,
        alt: "Jinnah Expert Solar Panels - High-Efficiency Solar Solutions",
      },
    ],
    locale: "en_PK",
    type: "website",
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
      name: "Jinnah Expert Solar",
      url: "https://jinnahexpert.com",
      logo: "https://jinnahexpert.com/favicon.ico",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+92332-3757694",
        contactType: "Customer Service",
        areaServed: "PK",
        availableLanguage: "English",
      },
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "Office # 63 & 64 Cantonment Mall Main Rashid Minhas Road",
        addressLocality: "Gulshan e Jamal, Karachi",
        postalCode: "75260",
        addressCountry: "PK",
      },
      sameAs: [
        "https://www.facebook.com/jinnahexpert",
        "https://www.instagram.com/jinnahexpert",
        "https://www.linkedin.com/company/jinnahexpert",
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
      lang="en"
      dir="ltr"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" />
        <Script
          id="iubenda-cs-configuration"
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
          type="text/javascript"
          src="https://cs.iubenda.com/autoblocking/4031420.js"
          strategy="beforeInteractive"
        />
        <Script
          type="text/javascript"
          src="//cdn.iubenda.com/cs/gpp/stub.js"
          strategy="beforeInteractive"
        />
        <Script
          type="text/javascript"
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
          type="text/javascript"
          src="https://www.clarity.ms/tag/rojyflares"
          strategy="afterInteractive"
        />

        {/* Meta pixel code here */}
        <Script id="meta-pixel">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '4110146695884260');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=4110146695884260&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </head>
      <body className="antialiased overflow-x-hidden">
        <NavbarSection />
        {children}
        <Footer />
        <div className="fixed bottom-10 right-10 z-[9999] cursor-pointer">
          <Whatsapp />
        </div>
      </body>
    </html>
  );
}
