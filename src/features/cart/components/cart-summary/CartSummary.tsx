import { Link } from "react-router-dom";

import { FaTruckMoving } from "react-icons/fa6";

const CartSummary = ({ cartId, totalCartPrice } : { cartId: string, totalCartPrice: number }) => {
  return (
    <div className="col bg-white rounded-lg p-4 w-md h-fit flex flex-col gap-6">
      <h3 className="text-gray-700 font-semibold text-xl">Order Summary</h3>
      <ul className="flex flex-col gap-4">
        <li className="flex justify-between items-center">
          <span className="text-gray-500">Total</span>
          <span className="text-gray-700 font-semibold">{totalCartPrice} EGP</span>
        </li>
        <li className="flex justify-between items-center">
          <span className="text-gray-500">Total Shipping Cost</span>
          <span className="text-gray-700 font-semibold">0 EGP</span>
        </li>
        <li className="text-gray-500 text-sm flex items-center gap-1">
          <FaTruckMoving className="text-lg" />
          Delivery between September 1 and September 7
        </li>
        <li className="flex justify-between items-center">
          <span className="text-gray-500">Total</span>
          <span className="text-gray-700 font-semibold">{totalCartPrice} EGP</span>
        </li>
      </ul>
      <Link to={`/checkout/${cartId}`} className="btn flex justify-center items-center">Proceed to Checkout</Link>
    </div>
  )
}

export default CartSummary;
