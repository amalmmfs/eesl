"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const router = useRouter();

  const handleNewsClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    if (pathname !== "/") {
      await router.push("/");
    }

    setTimeout(() => {
      const newsSection = document.getElementById("news");
      if (newsSection) {
        window.scrollTo({
          top: newsSection.offsetTop,
          behavior: "smooth",
        });
      }
    }, 300);
  };

  const navLinks = [
    { href: "/", label: "About" },
    { href: "/research", label: "Research" },
    { href: "/publications", label: "Publications" },
    { href: "/facilities", label: "Facility" },
    { href: "/team", label: "Team" },
    { href: "/gallery", label: "Gallery" },
    { href: "/#news", label: "News", onClick: handleNewsClick },
    { href: "/careers", label: "Oppurtunities" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <header className="bg-black w-full top-0 z-50">
      {/* Upper Header */}
      <div className="w-full border-b border-gray-700 bg-gradient-to-b from-black to-gray-900">
        <div className="flex justify-between items-center h-24 md:h-28 px-4 mx-auto max-w-7xl">
          <div className="relative w-[160px] md:w-[220px] h-[80px] md:h-[100px]">
            <Image
              src="https://res.cloudinary.com/dmw1bwmpr/image/upload/v1738227525/EESL/EESL-Logo.png"
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
                src="https://res.cloudinary.com/dmw1bwmpr/image/upload/v1738227525/EESL/TCG-RISE.png"
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
      <div className="w-full border-b border-gray-700 bg-gradient-to-r from-gray-900 to-black">
        <div className="relative flex h-16 items-center justify-between px-4 mx-auto max-w-6xl">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-center w-full space-x-12">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={link.onClick || undefined}
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
          fixed inset-y-0 right-0 w-[280px] 
          bg-gradient-to-b from-black/40 to-gray-900/40
          transform transition-all duration-300 ease-out 
          backdrop-blur-xl
          border-l border-white/10
          shadow-[0_0_15px_rgba(0,0,0,0.2)]
          z-50
          ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
          md:hidden
        `}
      >
        <div className="flex flex-col h-full">
          {/* Logo Area */}
          <div className="flex justify-between items-center p-6 border-b border-gray-800">
            <div className="relative w-[120px] h-[50px]">
              <Image
                src="https://res.cloudinary.com/dmw1bwmpr/image/upload/v1738227525/EESL/EESL-Logo.png"
                alt="EESL Logo"
                fill
                className="object-contain brightness-400 contrast-125"
              />
            </div>
            <Button
              variant="ghost"
              onClick={() => setIsMenuOpen(false)}
              className="text-white hover:bg-white/10 rounded-full p-2"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 overflow-y-auto py-6 px-4">
            <div className="space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`
                    flex items-center px-4 py-3 rounded-lg
                    transition-all duration-200 ease-out
                    ${
                      pathname === link.href
                        ? "bg-primary text-white font-medium shadow-lg"
                        : "text-gray-300 hover:bg-white/10 hover:text-white"
                    }
                  `}
                >
                  <span className="text-base">{link.label}</span>
                  {pathname === link.href && (
                    <motion.div
                      layoutId="activeTab"
                      className="ml-auto w-1.5 h-1.5 rounded-full bg-white"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </div>

      {/* Backdrop */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm md:hidden z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </header>
  );
}
