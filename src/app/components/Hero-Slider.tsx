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
    url: "https://drive.google.com/uc?id=15WUpbNUGhEzmhM8QATE-L-ins-dXWDc5",
    alt: "Laboratory Equipment",
    caption: "State-of-the-art Research Facilities",
  },
  {
    url: "https://drive.google.com/file/d/15WUpbNUGhEzmhM8QATE-L-ins-dXWDc5/view?usp=sharing",
    alt: "Laboratory Equipment",
    caption: "State-of-the-art Research Facilities",
  },
  {
    url: "https://drive.google.com/file/d/15WUpbNUGhEzmhM8QATE-L-ins-dXWDc5/view?usp=sharing",
    alt: "Laboratory Equipment",
    caption: "State-of-the-art Research Facilities",
  },
  {
    url: "https://drive.google.com/file/d/15WUpbNUGhEzmhM8QATE-L-ins-dXWDc5/view?usp=sharing",
    alt: "Laboratory Equipment",
    caption: "State-of-the-art Research Facilities",
  },
  {
    url: "https://drive.google.com/file/d/15WUpbNUGhEzmhM8QATE-L-ins-dXWDc5/view?usp=sharing",
    alt: "Laboratory Equipment",
    caption: "State-of-the-art Research Facilities",
  },
  {
    url: "https://drive.google.com/file/d/15WUpbNUGhEzmhM8QATE-L-ins-dXWDc5/view?usp=sharing",
    alt: "Laboratory Equipment",
    caption: "State-of-the-art Research Facilities",
  },
  {
    url: "https://drive.google.com/file/d/15WUpbNUGhEzmhM8QATE-L-ins-dXWDc5/view?usp=sharing",
    alt: "Laboratory Equipment",
    caption: "State-of-the-art Research Facilities",
  },
  {
    url: "https://drive.google.com/file/d/15WUpbNUGhEzmhM8QATE-L-ins-dXWDc5/view?usp=sharing",
    alt: "Laboratory Equipment",
    caption: "State-of-the-art Research Facilities",
  },
  {
    url: "https://drive.google.com/file/d/15WUpbNUGhEzmhM8QATE-L-ins-dXWDc5/view?usp=sharing",
    alt: "Laboratory Equipment",
    caption: "State-of-the-art Research Facilities",
  },
  {
    url: "https://drive.google.com/file/d/15WUpbNUGhEzmhM8QATE-L-ins-dXWDc5/view?usp=sharing",
    alt: "Laboratory Equipment",
    caption: "State-of-the-art Research Facilities",
  },
  {
    url: "https://drive.google.com/file/d/15WUpbNUGhEzmhM8QATE-L-ins-dXWDc5/view?usp=sharing",
    alt: "Laboratory Equipment",
    caption: "State-of-the-art Research Facilities",
  },
  {
    url: "https://drive.google.com/file/d/15WUpbNUGhEzmhM8QATE-L-ins-dXWDc5/view?usp=sharing",
    alt: "Laboratory Equipment",
    caption: "State-of-the-art Research Facilities",
  },
  {
    url: "https://drive.google.com/file/d/15WUpbNUGhEzmhM8QATE-L-ins-dXWDc5/view?usp=sharing",
    alt: "Laboratory Equipment",
    caption: "State-of-the-art Research Facilities",
  },
  {
    url: "https://drive.google.com/file/d/15WUpbNUGhEzmhM8QATE-L-ins-dXWDc5/view?usp=sharing",
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
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
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
