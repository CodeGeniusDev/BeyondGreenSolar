import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PRODUCTS | Jinnah Solar",
  description: "Learn more about Jinnah Solar and our products.",
};

export default function ProductsLayout({
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