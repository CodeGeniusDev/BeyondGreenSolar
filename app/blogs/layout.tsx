import { Inter, Poppins } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] });

export const metadata = {
  title: "Solar Insights Blog - Latest Solar News",
  description: "Explore the latest in solar technology, installation tips, and energy savings.",
  keywords: "solar technology, installation tips, energy savings, solar blog",
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
    <div className={`${inter.className} ${poppins.className}`}>
      {children}
    </div>
  );
}