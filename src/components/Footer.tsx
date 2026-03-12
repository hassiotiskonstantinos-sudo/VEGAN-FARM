import Link from "next/link";
import { Leaf, Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-green-900 text-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="bg-green-400 rounded-full p-1.5">
                <Leaf className="h-5 w-5 text-green-900" />
              </div>
              <span className="font-bold text-xl text-white">VeganFarm</span>
              <span className="text-xs font-medium text-green-300 bg-green-800 px-2 py-0.5 rounded-full">NGO</span>
            </Link>
            <p className="text-green-300 text-sm leading-relaxed mb-4">
              Empowering communities through sustainable vegan farming, food sovereignty, and compassionate living.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="https://www.facebook.com/groups/759008432624505"
                  target="_blank"
                  rel="noopener noreferrer"
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
                { href: "/about", label: "About Us" },
                { href: "/campaigns", label: "Campaigns" },
                { href: "/projects", label: "Our Projects" },
                { href: "/donate", label: "Donate" },
                { href: "/contact", label: "Contact Us" },
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
            <h3 className="font-semibold text-white mb-4">Our Programs</h3>
            <ul className="space-y-2 text-sm text-green-300">
              <li>Community Gardens</li>
              <li>Vegan Education</li>
              <li>Food Rescue & Distribution</li>
              <li>Farmer Training</li>
              <li>Environmental Advocacy</li>
              <li>Youth Outreach</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-green-300">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>123 Green Valley Rd,<br />Sustainable City, SC 00000</span>
              </li>
              <li className="flex items-center gap-2 text-green-300">
                <Mail className="h-4 w-4 shrink-0" />
                <a href="mailto:info@veganfarm.org" className="hover:text-white transition-colors">
                  info@veganfarm.org
                </a>
              </li>
              <li className="flex items-center gap-2 text-green-300">
                <Phone className="h-4 w-4 shrink-0" />
                <a href="tel:+1234567890" className="hover:text-white transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
            </ul>
            <div className="mt-4 p-3 bg-green-800 rounded-lg">
              <p className="text-xs text-green-300">
                Registered NGO · Tax ID: 12-3456789<br />
                Donations are tax-deductible
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-green-800 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-green-400">
          <p>© 2026 VeganFarm NGO. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
