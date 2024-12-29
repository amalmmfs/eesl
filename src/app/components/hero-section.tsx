"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const images = [
  {
    url: "https://res.cloudinary.com/dmw1bwmpr/image/upload/v1735410392/EESL/Hero-Section/jz1lqsnkmsqmoksuoojd.png",
    alt: "Laboratory Equipment",
    caption: "State-of-the-art Research Facilities",
  },
  {
    url: "https://res.cloudinary.com/dmw1bwmpr/image/upload/v1735411383/EESL/Hero-Section/zq90qgrfsdvspsnmproy.png",
    alt: "Laboratory Equipment",
    caption: "State-of-the-art Research Facilities",
  },
  {
    url: "https://res.cloudinary.com/dmw1bwmpr/image/upload/v1735411383/EESL/Hero-Section/qke477yfjmd19e0s3wd7.png",
    alt: "Laboratory Equipment",
    caption: "State-of-the-art Research Facilities",
  },
  {
    url: "https://res.cloudinary.com/dmw1bwmpr/image/upload/v1735410437/EESL/Hero-Section/jrqkbmh4bsctbzsqa8xg.png",
    alt: "Laboratory Equipment",
    caption: "State-of-the-art Research Facilities",
  },
  {
    url: "https://res.cloudinary.com/dmw1bwmpr/image/upload/v1735410397/EESL/Hero-Section/bpseglqtqys3e6vlnxbz.png",
    alt: "Laboratory Equipment",
    caption: "State-of-the-art Research Facilities",
  },
  {
    url: "https://res.cloudinary.com/dmw1bwmpr/image/upload/v1735410392/EESL/Hero-Section/ovimfpdinvktuovspwb6.png",
    alt: "Laboratory Equipment",
    caption: "State-of-the-art Research Facilities",
  },
  {
    url: "https://res.cloudinary.com/dmw1bwmpr/image/upload/v1735410392/EESL/Hero-Section/ccbhly9s9r4ql20qqljs.png",
    alt: "Laboratory Equipment",
    caption: "State-of-the-art Research Facilities",
  },
  {
    url: "https://res.cloudinary.com/dmw1bwmpr/image/upload/v1735410390/EESL/Hero-Section/etokryyzl80vbwcaac5l.png",
    alt: "Laboratory Equipment",
    caption: "State-of-the-art Research Facilities",
  },
  {
    url: "https://res.cloudinary.com/dmw1bwmpr/image/upload/v1735410397/EESL/Hero-Section/xm9daevds7mmkh2cfsxp.png",
    alt: "Laboratory Equipment",
    caption: "State-of-the-art Research Facilities",
  },
  {
    url: "https://res.cloudinary.com/dmw1bwmpr/image/upload/v1735410398/EESL/Hero-Section/sgiwfsupaqsln7lfisae.png",
    alt: "Laboratory Equipment",
    caption: "State-of-the-art Research Facilities",
  },
  {
    url: "https://res.cloudinary.com/dmw1bwmpr/image/upload/v1735411648/EESL/Hero-Section/n9k5pxlfw8fn16zvqfqs.png",
    alt: "Laboratory Equipment",
    caption: "State-of-the-art Research Facilities",
  },
];

export default function HeroSlider() {
  return (
    <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px]">
      <Swiper
        modules={[Autoplay, Navigation, Pagination, EffectFade]}
        effect="fade"
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="w-full h-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <Image
                src={image.url}
                alt={image.alt}
                fill
                className="object-cover"
                priority={index === 0}
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 lg:p-12 text-white">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 mx-auto max-w-6xl">
                  {image.caption}
                </h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
