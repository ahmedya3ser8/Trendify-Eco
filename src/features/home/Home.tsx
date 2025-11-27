import Categories from "./components/categories/Categories";
import Discover from "./components/discover/Discover";
import FlashSale from "./components/flash-sale/FlashSale";
import Hero from "./components/hero/Hero";
import NewCollection from "./components/new-collection/NewCollection";
import Testimonials from "./components/testimonials/Testimonials";
import TopProducts from "./components/top-products/TopProducts";
import TopServices from "./components/top-services/TopServices";

const Home = () => {
  return (
    <>
      <Hero />
      <Categories />
      <FlashSale />
      <NewCollection />
      <TopProducts />
      <Discover />
      <TopServices />
      <Testimonials />
    </>
  )
}

export default Home;
