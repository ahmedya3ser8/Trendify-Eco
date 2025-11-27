import { useQuery } from "@tanstack/react-query";

import { Button } from "@components/common/index";
import { MainTitle, ProductItem } from "@components/ui/index";
import { getAllProducts } from "@services/productService";

const TopProducts = () => {
  const { data } = useQuery({
    queryKey: ['flashProducts'],
    queryFn: () => getAllProducts(8),
    staleTime: 5 * 60 * 1000,
    select: (data) => data.data
  })
  console.log(data);
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
