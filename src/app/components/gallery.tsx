"use client";

import Image from "next/image";
import { GalleryProps } from "../types/gallery";
import { useCallback, useEffect, useState } from "react";

export function Gallery({ items }: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.key === "Escape") {
      setSelectedImage(null);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const openModal = (imageUrl: string) => {
    setIsLoading(true);
    setSelectedImage(imageUrl);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsLoading(false);
  };

  return (
    <>
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 p-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="relative break-inside-avoid mb-4 group cursor-pointer overflow-hidden rounded-lg"
            onClick={() => openModal(item.imageUrl)}
          >
            <div className="relative aspect-auto">
              <Image
                src={item.imageUrl}
                alt={item.description}
                width={500}
                height={500}
                className="w-full object-cover 
                  hover:scale-110 
                  transition-all duration-500 ease-in-out"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t 
              from-black/90 via-black/20 to-transparent 
              p-6 opacity-0 group-hover:opacity-100 
              transition-all duration-300 ease-in-out 
              flex items-end rounded-lg
              backdrop-blur-[1px]"
              >
                <p
                  className="text-white text-sm leading-relaxed font-medium
                  transform translate-y-4 group-hover:translate-y-0 
                  transition-transform duration-300 ease-out"
                >
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/75 z-50 flex items-center justify-center p-4
            animate-[fadeIn_0.3s_ease-in-out]"
          onClick={closeModal}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] w-full
              animate-[scaleIn_0.3s_ease-in-out]"
            onClick={(e) => e.stopPropagation()}
          >
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin" />
              </div>
            )}
            <Image
              src={selectedImage}
              alt="Enlarged view"
              width={1200}
              height={800}
              className="w-full h-full object-contain rounded-lg
                transition-opacity duration-300
                opacity-0 data-[loaded=true]:opacity-100"
              onLoadingComplete={() => setIsLoading(false)}
              data-loaded={!isLoading}
            />
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2
                hover:bg-black/75 transition-colors duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
