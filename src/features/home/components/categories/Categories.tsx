import { useQuery } from '@tanstack/react-query';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import { getAllCategories } from '@features/home/services/categoryService';

const Categories = () => {
  const { data } = useQuery({
    queryKey: ['recentCategories'],
    queryFn: getAllCategories,
    staleTime: 5 * 60 * 1000,
    select: (data) => data.data
  })
  console.log(data);
  return (
    <section className='py-20'>
      <Swiper
        spaceBetween={20}
        slidesPerView={8}
        loop={true}
        modules={[Autoplay]}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        breakpoints={{
          0: { slidesPerView: 2 },
          375: { slidesPerView: 3 },
          768: { slidesPerView: 5 },
          1024: { slidesPerView: 7 },
          1280: { slidesPerView: 9 },
        }}
      >
        {data?.map((category) => (
          <SwiperSlide className='text-center' key={category._id}>
            <div className="image w-32 h-32 mx-auto">
              <img src={category.image} className='w-full h-full object-cover rounded-full' alt={category.name} />
            </div>
            <h4 className='text-sm text-secondary font-medium mt-3'> {category.name} </h4>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Categories;
