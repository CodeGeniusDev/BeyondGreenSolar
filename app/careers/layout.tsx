import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CAREER | GreenBYSolar",
  description: "Learn more about GreenBYSolar and our career opportunities.",
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