import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "VeganFarm NGO – Sustainable Farming for a Better World",
  description:
    "VeganFarm NGO empowers communities through sustainable vegan farming, education, and compassionate living. Join us in building a greener, kinder world.",
  keywords: ["vegan farming", "NGO", "sustainable agriculture", "food sovereignty", "donate", "fundraising"],
  openGraph: {
    title: "VeganFarm NGO",
    description: "Empowering communities through sustainable vegan farming.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
