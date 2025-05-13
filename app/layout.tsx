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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
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
