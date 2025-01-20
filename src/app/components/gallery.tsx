import Image from "next/image";
import { GalleryProps } from "../types/gallery";

export function Gallery({ items }: GalleryProps) {
  return (
    <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 p-4">
      {items.map((item) => (
        <div
          key={item.id}
          className="relative break-inside-avoid mb-4 group cursor-pointer"
        >
          <div className="relative aspect-auto">
            <Image
              src={item.imageUrl}
              alt={item.description}
              width={500}
              height={500}
              className="w-full rounded-lg object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out rounded-b-lg">
              <p className="text-white text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
