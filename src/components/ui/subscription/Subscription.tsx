import { FaEnvelope } from "react-icons/fa6";

const Subscription = () => {
  return (
    <section className="py-10">
      <div className="container">
        <div className="flex justify-center items-center flex-col gap-4 bg-white px-6 md:px-0 py-12">
          <span className="text-main text-4xl">
            <FaEnvelope />
          </span>
          <h3 className="uppercase text-secondary font-medium">sign up for teemate style news</h3>
          <p className="text-sm text-gray-500 text-center">
            Get 15% of your first purchaxsel! plus, be the first to known about sales, <br/>
            new product launches and exclusive offers!
          </p>
          <div className="flex flex-col md:flex-row gap-4 w-full lg:w-md">
            <input type="text" className="w-full bg-white text-gray-500 p-2 border border-main outline-none rounded-lg" placeholder="Enter Your Email" />
            <button className="p-2 bg-main text-white border border-white rounded-lg cursor-pointer">Subscribe</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Subscription;
