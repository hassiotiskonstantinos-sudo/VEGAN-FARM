import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Zografou Stray – Vegan Farm | ΜΚΟ Αδέσποτων Ζωγράφου",
  description:
    "Η ΜΚΟ Zografou Stray – Vegan Farm περισυλλέγει και φροντίζει αδέσποτα ζώα στον Ζωγράφου Αθήνας. Υιοθεσίες, κτηνιατρική φροντίδα και βιώσιμη αγροτική εκπαίδευση.",
  keywords: ["αδέσποτα", "Ζωγράφου", "ΜΚΟ", "vegan farm", "υιοθεσία ζώων", "δωρεά", "Αθήνα"],
  openGraph: {
    title: "Zografou Stray – Vegan Farm",
    description: "Περισυλλογή αδέσποτων και βιώσιμη γεωργία στον Ζωγράφου Αθήνας.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="el">
      <body className="antialiased font-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
