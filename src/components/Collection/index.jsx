import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import "../../assets/styles/_Collection.style.scss";

import image1 from '../../assets/images/collection1.jpg';
import image2 from '../../assets/images/collection2.jpg';
import image3 from '../../assets/images/collection3.jpg';


const Collection = () => {
  return (
    <div className="collect-furniture container mx-auto py-16">
      <h1 className="text-center pb-16 font-neucha">
        Explore each unique collection
      </h1>

      <Swiper
        slidesPerView={'auto'}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={image1} alt="Image1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2} alt="Image2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image3} alt="Image3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image1} alt="Image4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2} alt="Image5" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image3} alt="Image6" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image1} alt="Image7" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2} alt="Image8" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Collection;
