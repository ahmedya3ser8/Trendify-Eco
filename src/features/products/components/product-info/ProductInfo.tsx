import type { IProduct } from "@models/iproduct";
import { FaStar } from "react-icons/fa6";

const ProductInfo = ({ product }: { product: IProduct }) => {
  return (
    <div className="product_info w-xl p-2 flex flex-col gap-3">
      <h3 className="product_title text-2xl text-secondary font-semibold"> {product?.title} </h3>
      <div className="product_price flex items-center gap-2">
        <span className="text-secondary font-medium"> Price : </span>
        <span className="text-main font-medium"> {product?.price} EGP </span>
      </div>
      <p className="product_description text-gray-400 text-sm"> {product?.description} </p>
      <div className="flex items-center gap-2">
        <span className="text-secondary font-medium"> Category : </span>
        <span className="text-main font-medium"> {product?.category.name} </span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-secondary font-medium"> Quantity : </span>
        <span className="text-main font-medium"> {product?.quantity} </span>
      </div>
      <div className="stars flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <FaStar key={index} className={ index < Math.floor(product?.ratingsAverage as number) ? "text-yellow-500" : ""} />
        ))}
        <p className="ms-1 text-sm text-gray-400"> {product?.ratingsAverage} (500+) </p>
      </div>
      <button className="btn"> add to cart </button>
    </div>
  )
}

export default ProductInfo;
