import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';

const ProductSlider = ({ images, title }: { images: string[], title: string }) => {
  return (
    <div className="product_slider w-md h-[350px]">
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        modules={[Autoplay]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        className='h-full'
      >
        {images.map((item, index) => (
          <SwiperSlide key={index}>
            <img src={item} className="w-full h-full" alt={title} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default ProductSlider;
