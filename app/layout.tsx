import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer/footer";
import { NavbarSection } from "./components/NavbarSection";
import Whatsapp from "./components/ui/Whatsapp";

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />

        {/* Iubenda Cookie Solution */}
        <script
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
        <script
          type="text/javascript"
          src="https://cs.iubenda.com/autoblocking/4031420.js"
        ></script>
        <script
          type="text/javascript"
          src="//cdn.iubenda.com/cs/gpp/stub.js"
        ></script>
        <script
          type="text/javascript"
          src="//cdn.iubenda.com/cs/iubenda_cs.js"
          charSet="UTF-8"
          async
        ></script>

        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-CQGN7YD88N"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-CQGN7YD88N');
            `,
          }}
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
