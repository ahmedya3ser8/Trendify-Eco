import { Link } from 'react-router-dom';
import style from './style.module.css';

const Hero = () => {
  return (
    <section className={`${style.hero} hero h-screen flex flex-col justify-center`}>
      <div className="container">
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl text-white font-semibold leading-12"> Elevate Your Home with <br/> Stylish Furniture </h1>
          <p className="text-white max-w-lg"> 
            Explore a range of high-quality, affordable furniture designed to transform any room.
            Discover the perfect blend of style, comfort, and functionality for your space.
          </p>
          <Link to='/products' className="btn w-1/6 flex items-center justify-center"> Shop Now </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero;
