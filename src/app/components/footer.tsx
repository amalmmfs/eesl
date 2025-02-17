"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Twitter, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

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
                <a href="mailto:contact@eesl.org">abhikchm@gmail.com</a>
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
              <li>
                <Link
                  href="/careers"
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"
                >
                  Careers
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex items-center"
                  >
                    <motion.div
                      className="absolute -right-2 -top-2"
                      animate={{
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <motion.div
                        className="w-2 h-2 bg-green-400 rounded-full"
                        animate={{
                          boxShadow: [
                            "0 0 0 0 rgba(34, 197, 94, 0.4)",
                            "0 0 0 8px rgba(34, 197, 94, 0)",
                          ],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    </motion.div>
                    <motion.div
                      className="ml-2 px-2 py-0.5 bg-gradient-to-r from-green-500/10 via-emerald-500/15 to-green-500/10 rounded-sm backdrop-blur-sm border border-green-500/20"
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: "rgba(16, 185, 129, 0.2)",
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <motion.span
                        className="text-xs font-medium bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent"
                        animate={{
                          opacity: [0.8, 1, 0.8],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        Hiring Now
                      </motion.span>
                    </motion.div>
                  </motion.div>
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
            </ul>
          </div>

          <div className="flex flex-col items-start md:items-center gap-6">
            <Image
              src="https://res.cloudinary.com/dmw1bwmpr/image/upload/v1738227525/EESL/EESL-Logo.png"
              alt="EESL Logo"
              width={180}
              height={50}
              className="dark:invert cursor-pointer brightness-500 contrast-125"
              priority
              onClick={() => window.location.assign("/")}
            />
            <Image
              src="https://res.cloudinary.com/dmw1bwmpr/image/upload/v1738227525/EESL/TCG-RISE.png"
              alt="TCG RISE Logo"
              width={180}
              height={50}
              className="brightness-500 contrast-125 cursor-pointer"
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
