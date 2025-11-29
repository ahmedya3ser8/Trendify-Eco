import { Link } from "react-router-dom";

import { FaPlus, FaStar } from "react-icons/fa6";
import type { IProduct } from "@models/iproduct";

const ProductItem = ({ product }: { product: IProduct }) => {
  return (
    <div className="product bg-white border border-gray-300 overflow-hidden rounded-lg shadow">
      <Link to={`/products/${product.id}`} className="image block w-full h-[250px] cursor-pointer">
        <img src={product.imageCover} className="w-full h-full object-contain" alt={product.title} />
      </Link>
      <div className="content p-4 flex flex-col gap-2">
        <h3 className="text-xl text-secondary font-semibold line-clamp-1"> {product.title} </h3>
        <div className="stars flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, index) => (
            <FaStar key={index} className={ index < Math.floor(product.ratingsAverage) ? "text-yellow-500" : ""} />
          ))}
          <p className="ms-1 text-sm text-gray-400"> {product.ratingsAverage} (500+) </p>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-main font-medium"> {product.price} EGP </span>
          <button className="size-8 bg-main text-white flex justify-center items-center rounded-lg cursor-pointer"> 
            <FaPlus /> 
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductItem;
