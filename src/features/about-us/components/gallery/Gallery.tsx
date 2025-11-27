import { useState } from "react";

import { FaInstagram } from "react-icons/fa6";
import gallery1 from '/images/about-us/fashion-1.jpg'
import gallery2 from '/images/about-us/fashion-2.webp'
import gallery3 from '/images/about-us/fashion-3.webp'
import gallery4 from '/images/about-us/fashion-4.webp'
import gallery5 from '/images/about-us/fashion-5.jpg'

const Gallery = () => {
  const [itemsList] = useState([
    { id: 1, image: gallery1 },
    { id: 2, image: gallery2 },
    { id: 3, image: gallery3 },
    { id: 4, image: gallery4 },
    { id: 5, image: gallery5 }
  ])
  return (
    <section className="pt-10 pb-20">
      <div className="main_title text-center flex flex-col gap-4 mb-8 px-6 md:px-0">
        <h2 className="text-secondary text-lg md:text-2xl lg:text-4xl flex justify-center space-x-4">
          <span> <FaInstagram /> </span>
          <span className="text-main italic font-bold">#iconic_fashion</span>
          <span className="font-bold">On Instagram</span>
        </h2>
        <p className="text-gray-400 text-sm">Phasellus lorem malesuada ligula pulvinar commodo maecenas</p>
      </div>
      <div className="grid grid-cols-5">
        {itemsList.map((item) => (
          <div key={item.id} className="col">
            <img src={item.image} className="w-full h-full object-cover" alt="fashion" />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Gallery;
