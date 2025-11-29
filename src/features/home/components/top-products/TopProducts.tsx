import { Button } from "@components/common/index";
import { MainTitle, ProductItem } from "@components/ui/index";
import useProducts from "@hooks/useProducts";

const TopProducts = () => {
  const { data } = useProducts(8);
  return (
    <section className="py-10">
      <div className="container">
        <MainTitle title='Top Products' description='Top Picks for You!' />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data?.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
        <Button />
      </div>
    </section>
  )
}

export default TopProducts;
