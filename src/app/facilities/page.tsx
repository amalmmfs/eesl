"use client";

import { useState, useMemo, useEffect } from "react";
import { equipments } from "../data/equipments";
import Image from "next/image";
import { SearchIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const Facilities = () => {
  const [activeCategory, setActiveCategory] = useState(equipments[0].category);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    document.title = "Facilities | EESL";
  }, []);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // Filter equipment based on search query
  const filteredEquipments = useMemo(() => {
    if (!searchQuery) return equipments;

    const lowerQuery = searchQuery.toLowerCase();

    return equipments
      .map((category) => {
        const filteredItems = category.items.filter(
          (item) =>
            item.title?.toLowerCase().includes(lowerQuery) ||
            (item.description?.toLowerCase()?.includes(lowerQuery) ?? false)
        );

        if (filteredItems.length === 0) return null;

        return {
          ...category,
          items: filteredItems,
        };
      })
      .filter(Boolean);
  }, [searchQuery]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
    >
      {/* Hero Section */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold tracking-tight mb-3 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-900">
          Facilities in RISE
        </h1>
        <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-4">
          Explore our state-of-the-art research equipment and facilities
        </p>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto relative mt-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search equipment..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
            />
            <SearchIcon className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-blue-500 h-4 sm:h-5 w-4 sm:w-5" />
          </div>
        </div>
      </motion.div>

      {/* Category Tabs */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto mb-12"
      >
        <div className="flex flex-wrap justify-center gap-2 md:gap-4">
          {filteredEquipments.map(
            (equipment) =>
              equipment && (
                <button
                  key={equipment.category}
                  onClick={() => setActiveCategory(equipment.category)}
                  className={`
                      px-4 py-2 
                      rounded-full
                      text-sm md:text-base 
                      font-medium
                      transform transition-all duration-300 ease-out
                      backdrop-filter backdrop-blur-sm 
              ${
                activeCategory === equipment.category
                  ? "bg-gradient-to-br from-blue-500/95 to-blue-600/95 text-white translate-y-1 shadow-inner"
                  : "bg-white/95 text-gray-700 hover:-translate-y-1 hover:shadow-lg"
              }
              border border-gray-100/20
                      shadow-[0_4px_0px_0px_rgba(0,0,0,0.08)]
                      active:shadow-none active:translate-y-1
                      hover:ring-2 hover:ring-blue-200/50
            `}
                >
                  {equipment.category}
                </button>
              )
          )}{" "}
        </div>
      </motion.div>

      {/* Equipment Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto"
      >
        {filteredEquipments
          .filter((equipment) => equipment?.category === activeCategory)
          .map(
            (equipment) =>
              equipment && (
                <div key={equipment.category}>
                  <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-3xl font-semibold text-gray-800 mb-8 border-b pb-2"
                  >
                    {equipment.category}
                  </motion.h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {equipment.items.map((item) => (
                      <motion.div
                        key={item.title}
                        variants={cardVariants}
                        className={`bg-white cursor-pointer rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 ${
                          equipment.category === "Pouch Cell Facilities" ||
                          equipment.category === "Inert Sample Transfer Systems"
                            ? "col-span-full md:col-span-2 lg:col-span-3"
                            : ""
                        }`}
                        onClick={() => setSelectedImage(item.imageUrl)}
                      >
                        <div
                          className={`relative ${
                            equipment.category === "Pouch Cell Facilities" ||
                            equipment.category ===
                              "Inert Sample Transfer Systems"
                              ? "aspect-[16/9]"
                              : "aspect-[4/3]"
                          } w-full bg-gray-50`}
                        >
                          <Image
                            src={item.imageUrl}
                            alt={item.title || "Equipment"}
                            className="object-contain hover:object-cover transition-all duration-700 ease-out p-2"
                            fill
                            quality={100}
                            sizes={
                              equipment.category === "Pouch Cell Facilities" ||
                              equipment.category ===
                                "Inert Sample Transfer Systems"
                                ? "100vw"
                                : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            }
                            priority
                            onError={() => {
                              console.error(
                                `Failed to load image: ${item.imageUrl}`
                              );
                              // Optionally show a fallback image or UI element
                              const fallbackImageUrl = "/images/fallback.jpg";
                              const imgElement = document.querySelector(
                                `img[src="${item.imageUrl}"]`
                              ) as HTMLImageElement;
                              if (imgElement) {
                                imgElement.src = fallbackImageUrl;
                              }
                            }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                        <div className="p-4">
                          <h3 className="text-lg font-semibold text-gray-900 text-center">
                            {item.title}
                          </h3>
                        </div>
                      </motion.div>
                    ))}{" "}
                  </div>
                </div>
              )
          )}
      </motion.div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-8"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative max-w-4xl w-full h-[80vh] bg-white rounded-lg overflow-hidden flex items-center justify-center p-4"
              onClick={(e) => e.stopPropagation()}
            >
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full"
                  />
                </div>
              )}
              <div className="relative w-full h-full">
                <h2 id="modal-title" className="sr-only">
                  Equipment Detail Image
                </h2>
                <Image
                  src={selectedImage}
                  alt="Equipment detail"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1536px) 100vw, 1536px"
                  quality={100}
                  onLoadingComplete={() => setIsLoading(false)}
                />
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
              >
                <X size={20} color="white" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
export default Facilities;
