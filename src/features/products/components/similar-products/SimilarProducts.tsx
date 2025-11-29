import { ProductItem } from "@components/ui";
import type { IProduct } from "@models/iproduct";

const SimilarProducts = ({ products }: { products: IProduct[] }) => {
  return (
    <section className="py-10">
      <div className="container">
        <h2 className="text-2xl text-secondary font-semibold mb-4">Similar Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products?.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default SimilarProducts;
