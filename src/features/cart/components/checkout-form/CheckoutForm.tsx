import { Input } from '@components/common';
import { FaLocationDot } from 'react-icons/fa6';
import style from './style.module.css';
import type { FieldErrors, UseFormRegister } from 'react-hook-form';
import type { TCheckoutSchema } from '@validations/checkoutSchema';

interface IProps {
  register: UseFormRegister<TCheckoutSchema>;
  errors: FieldErrors<TCheckoutSchema>;
  paymentMethod: (payment: string) => void;
  method: string;
}

const CheckoutForm = ({ register, errors, paymentMethod, method }: IProps) => {
  return (
    <div className="col flex-1 bg-white p-4 rounded-lg flex flex-col gap-6">
      <div className="title flex flex-col gap-2">
        <h3 className="text-secondary font-semibold text-xl">Delivery Address</h3>
        <p className="text-gray-500 text-sm flex items-center gap-1"> 
          <FaLocationDot /> Delivery to Mansoura, Abdel Salam Aref Street
        </p>
      </div>
      <form className="flex flex-col gap-4">
        <div className="basic_textarea">
          <div className="floating_label_group">
            <textarea id="details" {...register('details')} className="floating_input h-[110px]! resize-none" placeholder=" "></textarea>
            <label htmlFor="details" className={`floating_label ${style.floating_label}`}> Details </label>
          </div>
          <p className="text-sm lowercase text-red-500 mt-1"> {errors.details?.message} </p>
        </div>
        <Input label="Phone" error={errors.phone?.message as string} name="phone" register={register} type="tel" />
        <Input label="City" error={errors.city?.message as string} name="city" register={register} type="text" />
      </form>
      <h3 className="text-secondary font-semibold text-xl">Delivery Method</h3>
      <div className="delivery h-14 px-4 border border-gray-300 rounded-lg flex items-center gap-3 transition duration-300">
        <input type="radio" onChange={() => paymentMethod('online')} checked={method === "online"} value="online" className="size-6 accent-gray-700" name="paymentMethod" id="onlinePayment" />
        <label htmlFor="onlinePayment" className="w-full h-full py-4 text-gray-800 cursor-pointer">Online Payment</label>
      </div>
      <div className="delivery h-14 px-4 border border-gray-300 rounded-lg flex items-center gap-3 transition duration-300">
        <input type="radio" onChange={() => paymentMethod('cash')} checked={method === "cash"} value="cash" className="size-6 accent-gray-700" name="paymentMethod" id="cashPayment" />
        <label htmlFor="cashPayment" className="w-full h-full py-4 text-gray-800 cursor-pointer">Cash Payment</label>
      </div>
    </div>
  )
}

export default CheckoutForm;
