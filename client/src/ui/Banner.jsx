import React from "react";
import styles from "./Banner.module.scss";

import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Banner = () => {
  return (
    <div className="flex justify-center p-4">
      <div className="bg-im">
        <div className="flex w-[80rem] items-center justify-center text-3xl">
          <Swiper
            // modules={[Navigation, Pagination, Autoplay]}
            modules={[Pagination, Autoplay]}
            style={{
              "--swiper-pagination-color": "#f5f5f5",
              "--swiper-navigation-color": "#f5f5f5",
              "--swiper-pagination-bullet-size": "10px",
              "--swiper-navigation-size": "50px",
              "--swiper-navigation-sides-offset": "10px",
            }}
            spaceBetween={10} // 이미지 간격
            // navigation
            pagination={{ clickable: true }}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
            }}
          >
            <SwiperSlide>
              <Link to="/group">
                <img
                  className="h-60 w-[80rem] rounded-3xl bg-blue-500 bg-contain bg-no-repeat"
                  src="https://th.bing.com/th/id/OIG.oTWkS5zPtYgvRcTWhzoR?w=270&h=270&c=6&r=0&o=5&pid=ImgGn"
                  alt=""
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.aaa}></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.bbb}></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.ccc}></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.ddd}></div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Banner;
