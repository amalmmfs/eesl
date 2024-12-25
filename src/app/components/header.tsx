import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-black">
      {/* Upper Header */}
      <div className="container border-b border-gray-700">
        <div className="flex justify-between items-center h-20 px-4 mx-auto max-w-6xl">
          <Image
            src="https://res.cloudinary.com/dmw1bwmpr/image/upload/v1735141308/EESL/EESL-Logo.png"
            alt="EESL Logo"
            width={180}
            height={100}
            className="dark:invert"
          />
          <Image
            src="https://res.cloudinary.com/dmw1bwmpr/image/upload/v1735142800/EESL/TCG-Crest.png"
            alt="TCG Crest Logo"
            width={180}
            height={50}
            className=""
          />
        </div>
      </div>

      {/* Lower Header */}
      <div className="container border-b border-gray-700">
        <div className="flex h-14 items-center justify-center px-4 mx-auto max-w-6xl">
          <nav className="hidden md:flex items-center justify-center space-x-8">
            <Link
              href="/"
              className="text-sm font-medium text-white hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              href="/research"
              className="text-sm font-medium text-white hover:text-primary transition-colors"
            >
              Research
            </Link>
            <Link
              href="/publications"
              className="text-sm font-medium text-white hover:text-primary transition-colors"
            >
              Publications
            </Link>
            <Link
              href="/equipment"
              className="text-sm font-medium text-white hover:text-primary transition-colors"
            >
              Equipment
            </Link>
            <Link
              href="/team"
              className="text-sm font-medium text-white hover:text-primary transition-colors"
            >
              Team
            </Link>
            <Link
              href="/gallery"
              className="text-sm font-medium text-white hover:text-primary transition-colors"
            >
              Gallery
            </Link>
            <Link
              href="/contact-us"
              className="text-sm font-medium text-white hover:text-primary transition-colors"
            >
              Contact Us
            </Link>
          </nav>
          <Button variant="ghost" className="md:hidden absolute right-4">
            <Menu className="h-6 w-6 text-white" />
          </Button>
        </div>
      </div>
    </header>
  );
}
