import './style.css';

const Hero = () => {
  return (
    <section className="hero h-screen flex flex-col justify-center">
      <div className="container">
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl text-white font-semibold"> Elevate Your Home with <br/> Stylish Furniture </h1>
          <p className="text-white max-w-lg my-4"> 
            Explore a range of high-quality, affordable furniture designed to transform any room.
            Discover the perfect blend of style, comfort, and functionality for your space.
          </p>
          <button className="btn w-1/6"> Shop Now </button>
        </div>
      </div>
    </section>
  )
}

export default Hero;
