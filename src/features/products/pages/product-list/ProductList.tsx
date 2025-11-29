
import { ProductItem } from "@components/ui";
import FilterProducts from "@features/products/components/filter-products/FilterProducts";
import useProducts from "@hooks/useProducts";

const ProductList = () => {
  const { activeTab, productsList, selectedTab } = useProducts(12);
  return (
    <section className="pt-28 pb-20">
      <div className="container">
        <div className="flex">
          <FilterProducts activeTab={activeTab} selectedTab={selectedTab} />
          <div className="w-5/6 p-4">
            <h4 className="text-2xl text-secondary font-medium capitalize mb-6"> 
              All Products 
              <span className="text-main text-sm"> (56) </span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {productsList?.map((product) => (
                <ProductItem key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductList;
