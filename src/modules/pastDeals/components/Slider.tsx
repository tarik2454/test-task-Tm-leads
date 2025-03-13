import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';

import Card from './Card';

export default function Slider() {
  return (
    <div className="relative">
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={9}
        scrollbar={{
          hide: false,
          draggable: true,
        }}
        modules={[Scrollbar]}
        breakpoints={{
          375: {
            spaceBetween: 9,
          },
          1440: {
            spaceBetween: 20,
          },
        }}
        className="pb-[24px]"
      >
        {[...Array(10)].map((_, index) => (
          <SwiperSlide key={index}>
            <Card />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
