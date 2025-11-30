import { ProductItem } from "@components/ui";
import useWishlist from "@hooks/useWishlist";

const Wishlist = () => {
  const { data } = useWishlist();
  return (
    <section className="pt-28 pb-20">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data?.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Wishlist;
