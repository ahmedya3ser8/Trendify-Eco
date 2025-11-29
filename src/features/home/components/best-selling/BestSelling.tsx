import { useState } from "react";

import { Button } from "@components/common";
import { MainTitle, ProductItem } from "@components/ui";
import useProducts from "@hooks/useProducts";

const BestSelling = () => {
  const [tabsList] = useState([
    { catId: "", content: "All" },
    { catId: "6439d5b90049ad0b52b90048", content: "Men's" },
    { catId: "6439d58a0049ad0b52b9003f", content: "Women's" },
    { catId: "6439d2d167d9aa4ca970649f", content: "Electronics" }
  ]);
  const { activeTab, productsList, selectedTab } = useProducts(4);
  return (
    <section className="py-10">
      <div className="container">
        <MainTitle title="Products" description="Best Selling Product" />
        <div className="taps flex space-x-4 bg-[#eee] w-fit mx-auto py-2 px-6 rounded-2xl mb-8">
          {tabsList.map((tab) => (
            <button 
              key={tab.catId} 
              onClick={() => selectedTab(tab.catId)} 
              className={`tap text-sm py-2 px-4 rounded-2xl transition duration-300 cursor-pointer ${activeTab === tab.catId ? 'bg-main text-white' : ''}`}
            > { tab.content } </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {productsList.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
        <Button />
      </div>
    </section>
  )
}

export default BestSelling;
