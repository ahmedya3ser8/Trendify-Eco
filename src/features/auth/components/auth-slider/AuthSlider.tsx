import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from "swiper/modules";

import slider1 from '/images/auth/slider-1.png';
import slider2 from '/images/auth/slider-2.png';
import slider3 from '/images/auth/slider-3.png';

const AuthSlider = () => {
  return (
    <div>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        modules={[Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
        className='h-screen'
      >
        {[slider1, slider2, slider3].map((img, index) => (
          <SwiperSlide key={index}>
            <div className="image relative w-full h-full">
              <img src={img} loading='lazy' className='w-full h-full object-cover' alt="auth-image" />
              <div className="content absolute inset-0 text-white flex flex-col gap-2 justify-end items-center bottom-[30%]">
                <h3 className="text-2xl font-bold">Welcome to Trendify</h3>
                <p className="text-sm">Discover the latest trends, <br/> express your unique style.</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default AuthSlider;
