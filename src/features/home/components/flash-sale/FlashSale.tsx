import { useQuery } from "@tanstack/react-query";

import { Button } from "@components/common/index";
import { MainTitle, ProductItem } from "@components/ui/index";
import { getAllProducts } from "@services/productService";

const FlashSale = () => {
  const { data } = useQuery({
    queryKey: ['flashProducts'],
    queryFn: () => getAllProducts(4),
    staleTime: 5 * 60 * 1000,
    select: (data) => data.data
  })
  console.log(data);
  
  return (
    <section className="py-10">
      <div className="container">
        <MainTitle title='Flash Sale' description='Grab Them Before They Are Gone!' />
        <div className="grid grid-cols-4 gap-6">
          {data?.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
        <Button />
      </div>
    </section>
  )
}

export default FlashSale;
