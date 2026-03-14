import Link from "next/link";
import { PawPrint, Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";

export default function FooterEn() {
  return (
    <footer className="bg-green-900 text-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link href="/en" className="flex items-center gap-2 mb-4">
              <div className="bg-green-400 rounded-full p-1.5">
                <PawPrint className="h-5 w-5 text-green-900" />
              </div>
              <div className="leading-tight">
                <span className="font-bold text-white block text-sm">Zografou Stray</span>
                <span className="text-green-300 text-xs block -mt-0.5">Vegan Farm</span>
              </div>
            </Link>
            <p className="text-green-300 text-sm leading-relaxed mb-4">
              Rescuing and caring for stray animals in Zografou, Athens. Sustainable farming without exploitation, with love for every living being.
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
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/en/about", label: "About Us" },
                { href: "/en/campaigns", label: "Campaigns" },
                { href: "/en/projects", label: "Our Programs" },
                { href: "/en/donate", label: "Donate" },
                { href: "/en/contact", label: "Contact" },
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
            <h3 className="font-semibold text-white mb-4">What We Do</h3>
            <ul className="space-y-2 text-sm text-green-300">
              <li>Stray animal rescue</li>
              <li>Veterinary care</li>
              <li>Animal adoption</li>
              <li>Vegan farm</li>
              <li>Community awareness</li>
              <li>Youth education</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-green-300">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>Zografou, Athens<br />Attica, Greece</span>
              </li>
              <li className="flex items-center gap-2 text-green-300">
                <Mail className="h-4 w-4 shrink-0" />
                <a href="mailto:info@zografoustray.gr" className="hover:text-white transition-colors">
                  info@zografoustray.gr
                </a>
              </li>
              <li className="flex items-center gap-2 text-green-300">
                <Phone className="h-4 w-4 shrink-0" />
                <a href="tel:+302101234567" className="hover:text-white transition-colors">
                  +30 210 123 4567
                </a>
              </li>
            </ul>
            <div className="mt-4 p-3 bg-green-800 rounded-lg">
              <p className="text-xs text-green-300">
                Registered NGO · Greece<br />
                Donations are tax-deductible
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-green-800 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-green-400">
          <p>© 2026 Zografou Stray – Vegan Farm NGO. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/" className="hover:text-white transition-colors">🇬🇷 Ελληνικά</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
