import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PARTNERS | GreenBYSolar",
  description: "Learn more about GreenBYSolar and our partners.",
};

export default function PartnersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={inter.className}>
      {children}
    </div>
  );
}