import heroImg from "/images/about-us/about-hero.jpg"
import signImg from "/images/about-us/about-sign.png"

const Hero = () => {
  return (
    <section className="pt-28 pb-20">
      <div className="container relative">
        <div className="image w-full md:w-[85%] h-[400px] md:h-[550px] ms-auto">
          <img src={heroImg} className="w-full h-full rounded-4xl" alt="about-hero" />
        </div>
        <div className="content absolute left-[6%] top-1/2 -translate-y-1/2 w-[70%] xl:w-lg bg-white p-3 md:p-6 rounded-3xl">
          <span className="text-main text-4xl">
            <i className="fa-solid fa-quote-left"></i>
          </span>
          <p className="text-gray-500 text-xs sm:text-sm md:text-base my-3">
            We are glad to present you our most perfect Shopify theme, which supports Sections Everywhere,
            very high metric scores by google page speed insight.
            This is the most mobile-oriented theme that will be convenient on any of your devices.
          </p>
          <div className="flex justify-between items-center">
            <h3 className="text-secondary font-bold">Jack Donowan</h3>
            <img src={signImg} className="w-[150px]" alt="about-sign" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;
