import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zografou Stray – Vegan Farm",
  description: "Animal rescue NGO based in Zografou, Athens.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="el">
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
