import "./globals.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import Navbar from "./components/Navbar/Navbar";
import RegisterModal from "./components/Modals/RegisterModal";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Airbnb",
  description: "Airbnb with Next.js13",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <RegisterModal />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
