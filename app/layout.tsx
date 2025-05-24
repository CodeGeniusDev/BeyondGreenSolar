import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NavbarSection } from "./components/NavbarSection";
import Footer from "./components/Footer/footer";
import Whatsapp from "./components/ui/Whatsapp";
import Script from "next/script";
import './globals.css';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jinnah Solar",
  description: "Jinnah Solar | Solar Panel Manufacturer",
  keywords: ["solar panels", "renewable energy", "Jinnah Solar"],
  openGraph: {
    title: "Jinnah Solar",
    description: "Leading Solar Panel Manufacturer",
    url: "https://jinnahsolar.com",
    siteName: "Jinnah Solar",
    images: ["/favicon.ico"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        {/* Iubenda Cookie Solution */}
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

        {/* Google Analytics */}
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

        {/* Microsoft Clarity */}
        <Script
          type="text/javascript"
          src="https://www.clarity.ms/tag/rojyflares"
          strategy="afterInteractive"
        />
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