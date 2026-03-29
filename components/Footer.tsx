import Link from "next/link";
import { Car, ExternalLink, Globe, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-onyx text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="bg-crimson rounded-lg p-1.5">
                <Car className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">AutoShqip</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Albania&apos;s premier zero-commission car rental marketplace. 
              Connect directly with local suppliers for the best deals.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 bg-onyx-light rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-colors"
                aria-label="Facebook"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-onyx-light rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-pink-600 transition-colors"
                aria-label="Instagram"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-onyx-light rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-sky-500 transition-colors"
                aria-label="Twitter"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { href: "/search?type=rent", label: "Rent a Car" },
                { href: "/search?type=buy", label: "Buy a Car" },
                { href: "/search?type=chauffeur", label: "Car with Driver" },
                { href: "/dashboard", label: "List Your Car" },
                { href: "#reviews", label: "Customer Reviews" },
              ].map(({ href, label }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-bold text-white mb-4">Popular Locations</h4>
            <ul className="space-y-2.5">
              {[
                "Tirana",
                "TIA Airport",
                "Durrës",
                "Vlorë",
                "Sarandë",
                "Shkodër",
              ].map((city) => (
                <li key={city}>
                  <Link
                    href={`/search?pickup=${city}`}
                    className="flex items-center gap-1.5 text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    <MapPin className="w-3.5 h-3.5" />
                    {city}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <Phone className="w-4 h-4 text-crimson flex-shrink-0" />
                <a href="tel:+35569000000" className="hover:text-white transition-colors">
                  +355 69 000 0000
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <Mail className="w-4 h-4 text-crimson flex-shrink-0" />
                <a
                  href="mailto:info@autoshqip.al"
                  className="hover:text-white transition-colors"
                >
                  info@autoshqip.al
                </a>
              </li>
              <li className="flex items-start gap-2 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-crimson flex-shrink-0 mt-0.5" />
                <span>Rruga Myslym Shyri, Tirana, Albania</span>
              </li>
            </ul>
            <div className="mt-4 p-3 bg-green-900/30 rounded-xl border border-green-800/40">
              <p className="text-xs text-green-400 font-medium mb-1">
                WhatsApp Support
              </p>
              <p className="text-xs text-gray-400">Available 7 days, 8am-10pm</p>
              <a
                href="https://wa.me/35569000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-2 text-green-400 hover:text-green-300 text-xs font-semibold transition-colors"
              >
                Chat on WhatsApp →
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} AutoShqip. All rights reserved. Made for Albania 🇦🇱
          </p>
          <div className="flex gap-4 text-xs text-gray-500">
            <Link href="#" className="hover:text-gray-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-gray-300 transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-gray-300 transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
