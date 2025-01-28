"use client";

import { Gallery } from "@/app/components/gallery";
import { galleryItems } from "@/app/data/gallery";
import { useEffect, useState } from "react";
import { LoadingGallerySkeleton } from "../components/gallery-skelton";

export default function GalleryPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.title = "Gallery | EESL";
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16 max-w-6xl">
      <div className="text-center mb-8 sm:mb-12 md:mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold tracking-tight mb-3 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-900">
          Our Gallery
        </h1>
      </div>
      {isLoading ? (
        <LoadingGallerySkeleton />
      ) : (
        <Gallery items={galleryItems} />
      )}
    </div>
  );
}
