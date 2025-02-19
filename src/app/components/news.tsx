"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, X, Calendar, Link } from "lucide-react";
import Marquee from "react-fast-marquee";
import { newsItems } from "@/app/data/news";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function NewsSection() {
  const [selectedNews, setSelectedNews] = useState<
    (typeof newsItems)[0] | null
  >(null);

  // Handle escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeNewsModal();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const openNewsModal = (news: (typeof newsItems)[0]) => {
    setSelectedNews(news);
    document.body.style.overflow = "hidden";
  };

  const closeNewsModal = () => {
    setSelectedNews(null);
    document.body.style.overflow = "unset";
  };

  return (
    <section
      className="bg-gradient-to-b from-slate-200 via-white to-gray-50 py-16"
      id="news"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-black to-gray-900 bg-clip-text text-transparent">
            Latest News
          </h2>
          <p className="text-gray-600 mt-3 text-lg">
            Stay updated with our latest developments and achievements
          </p>
        </div>

        <Marquee
          gradient={true}
          speed={25}
          pauseOnHover={true}
          className="overflow-hidden"
        >
          {newsItems.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-xl shadow-sm 
              hover:shadow-lg transition-all duration-300 mx-4 w-[320px] h-[340px]
              hover:transform hover:-translate-y-1"
            >
              <div className="p-6 h-full flex flex-col">
                {/* Header with Category and Date */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 text-sm font-medium rounded-full bg-blue-50 text-blue-600">
                    {item.category}
                  </span>
                  <time className="text-sm text-gray-500 flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(item.date).toLocaleDateString()}
                  </time>
                </div>

                {/* Title with more space */}
                <h3 className="font-semibold text-lg mb-4 line-clamp-3">
                  {item.title}
                </h3>

                {/* Description with more lines visible */}
                <p className="text-gray-600 mb-6 line-clamp-4 text-sm flex-grow">
                  {item.description}
                </p>

                {/* Button remains at bottom */}
                <Button
                  variant="ghost"
                  className="text-sm gap-2 group relative overflow-hidden
                  bg-gradient-to-r from-blue-50 to-blue-100
                  hover:from-blue-100 hover:to-blue-200
                  text-blue-600 font-medium px-4 py-2
                  transition-all duration-300 ease-in-out
                  border border-blue-200 hover:border-blue-300
                  shadow-sm hover:shadow-md
                  mt-auto"
                  onClick={() => openNewsModal(item)}
                >
                  Read More
                  <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </Marquee>

        {/* Enhanced Modal */}
        {selectedNews && (
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 
              flex items-center justify-center p-4 animate-fadeIn"
            onClick={closeNewsModal}
          >
            <div
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] 
                overflow-y-auto animate-scaleIn shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className="sticky top-0 bg-white/80 backdrop-blur-sm 
                border-b border-gray-100 p-4 flex items-center justify-between z-10"
              >
                <div className="flex items-center space-x-3">
                  <span
                    className="px-3 py-1 text-sm font-medium rounded-full 
                    bg-blue-50 text-blue-600"
                  >
                    {selectedNews.category}
                  </span>
                  <time className="text-sm text-gray-500 flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(selectedNews.date).toLocaleDateString()}
                  </time>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={closeNewsModal}
                  className="rounded-full hover:bg-red-50 hover:text-red-500"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              <div className="p-8">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">
                  {selectedNews.title}
                </h2>
                {selectedNews.videoUrl ? (
                  <div className="mb-8 rounded-xl overflow-hidden shadow-lg">
                    <video
                      controls
                      className="w-full h-auto"
                      poster={selectedNews.image} // Optional: Use image as poster if available
                    >
                      <source src={selectedNews.videoUrl} type="video/mp4" />
                      Your browser does not support video playback.
                    </video>
                  </div>
                ) : (
                  selectedNews.image && (
                    <div className="mb-8 rounded-xl overflow-hidden shadow-lg">
                      <Image
                        src={selectedNews.image}
                        alt={selectedNews.title}
                        width={1200}
                        height={600}
                        className="w-full h-auto object-cover"
                        priority={true}
                      />
                    </div>
                  )
                )}
                <div className="prose prose-lg max-w-none space-y-6">
                  {/* News Content */}
                  <div className="text-black leading-relaxed whitespace-pre-wrap text-justify">
                    {selectedNews.news}
                  </div>

                  {/* News Link Section */}
                  {selectedNews.newsLink && (
                    <div className="mt-8 p-4 bg-blue-50 rounded-xl border border-blue-100">
                      <a
                        href={selectedNews.newsLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-blue-600 hover:text-blue-700
                          font-medium group transition-colors duration-300"
                      >
                        <Link className="w-5 h-5" />
                        <span className="underline-offset-4 group-hover:underline">
                          Related News
                        </span>
                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
