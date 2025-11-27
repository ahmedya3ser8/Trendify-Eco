import { MainTitle } from "@components/ui";
import { FaQuoteLeft, FaStar } from "react-icons/fa6";

import user from '/images/home/user.png'

const Testimonials = () => {
  return (
    <section className="pt-10 pb-20">
      <div className="container">
        <MainTitle title="Testimonials" description="What Our Customer Say" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="col bg-white p-5 rounded-md shadow flex flex-col gap-4">
              <span className="text-4xl text-main">
                <FaQuoteLeft />
              </span>
              <p className="text-gray-300 text-sm md:text-base">  
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio veritatis quam vitae voluptas illum!
              </p>
              <div className="flex items-center gap-3">
                <div className="image">
                  <img src={user} className="size-10 rounded-full" alt="customer" />
                </div>
                <div className="flex-1 flex justify-between items-center">
                  <h3 className="text-secondary font-medium text-sm sm:text-base md:text-lg"> Berry Gunawan </h3>
                  <div className="star flex items-center gap-1"> <FaStar className="text-yellow-500" /> 4.3 </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials;
