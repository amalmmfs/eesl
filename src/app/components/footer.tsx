"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Twitter, Linkedin, BookOpen } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="container px-4 py-12 md:py-16 mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4 max-w-6xl mx-auto">
          <div>
            <h3 className="text-lg font-semibold text-primary">Contact</h3>
            <ul className="mt-6 space-y-4 text-gray-300">
              <li className="hover:text-white transition-colors">
                Electrochemical Energy Storage Laboratory
              </li>
              <li className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail size={16} />
                <a href="mailto:contact@eesl.org">contact@eesl.org</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-primary">Quick Links</h3>
            <ul className="mt-6 space-y-4">
              <li>
                <Link
                  href="/research"
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"
                >
                  Research Areas
                </Link>
              </li>
              <li>
                <Link
                  href="/publications"
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"
                >
                  Publications
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"
                >
                  Team Members
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-primary">Follow Us</h3>
            <ul className="mt-6 space-y-4">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"
                >
                  <Twitter size={16} />
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"
                >
                  <Linkedin size={16} />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"
                >
                  <BookOpen size={16} />
                  ResearchGate
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center gap-6">
            <Image
              src="https://res.cloudinary.com/dmw1bwmpr/image/upload/v1735413805/EESL/zr3gfwf8d4dmntvi4afk.png"
              alt="EESL Logo"
              width={180}
              height={50}
              className="dark:invert cursor-pointer"
              priority
              onClick={() => window.location.assign("/")}
            />
            <Image
              src="https://res.cloudinary.com/dmw1bwmpr/image/upload/v1738171177/EESL/TCG-Crest.png"
              alt="TCG Crest Logo"
              width={180}
              height={50}
              className="brightness-400 contrast-125 cursor-pointer"
              priority
              onClick={() =>
                window.location.assign("https://www.tcgcrest.org/")
              }
            />
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()} Electrochemical Energy Storage
            Laboratory. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
