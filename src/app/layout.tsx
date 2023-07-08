import "./globals.css";
import { Delius } from "next/font/google";

const font = Delius({ subsets: ["latin"], weight: ['400'] });

export const metadata = {
  title: "Our Message Board",
  description: "Darian and Amy's message board",
};

export default function RootLayout({ children }: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
