import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { FloatingNavContent } from "@/components/navbar/FloatingNavContent";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gorgees Odisho",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <FloatingNavContent />
        {children}
      </body>
    </html>
  );
}
