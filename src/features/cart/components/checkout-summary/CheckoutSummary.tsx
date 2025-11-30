import type { TCheckoutSchema } from "@validations/checkoutSchema";
import type { SubmitHandler, UseFormHandleSubmit } from "react-hook-form";
import { FaTruckMoving } from "react-icons/fa6";
import { LuLoader } from "react-icons/lu";

interface IProps {
  submitForm: SubmitHandler<TCheckoutSchema>;
  handleSubmit: UseFormHandleSubmit<TCheckoutSchema>;
  isCashPending: boolean;
  isOnlinePending: boolean;
}

const CheckoutSummary = ({ submitForm, handleSubmit, isCashPending, isOnlinePending }: IProps) => {
  return (
    <div className="col bg-white rounded-lg p-4 w-md h-fit flex flex-col gap-6">
      <h3 className="text-gray-700 font-semibold text-xl">Order Summary</h3>
      <ul className="flex flex-col gap-4">
        <li className="flex justify-between items-center">
          <span className="text-gray-500">Total</span>
          <span className="text-gray-700 font-semibold">150 EGP</span>
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
          <span className="text-gray-700 font-semibold">150 EGP</span>
        </li>
      </ul>
      <button onClick={handleSubmit(submitForm)} className="btn">
        {(isCashPending || isOnlinePending) ? <LuLoader className="animate-spin mx-auto" /> : 'Payment' } 
      </button>
    </div>
  )
}

export default CheckoutSummary;
