import shoppingImg from '/images/about-us/online-shopping.png'

const OnlineShopping = () => {
  return (
    <section className="py-10">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 lg:gap-10">
          <div className="image w-full md:w-1/2">
            <img src={shoppingImg} loading="lazy" className="w-full object-cover" alt="online-shopping" />
          </div>
          <div className="content w-full md:w-1/2 px-6">
            <h2 className="text-secondary text-xl lg:text-2xl font-bold mb-4"> Trusted online shopping </h2>
            <p className="text-gray-400 text-sm lg:text-lg">
              Maecenas congue metus id turpis iaculis mattis. Sed pellentesque id arcu id scelerisque.
              Ut ullamcorper rutrum justo, at blandit eros maximus ut. Integer non tincidunt justo,
              rhoncus Aenean venenatis sed purus ac sollicitudin. Nulla mauris risus,
              commodo et luctus rutrum, lobortis sed mauris. Integer congue, sem elementum varius tristique.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OnlineShopping;
