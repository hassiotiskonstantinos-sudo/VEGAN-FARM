import type { Metadata } from "next";
import NavbarEn from "@/components/NavbarEn";
import FooterEn from "@/components/FooterEn";

export const metadata: Metadata = {
  title: "Zografou Stray – Vegan Farm | Animal Rescue NGO Athens",
  description:
    "Zografou Stray – Vegan Farm rescues and cares for stray animals in Zografou, Athens. Adoptions, veterinary care, and sustainable vegan farming.",
  keywords: ["animal rescue", "Zografou", "NGO", "vegan farm", "pet adoption", "donate", "Athens", "Greece"],
  openGraph: {
    title: "Zografou Stray – Vegan Farm",
    description: "Rescuing stray animals and building a sustainable community in Zografou, Athens.",
    type: "website",
  },
};

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavbarEn />
      <main>{children}</main>
      <FooterEn />
    </>
  );
}
