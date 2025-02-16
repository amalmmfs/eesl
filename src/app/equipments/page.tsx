"use client";

import { useState, useMemo } from "react";
import { equipments } from "../data/equipments";
import Image from "next/image";
import { SearchIcon } from "lucide-react";
import { motion } from "framer-motion";

const EquipmentFacility = () => {
  const [activeCategory, setActiveCategory] = useState(equipments[0].category);
  const [searchQuery, setSearchQuery] = useState("");

  // Filter equipment based on search query
  const filteredEquipments = useMemo(() => {
    if (!searchQuery) return equipments;

    return equipments
      .map((category) => ({
        ...category,
        items: category.items.filter(
          (item) =>
            item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.description.toLowerCase().includes(searchQuery.toLowerCase())
        ),
      }))
      .filter((category) => category.items.length > 0);
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
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Equipment & Facilities
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Explore our state-of-the-art research equipment and facilities
        </p>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto relative">
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
          {filteredEquipments.map((equipment) => (
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
          ))}
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
          .filter((equipment) => equipment.category === activeCategory)
          .map((equipment) => (
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
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="relative h-48">
                      <Image
                        src={item.imageUrl}
                        alt={item.title}
                        className="object-cover"
                        fill
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
      </motion.div>
    </motion.div>
  );
};

export default EquipmentFacility;
