import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CAREER | Jinnah Solar",
  description: "Learn more about Jinnah Solar and our career opportunities.",
};

export default function CareerLayout({
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