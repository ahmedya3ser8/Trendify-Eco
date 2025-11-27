import { MainTitle } from "@components/ui";
import { FaRegLightbulb } from "react-icons/fa";

const TopServices = () => {
  return (
    <section className="py-10">
      <div className="container">
        <MainTitle title="Services" description="Benefits when using our services" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="card bg-white rounded-lg flex flex-col gap-3 p-6">
              <span className="size-12 rounded-full bg-[#f6f6f6] flex justify-center items-center">
                <FaRegLightbulb />
              </span>
              <h3 className="text-secondary text-lg font-medium"> Inspiration </h3>
              <p className="text-gray-400 text-sm md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis est, quod dicta eveniet ea itaque
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TopServices;
