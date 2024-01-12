import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import NavBar from "./ui/components/NavBar";
import TsParticles from "./ui/components/TsParticles";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gorgees Odisho",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-mono text-gBlue bg-black">
        <TsParticles />

        <div className="relative">
          <NavBar />
          <section>{children}</section>
        </div>
      </body>
    </html>
  );
}
