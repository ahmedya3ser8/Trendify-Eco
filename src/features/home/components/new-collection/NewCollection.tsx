import { MainTitle } from "@components/ui";

import collection1 from '/images/collections/collection-1.png'
import collection2 from '/images/collections/collection-2.webp'
import collection3 from '/images/collections/collection-3.webp'

const NewCollection = () => {
  return (
    <section className="py-10">
      <div className="container">
        <MainTitle title="New Collection" description="Check the new Collection" />
        <div className="flex flex-col md:flex-row gap-6">
          <div className="h-[550px] w-full md:w-1/2 relative overflow-hidden rounded-3xl">
            <div className="image w-full h-full">
              <img src={collection1} loading="lazy" className="w-full h-full object-cover" alt="collection-image" />
            </div>
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center flex-col text-white">
              <h3 className="text-4xl md:text-5xl mb-2.5">Shoes</h3>
              <p className="text-2xl md:text-3xl">UP TO 50% OFF</p>
            </div>
          </div>
          <div className="h-[550px] w-full md:w-1/2 flex flex-col justify-between gap-5">
            <div className="h-[48%] relative overflow-hidden rounded-3xl">
              <div className="image w-full h-full">
                <img src={collection2} loading="lazy" className="w-full h-full object-cover" alt="collection-image" />
              </div>
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center flex-col text-white">
                <h3 className="text-4xl md:text-5xl mb-2.5">Bags</h3>
                <p className="text-2xl md:text-3xl">UP TO 50% OFF</p>
              </div>
            </div>
            <div className="h-[48%] relative overflow-hidden rounded-3xl">
              <div className="image w-full h-full">
                <img src={collection3} loading="lazy" className="w-full h-full object-cover" alt="collection-image" />
              </div>
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center flex-col text-white">
                <h3 className="text-4xl md:text-5xl mb-2.5">Accessories</h3>
                <p className="text-2xl md:text-3xl">UP TO 50% OFF</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewCollection;
