import React, { memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

const Carousel = memo(() => {
  return (
    <>
      <Swiper
        loop
        autoplay={{ delay: 5000, disableOnInteraction: true }}
        navigation={true}
        modules={[Navigation]}
        className="w-full container rounded-xl h-[200px] sm:h-[450px]"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
      </Swiper>
    </>
  );
});
export default Carousel;
