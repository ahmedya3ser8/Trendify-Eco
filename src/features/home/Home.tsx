import Categories from "./components/categories/Categories";
import FlashSale from "./components/flash-sale/FlashSale";
import Hero from "./components/hero/Hero";
import NewCollection from "./components/new-collection/NewCollection";

const Home = () => {
  return (
    <>
      <Hero />
      <Categories />
      <FlashSale />
      <NewCollection />
    </>
  )
}

export default Home;
