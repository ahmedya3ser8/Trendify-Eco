import { useState } from 'react';

import { Subscription } from '@components/ui';
import blog1 from '/images/blogs/blog-1.png';
import blog2 from '/images/blogs/blog-2.png';
import blog3 from '/images/blogs/blog-3.png';
import blog4 from '/images/blogs/blog-4.png';
import blog5 from '/images/blogs/blog-5.png';
import blog6 from '/images/blogs/blog-6.png';

const Blog = () => {
  const [itemsList] = useState([
    { id: 1, image: blog1 },
    { id: 2, image: blog2 },
    { id: 1, image: blog3 },
    { id: 1, image: blog4 },
    { id: 5, image: blog5 },
    { id: 6, image: blog6 }
  ])
  return (
    <>
      <section className="pt-28 pb-20">
        <div className="container">
          <div className="main_title text-center mb-8 px-6 md:px-0">
            <h1 className="text-secondary text-3xl lg:text-4xl font-bold mb-4"> Blog </h1>
            <p className="text-sm md:text-base text-gray-400 font-medium"> Make your best moments more stylish with our latest designs of clothing. </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-5">
            {itemsList.map((item) => (
              <div className="blog shadow-md transition duration-700 hover:-translate-y-4">
                <div key={item.id} className="image">
                  <img src={item.image} className="w-full" alt="blog" />
                </div>
                <div className="content bg-white text-gray-500 p-5 flex flex-col gap-4">
                  <div className="flex justify-between items-center">
                    <span> Fashion</span>
                    <span> Nov 27, 2025 </span>
                  </div>
                  <h3 className="text-secondary text-xl font-bold"> The perfect Shopify theme </h3>
                  <p className="text-sm"> Shopify is the second most popular eCommerce store builder in the world. You can use Shopify in... </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Subscription />
    </>
  )
}

export default Blog;
