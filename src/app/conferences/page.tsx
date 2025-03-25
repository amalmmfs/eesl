"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaFilePdf } from "react-icons/fa";

const ConferencesPage = () => {
  const [downloading, setDownloading] = useState(false);

  useEffect(() => {
    document.title = "Conferences | EESL";
  }, []);

  const photos = [
    {
      id: 1,
      src: "https://res.cloudinary.com/dmw1bwmpr/image/upload/v1742885992/1711539653983_ewhfiv.jpg",
      alt: "Conference Photo 1",
      title: "Annual Energy Efficiency Summit 2023",
    },
    {
      id: 2,
      src: "https://res.cloudinary.com/dmw1bwmpr/image/upload/v1742885992/Slide1_e93deh.png",
      alt: "Conference Photo 2",
      title: "Renewable Energy Conference",
    },
    {
      id: 3,
      src: "https://res.cloudinary.com/dmw1bwmpr/image/upload/v1742885992/Flyer_ICSB_-Final_nbxfhg.jpg",
      alt: "Conference Photo 3",
      title: "Sustainable Development Workshop",
    },
    {
      id: 4,
      src: "https://res.cloudinary.com/dmw1bwmpr/image/upload/v1742885994/Slide1_ldaoyo.tiff",
      alt: "Conference Photo 4",
      title: "Energy Conservation Symposium",
    },
  ];

  const pdfAttachments = [
    {
      id: 1,
      title: "Discussion Flyer",
      filename: "Discussion_flyer.pdf",
      path: "https://drive.google.com/uc?export=download&id=1bks6XOcm5hzHbugq3zO3zcOr_lWdY0Ul",
    },
    {
      id: 2,
      title: "Industries ICSB 2025",
      filename: "Industries_ICSB25.pdf",
      path: "https://drive.google.com/uc?export=download&id=1p2ANzYrLCCuIuZ5lhh5gLIbA64zwz3Ny",
    },
  ];

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleDownload = (path: string | URL | undefined, title: string) => {
    setDownloading(true);
    setTimeout(() => setDownloading(false), 3000);
    window.open(path, "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-slate-100 to-blue-100 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold tracking-tight mb-3 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-900">
              EESL Conferences
            </h1>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-4">
              Explore our conferences and events promoting energy efficiency and
              sustainable development
            </p>
          </motion.div>
        </div>
      </div>

      {/* Conference Photos Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Conference Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {photos.map((photo) => (
              <motion.div
                key={photo.id}
                whileHover={{ scale: 1.03 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="relative w-full" style={{ paddingTop: "75%" }}>
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {photo.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* PDF Attachments Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Conference Documents
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto max-w-4xl">
              {pdfAttachments.map((pdf) => (
                <motion.div
                  key={pdf.id}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="p-8 flex flex-col items-center text-center">
                    <div className="bg-blue-600 p-5 rounded-full mb-6">
                      <FaFilePdf className="text-white text-3xl" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-6">
                      {pdf.title}
                    </h3>
                    <button
                      onClick={() => handleDownload(pdf.path, pdf.title)}
                      className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition duration-300"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                        />
                      </svg>
                      {downloading ? "Starting Download..." : "Download PDF"}
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
            {downloading && (
              <p className="text-center mt-8 text-gray-600">
                Your download is starting. If it doesn&apos;t begin
                automatically, please click the button again.
              </p>
            )}
          </motion.div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-6xl mx-auto px-4 py-16 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mx-auto"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Interested in Our Upcoming Conferences?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Stay updated with our latest events and conferences focused on
            energy efficiency and sustainable development.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-md text-lg transition duration-300"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default ConferencesPage;
