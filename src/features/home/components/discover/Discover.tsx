import { Button } from "@components/common";
import style from './style.module.css';

const Discover = () => {
  return (
    <section className={`${style.discover} py-10`}>
      <div className="container h-[400px] relative">
        <div className="absolute inset-0 text-white w-full md:w-2xl lg:w-4xl xl:w-6xl 2xl:w-7xl px-6 md:px-0 mx-auto h-full flex flex-col gap-5 justify-center items-center text-center">
          <h2 className="text-lg sm:text-xl md:text-2xl xl:text-5xl font-bold"> Discover Fashion That Speaks To You. </h2>
          <p className="text-sm md:text-base lg:text-xl xl:text-2xl md:leading-10">
            Explore a range of high-quality, affordable furniture designed to transform any room.
            Discover the perfect blend of style, comfort, and functionality for your space.
          </p>
          <Button styles='text-white' />
        </div>
      </div>
    </section>
  )
}

export default Discover;
