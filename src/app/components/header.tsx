"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
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
        <div className="flex justify-between items-center h-24 md:h-28 px-4 mx-auto max-w-6xl">
          <div className="relative w-[160px] md:w-[220px] h-[80px] md:h-[100px]">
            <Image
              src="https://res.cloudinary.com/dmw1bwmpr/image/upload/v1738171177/EESL/EESL.png"
              alt="EESL Logo"
              fill
              className="brightness-400 contrast-125 cursor-pointer object-contain"
              priority
              onClick={() => window.location.assign("/")}
            />
          </div>
          <div className="flex items-center space-x-4 md:space-x-8">
            <div className="relative w-[160px] md:w-[220px] h-[80px] md:h-[100px]">
              <Image
                src="https://res.cloudinary.com/dmw1bwmpr/image/upload/v1738171177/EESL/TCG-Crest.png"
                alt="TCG Crest Logo"
                fill
                className="brightness-400 contrast-125 cursor-pointer object-contain"
                priority
                onClick={() =>
                  window.location.assign("https://www.tcgcrest.org/")
                }
              />
            </div>
          </div>
        </div>
      </div>

      {/* Lower Header */}
      <div className="container border-b border-gray-700 bg-gradient-to-r from-gray-900 to-black">
        <div className="relative flex h-16 items-center justify-between px-4 mx-auto max-w-6xl">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-center w-full space-x-12">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm font-medium group transition-all duration-300 ease-in-out hover:-translate-y-0.5`} // Added transform on hover
              >
                <span
                  className={`
                  relative z-10 transition-all duration-200
                  ${
                    pathname === link.href
                      ? "text-white"
                      : "text-gray-300 hover:text-white hover:scale-105" // Added scale effect
                  }
                `}
                >
                  {link.label}
                </span>
                {/* Animated underline */}
                <span
                  className={`
                  absolute -bottom-1 left-0 w-full h-0.5 bg-primary transform origin-left
                  transition-all duration-300 ease-out opacity-0 group-hover:opacity-100
                  ${
                    pathname === link.href
                      ? "scale-x-100 opacity-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }
                `}
                />
              </Link>
            ))}
          </nav>

          {/* Mobile Navigation Button with animation */}
          <Button
            variant="ghost"
            className="md:hidden relative z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6 text-white transition-transform duration-200 hover:scale-110" />
          </Button>
        </div>
      </div>
      {/* Mobile Navigation Menu */}
      <div
        className={`
        fixed inset-y-0 right-0 w-[250px] bg-black/95
        transform transition-transform duration-300 ease-in-out z-50
        ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
        md:hidden
        `}
      >
        {/* Close button area */}
        <div className="flex justify-end p-4">
          <Button
            variant="ghost"
            onClick={() => setIsMenuOpen(false)}
            className="text-white hover:text-primary"
          >
            <X className="h-6 w-6" />
          </Button>
        </div>

        {/* Mobile Navigation Links */}
        <nav className="flex flex-col px-6 py-8 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className={`
          text-lg py-2 border-b border-gray-800
          transition-colors duration-200
          ${
            pathname === link.href
              ? "text-primary font-medium"
              : "text-gray-300 hover:text-white"
          }
        `}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Backdrop Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm md:hidden z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </header>
  );
}
