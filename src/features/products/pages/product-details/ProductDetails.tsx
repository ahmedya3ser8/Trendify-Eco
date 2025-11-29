import { useQuery } from "@tanstack/react-query";
import { useLoaderData } from "react-router-dom";

import type { IProduct } from "@models/iproduct";
import { getAllProducts } from "@services/productService";
import { SimilarProducts, ProductSlider, ProductInfo } from "@features/products/components/index";

const ProductDetails = () => {
  const product = useLoaderData() as IProduct;
  const { data: products } = useQuery({
    queryKey: ['products', product.id],
    queryFn: () => getAllProducts(4, product.category._id),
    select: (data) => data.data
  })
  return (
    <>
      <section className="pt-28 pb-20">
        <div className="container">
          <div className="flex gap-6">
            <ProductSlider images={product.images} title={product.title} />
            <ProductInfo product={product} />
          </div>
        </div>
      </section>
      <SimilarProducts products={products!} />
    </>
  )
}

export default ProductDetails;
