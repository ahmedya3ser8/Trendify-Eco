import chooseUsImg from "/images/about-us/why-choose-us.png";

const WhyChooseUs = () => {
  return (
    <section className="py-10">
      <div className="container">
        <div className="main_title text-center mb-8 px-6 md:px-0">
          <h1 className="text-secondary text-2xl md:text-3xl lg:text-4xl font-bold mb-4">A few words about us</h1>
          <p className="text-sm text-gray-400 font-medium">
            Make your best moments more stylish with our latest designs of clothing.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 lg:gap-10">
          <div className="image w-full md:w-1/2">
            <img src={chooseUsImg} className="w-full object-cover" alt="why-choose-us" />
          </div>
          <div className="content w-full md:w-1/2 px-6">
            <h2 className="text-secondary text-2xl font-bold mb-4">Why choose us ?</h2>
            <p className="text-gray-400 text-sm lg:text-lg">
              Maecenas congue metus id turpis iaculis mattis. Sed pellentesque id arcu id scelerisque.
              Ut ullamcorper rutrum justo, at blandit eros maximus ut. Integer non tincidunt justo,
              rhoncus Aenean venenatis sed purus ac sollicitudin. Nulla mauris risus, commodo et luctus rutrum,
              lobortis sed mauris. Integer congue, sem elementum varius tristique.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs;
