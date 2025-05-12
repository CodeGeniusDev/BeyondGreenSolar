import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "About | Jinnah Solar",
  description: "Learn more about Jinnah Solar and our mission.",
};

export default function AboutLayout({
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