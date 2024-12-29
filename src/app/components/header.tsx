"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "About" },
    { href: "/research", label: "Research" },
    { href: "/publications", label: "Publications" },
    { href: "/equipment", label: "Equipment" },
    { href: "/team", label: "Team" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact-us", label: "Contact Us" },
  ];

  return (
    <header className="bg-black w-full top-0 z-50">
      {/* Upper Header */}
      <div className="container border-b border-gray-700 bg-gradient-to-b from-black to-gray-900">
        <div className="flex justify-between items-center h-20 px-4 mx-auto max-w-6xl">
          <Image
            src="https://res.cloudinary.com/dmw1bwmpr/image/upload/v1735413805/EESL/zr3gfwf8d4dmntvi4afk.png"
            alt="EESL Logo"
            width={190}
            height={120}
            className="dark:invert cursor-pointer"
            priority
            onClick={() => window.location.assign("/")}
          />
          <Image
            src="https://res.cloudinary.com/dmw1bwmpr/image/upload/v1735142800/EESL/TCG-Crest.png"
            alt="TCG Crest Logo"
            width={180}
            height={50}
            className="brightness-400 contrast-125 cursor-pointer"
            priority
            onClick={() => window.location.assign("https://www.tcgcrest.org/")}
          />
        </div>
      </div>

      {/* Lower Header */}
      <div className="container border-b border-gray-700 bg-gradient-to-r from-gray-900 to-black">
        <div className="relative flex h-16 items-center justify-center px-4 mx-auto max-w-6xl">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-center space-x-12">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-all duration-200 hover:scale-105
                  ${
                    pathname === link.href
                      ? "text-white border-b-2 border-white pb-1"
                      : "text-gray-300 hover:text-white"
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Navigation */}
          <Button
            variant="ghost"
            className="md:hidden absolute right-4"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6 text-white" />
          </Button>

          {isMenuOpen && (
            <div className="absolute top-16 right-0 w-full bg-black/95 backdrop-blur-sm md:hidden">
              <nav className="flex flex-col items-center py-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`w-full text-center py-3 text-sm font-medium 
                      ${
                        pathname === link.href
                          ? "text-primary bg-gray-800/50"
                          : "text-gray-300 hover:bg-gray-800/30 hover:text-white"
                      }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
