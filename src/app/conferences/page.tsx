"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { IoMdClose } from "react-icons/io";

const ConferencesPage = () => {
  interface PhotoType {
    id: number;
    src: string;
    alt: string;
    title?: string;
  }

  const [selectedImage, setSelectedImage] = useState<PhotoType | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    document.title = "Conferences | EESL";
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Add event listener for escape key
    const handleEscapeKey = (e: { key: string }) => {
      if (e.key === "Escape" && isModalOpen) {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isModalOpen]);

  const openModal = (image: PhotoType) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedImage(null), 300); // Clear image after animation completes
  };

  const icsbPhotos: PhotoType[] = [
    {
      id: 1,
      src: "https://res.cloudinary.com/dmw1bwmpr/image/upload/v1742885992/Slide1_e93deh.png",
      alt: "ICSB Conference Photo 1",
    },
    {
      id: 2,
      src: "https://res.cloudinary.com/dmw1bwmpr/image/upload/v1742885994/Slide1_ldaoyo.tiff",
      alt: "ICSB Conference Photo 2",
    },
    {
      id: 3,
      src: "https://res.cloudinary.com/dmw1bwmpr/image/upload/v1742885992/Flyer_ICSB_-Final_nbxfhg.jpg",
      alt: "ICSB Conference Photo 3",
    },
    {
      id: 4,
      src: "https://res.cloudinary.com/dmw1bwmpr/image/upload/v1742934156/Industries_ICSB25_page-0001_khh1hs.jpg",
      alt: "ICSB Conference Photo 4",
    },
  ];
  const energyPhotos: PhotoType[] = [
    {
      id: 1,
      src: "https://res.cloudinary.com/dmw1bwmpr/image/upload/v1742933924/Discussion_flyer_page-0001_z4f8lk.jpg",
      alt: "Energy Conference Photo 1",
    },
    {
      id: 2,
      src: "https://res.cloudinary.com/dmw1bwmpr/image/upload/v1742885992/1711539653983_ewhfiv.jpg",
      alt: "Energy Conference Photo 2",
    },
  ];

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

      {/* ICSB Conference Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
            International Conference on Sustainable Batteries - ICSB 2025
          </h2>
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-gray-600 text-lg text-center mb-4">
              Dr. Abhik banerjee has organized the exciting Global Conversation
              on Sustainable Energy Storage at &quot;International Conference on
              Sustainable Batteries ICSB- 2025 | February 24-27, Kolkata, India,
              with Dr.Jagjit Nanda (International Convenor), Dr. Amartya
              Mukhopadhyay (IITB), Dr. Urmimala Maitra (IACS){" "}
              <a
                href="https://www.icsb25.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                https://www.icsb25.com/
              </a>{" "}
            </p>
            <p className="text-gray-600 text-lg text-center mb-4">
              Hosted by Research Institute for Sustainable Energy (RISE) TCG
              CREST, Kolkata & Battery Research Society, ICSB-25 has gathers
              world-leading experts, researchers, academicians, industry
              professionals, leaders from government agencies, and policymakers
              to share a common platform to discuss recent technical advances,
              innovations, and developments in batteries and energy storage.
              academicians, industry professionals, leaders from government
              agencies, and policymakers to share a common platform to discuss
              recent technical advances, innovations, and developments in
              batteries and energy storage.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {icsbPhotos.map((photo) => (
              <motion.div
                key={photo.id}
                whileHover={{ scale: 1.03 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
                onClick={() => openModal(photo)}
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
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Energy Conference Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
              RISE Energy Summit 2024: Challenges & Innovations in Na and
              Solid-State Batteries
            </h2>
            <div className="max-w-4xl mx-auto mb-12">
              <p className="text-gray-600 text-lg text-center mb-4">
                RISE is organizing a one-day Energy Discussion on Current
                Challenges in Na and Solid solid-state batteries with a
                planetary talk by Prof Shirley Meng from the University of
                Chicago on 17th Feb 2024. There are additional talks by eminent
                battery experts.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {energyPhotos.map((photo) => (
                <motion.div
                  key={photo.id}
                  whileHover={{ scale: 1.03 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                  onClick={() => openModal(photo)}
                >
                  <div
                    className="relative w-full"
                    style={{ paddingTop: "75%" }}
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                    />
                  </div>
                </motion.div>
              ))}
            </div>
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

      {/* Image Modal */}
      <AnimatePresence>
        {isModalOpen && selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-80"
            onClick={closeModal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl w-full max-h-[90vh] bg-white rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 z-10 bg-white bg-opacity-80 rounded-full p-2 shadow-md hover:bg-opacity-100 transition-all duration-200"
                onClick={closeModal}
                aria-label="Close modal"
              >
                <IoMdClose className="text-gray-800 text-xl" />
              </button>

              <div className="relative w-full" style={{ height: "80vh" }}>
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              </div>

              <div className="p-4 bg-white">
                <h3 className="text-xl font-semibold text-gray-800">
                  {selectedImage.title}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  Press ESC key or click outside to close
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default ConferencesPage;
