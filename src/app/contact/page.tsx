"use client";

import { Mail, MapPin, Phone, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 py-16 md:py-24 max-w-6xl">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl sm:text-4xl md:text-4xl font-bold text-center tracking-tight mb-3 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-900"
        >
          Get in Touch
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8 bg-white p-8 rounded-2xl shadow-lg"
          >
            <div className="border-b pb-6">
              <h2 className="text-3xl font-bold mb-2 text-gray-900">
                Abhik Banerjee
              </h2>
              <p className="text-xl text-primary font-medium">
                Principal Investigator
              </p>
              <p className="text-gray-600">
                Electrochemical Energy Storage Laboratory
              </p>
            </div>

            <div className="border-b pb-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Mailing Address
              </h3>
              <div className="flex items-start space-x-3 group">
                <MapPin className="mt-1 text-primary group-hover:scale-110 transition-transform" />
                <p className="text-gray-600 leading-relaxed">
                  TCG CREST
                  <br />
                  Block DN, Sector V, Salt Lake
                  <br />
                  Kolkata - 700091
                  <br />
                  West Bengal, India
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Contact Details
              </h3>
              <div className="space-y-4">
                <a
                  href="mailto:abhik.banerjee@tcgcrest.org"
                  className="flex items-center space-x-3 group hover:bg-gray-50 p-2 rounded-lg transition-colors"
                >
                  <Mail className="text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-gray-600 group-hover:text-primary transition-colors">
                    abhik.banerjee@tcgcrest.org
                  </span>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-primary transition-colors" />
                </a>
                <div className="flex items-center space-x-3 p-2">
                  <Phone className="text-primary" />
                  <p className="text-gray-600">+91 XXXXX XXXXX</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-lg"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d921.0578510008464!2d88.43113113976835!3d22.570446973109586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275addf8e87eb%3A0xe87712642951edd4!2sTCG%20LIFESCIENCES%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1738474887929!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
