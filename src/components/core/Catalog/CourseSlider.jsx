import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import {FreeMode, Navigation, Pagination}  from 'swiper/modules';
// import SwiperCore, { Autoplay, FreeMode, Navigation, Pagination } from 'swiper/modules';
// Register the necessary Swiper components with SwiperCore
// SwiperCore.use([Autoplay, FreeMode, Navigation, Pagination]);
// SwiperCore.use([ FreeMode, Navigation, Pagination]);

import CourseCard from './Course_Card';

const CourseSlider = ({ Courses }) => {
  return (
    <>
      {Courses?.length ? (
        <Swiper
          slidesPerView={1}
          spaceBetween={25}
          loop={true}
          modules={[FreeMode, Pagination]}
          breakpoints={{
            1024: {
              slidesPerView: 3,
            },
          }}
          // freeMode={true}
          // autoplay={{
          //   delay: 2500,
          //   disableOnInteraction: false,
          // }}
          // pagination={{ clickable: true }}


          className="max-h-[30rem]"
        >
          {Courses?.map((course, i) => (
            <SwiperSlide key={i}>
              <CourseCard course={course} Height="h-[250px]" />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p className="text-xl text-richblack-5">No Course Found</p>
      )}
    </>
  );
};

export default CourseSlider;
