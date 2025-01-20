"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { researchData } from "@/app/data/researchData";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ResearchPage() {
  const [activeTab, setActiveTab] = useState(researchData[0].id);
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    document.title = "Research Areas | EESL";
  }, []);
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-white">
      {/* Enhanced Sidebar with Animation */}
      <motion.div
        initial={{ width: "14rem" }}
        animate={{ width: isSidebarOpen ? "14rem" : "0rem" }}
        transition={{ duration: 0.3 }}
        className="relative bg-white border-r shadow-sm"
      >
        <div className="sticky top-0 p-6">
          {isSidebarOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <div className="mb-8">
                <h2 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Research Areas
                </h2>
                <p className="text-sm text-gray-500 mt-2">
                  Explore our research initiatives
                </p>
              </div>
              <nav className="space-y-2">
                {researchData.map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 
                      ${
                        activeTab === item.id
                          ? "bg-blue-50 text-blue-700 font-medium border-l-4 border-blue-600"
                          : "text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                      }`}
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {item.title}
                  </motion.button>
                ))}
              </nav>
            </motion.div>
          )}
        </div>

        {/* Floating Toggle Button */}
        <button
          onClick={() => setSidebarOpen(!isSidebarOpen)}
          className="absolute -right-4 top-6 bg-white rounded-full p-2 shadow-md border
            hover:bg-gray-50 transition-colors duration-200"
        >
          {isSidebarOpen ? (
            <ChevronLeft className="h-4 w-4 text-gray-600" />
          ) : (
            <ChevronRight className="h-4 w-4 text-gray-600" />
          )}
        </button>
      </motion.div>

      {/* Main Content */}
      <div className="flex-1">
        <div className="container mx-auto max-w-6xl p-4 lg:p-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {researchData
              .filter((item) => item.id === activeTab)
              .map((item) => (
                <Card
                  key={item.id}
                  className="overflow-hidden border-none shadow-lg"
                >
                  <CardHeader className="bg-gray-100 p-6">
                    <CardTitle className="text-2xl text-gray-900">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="grid md:grid-cols-2 gap-8 p-6">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                      className="space-y-6"
                    >
                      <div className="prose prose-gray max-w-none text-justify">
                        {item.content}
                      </div>
                    </motion.div>
                    <div className="relative h-[400px] rounded-xl overflow-hidden shadow-md">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-contain p-4 transition-transform duration-300 hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
