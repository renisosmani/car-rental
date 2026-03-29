"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Car,
  ShoppingBag,
  UserCheck,
  PlusCircle,
  Globe,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";

const navLinks = [
  { href: "/search?type=rent", label: "Rent a Car", icon: Car },
  { href: "/search?type=buy", label: "Buy a Car", icon: ShoppingBag },
  { href: "/search?type=chauffeur", label: "Car with Driver", icon: UserCheck },
  { href: "/dashboard", label: "List Your Car", icon: PlusCircle },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lang, setLang] = useState<"ALB" | "ENG">("ENG");
  const [currency, setCurrency] = useState<"ALL" | "EUR">("EUR");

  return (
    <nav className="sticky top-0 z-50 bg-onyx shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="bg-crimson rounded-lg p-1.5">
              <Car className="w-6 h-6 text-white" />
            </div>
            <div className="leading-tight">
              <span className="text-white font-bold text-lg">AutoShqip</span>
              <span className="hidden sm:block text-gray-400 text-xs -mt-0.5">
                Albania&apos;s Car Marketplace
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map(({ href, label, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                className={`flex items-center gap-1.5 text-sm font-medium px-3 py-2 rounded-lg transition-colors ${
                  label === "List Your Car"
                    ? "bg-crimson text-white hover:bg-crimson-800"
                    : "text-gray-300 hover:text-white hover:bg-onyx-light"
                }`}
              >
                <Icon className="w-4 h-4" />
                {label}
              </Link>
            ))}
          </div>

          {/* Lang/Currency Toggle + Mobile Menu */}
          <div className="flex items-center gap-2">
            {/* Language Toggle */}
            <button
              onClick={() => setLang(lang === "ALB" ? "ENG" : "ALB")}
              className="flex items-center gap-1 text-xs text-gray-300 hover:text-white bg-onyx-light px-2 py-1.5 rounded-md transition-colors"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{lang}</span>
              <ChevronDown className="w-3 h-3" />
            </button>

            {/* Currency Toggle */}
            <button
              onClick={() => setCurrency(currency === "ALL" ? "EUR" : "ALL")}
              className="text-xs text-gray-300 hover:text-white bg-onyx-light px-2 py-1.5 rounded-md transition-colors font-medium"
            >
              {currency}
            </button>

            {/* Mobile menu button */}
            <button
              className="lg:hidden text-gray-300 hover:text-white p-1.5 rounded-md"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-onyx-light border-t border-gray-700">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {navLinks.map(({ href, label, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-2 text-sm font-medium px-3 py-2.5 rounded-lg transition-colors ${
                  label === "List Your Car"
                    ? "bg-crimson text-white"
                    : "text-gray-300 hover:text-white hover:bg-onyx"
                }`}
              >
                <Icon className="w-4 h-4" />
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
