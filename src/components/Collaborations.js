import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function CollaborationSlider() {
  const collaborations = [
    "Google",
    "Meta",
    "Outbrain",
    "Taboola",
    "Search Partners",
    "ADX",
    "AdSense",
  ];

  return (
    <section id="collaborations" className="collaborations">
      <h2>Collaborations</h2>
      <p>I have collaborated with industry leaders such as:</p>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={12}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={{ enabled: false }}
        breakpoints={{
          0: {
            slidesPerView: 1.1,
            centeredSlides: false,
            navigation: { enabled: false },
            spaceBetween: 12
          },
          640: {
            slidesPerView: 2.1,
            centeredSlides: false,
            navigation: { enabled: false },
            spaceBetween: 16
          },
          768: {
            slidesPerView: 2,
            centeredSlides: false,
            navigation: { enabled: true },
            spaceBetween: 20
          },
          1024: {
            slidesPerView: 3,
            centeredSlides: false,
            navigation: { enabled: true },
            spaceBetween: 24
          }
        }}
      >
        {collaborations.map((collaboration, index) => (
          <SwiperSlide key={index} className="collaboration-slide">
            <div className="collaboration-card">
              <h3>{collaboration}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default CollaborationSlider;
