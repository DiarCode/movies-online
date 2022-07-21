import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

const Carousel = () => {
  return (
    <>
      <Swiper
        loop
        autoplay={{ delay: 5000, disableOnInteraction: true }}
        navigation={true}
        modules={[Navigation]}
        className="w-full container rounded-xl h-[450px] md:h-[370px] sm:h-[200px]"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
      </Swiper>
    </>
  );
};

export default Carousel;
