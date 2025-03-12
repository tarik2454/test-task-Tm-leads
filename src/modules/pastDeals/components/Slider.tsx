import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';

import Card from './Card';

export default function Slider() {
  return (
    <div className="relative">
      {/* Нужно для позиционирования скроллбара */}
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={-34}
        scrollbar={{
          hide: false, // Скроллбар должен быть видимым
          draggable: true, // Чтобы можно было двигать
        }}
        modules={[Scrollbar]}
        className="pb-[24px]" // Добавляем отступ вниз для скроллбара
      >
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
      </Swiper>
      {/* Стили для скроллбара */}
      {/* <div className="swiper-scrollbar !bottom-0 absolute left-0 w-full"></div> */}
    </div>
  );
}
