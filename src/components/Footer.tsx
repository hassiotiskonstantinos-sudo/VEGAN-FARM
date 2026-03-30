import Link from "next/link";
import { PawPrint, Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-green-900 text-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="bg-green-400 rounded-full p-1.5">
                <PawPrint className="h-5 w-5 text-green-900" />
              </div>
              <div className="leading-tight">
                <span className="font-bold text-white block text-sm">Zografou Stray</span>
                <span className="text-green-300 text-xs block -mt-0.5">Vegan Farm</span>
              </div>
            </Link>
            <p className="text-green-300 text-sm leading-relaxed mb-4">
              Περισυλλογή και φροντίδα αδέσποτων ζώων στον Ζωγράφου. Βιωσιμη κτηνοτροφία χωρίς εκμετάλλευση, με αγάπη για κάθε πλάσμα.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Facebook, href: "https://www.facebook.com/groups/759008432624505", label: "Facebook" },
                { Icon: Instagram, href: "#", label: "Instagram" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href !== "#" ? "_blank" : undefined}
                  rel={href !== "#" ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className="bg-green-800 hover:bg-green-700 p-2 rounded-full transition-colors"
                >
                  <Icon className="h-4 w-4 text-green-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Γρήγοροι Σύνδεσμοι</h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/about", label: "Σχετικά με εμάς" },
                { href: "/campaigns", label: "Εκστρατείες" },
                { href: "/projects", label: "Προγράμματά μας" },
                { href: "/donate", label: "Κάνε δωρεά" },
                { href: "/contact", label: "Επικοινωνία" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-green-300 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-semibold text-white mb-4">Δράσεις μας</h3>
            <ul className="space-y-2 text-sm text-green-300">
              <li>Περισυλλογή αδέσποτων</li>
              <li>Κτηνιατρική φροντίδα</li>
              <li>Υιοθεσία ζώων</li>
              <li>Vegan αγρόκτημα</li>
              <li>Ευαισθητοποίηση κοινού</li>
              <li>Εκπαίδευση νέων</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">Επικοινωνία</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-green-300">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>Ζωγράφου, Αθήνα<br />Αττική, Ελλάδα</span>
              </li>
              <li className="flex items-center gap-2 text-green-300">
                <Mail className="h-4 w-4 shrink-0" />
                <a href="mailto:info.veganfarm@yahoo.com" className="hover:text-white transition-colors">
                  info.veganfarm@yahoo.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-green-300">
                <Phone className="h-4 w-4 shrink-0" />
                <a href="tel:+306940153275" className="hover:text-white transition-colors">
                  +30 694 015 3275
                </a>
              </li>
            </ul>
            <div className="mt-4 p-3 bg-green-800 rounded-lg">
              <p className="text-xs text-green-300">
                Καταχωρημένη ΜΚΟ · ΑΦΜ: 123456789<br />
                Οι δωρεές είναι φορολογικά εκπεστέες
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-green-800 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-green-400">
          <p>© 2026 Zografou Stray – Vegan Farm ΜΚΟ. Όλα τα δικαιώματα διατηρούνται.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white transition-colors">Πολιτική Απορρήτου</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Όροι Χρήσης</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
