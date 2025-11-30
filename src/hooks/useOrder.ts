import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { cashOrder, onlineOrder } from "@services/orderService";
import { checkoutSchema, type TCheckoutSchema } from "@validations/checkoutSchema";

const useOrder = () => {
  const { cartId } = useParams();
  const navigate = useNavigate();
  const [method, setMethod] = useState('online');
  const { register, handleSubmit, formState: { errors } } = useForm<TCheckoutSchema>({
    mode: 'onTouched',
    resolver: zodResolver(checkoutSchema)
  })
  const submitForm: SubmitHandler<TCheckoutSchema> = (formData) => {
    if (method === 'online') {
      onlinePayment({ cartId: cartId!, formData })
    } else if (method === 'cash') {
      cashPayment({ cartId: cartId!, formData })
    }
  }
  const paymentMethod = (payment: string) => setMethod(payment);
  const { mutate: cashPayment, isPending: isCashPending } = useMutation({
    mutationKey: ['checkout/cash'],
    mutationFn: cashOrder,
    onSuccess: (res) => {
      console.log(res);
      if (res.status === 'success') {
        navigate('/allorders');
        toast.success('thank you! Your order was successful.');
      }
    },
    onError: (err) => {
      toast.error(err.message);
    }
  })
  const { mutate: onlinePayment, isPending: isOnlinePending } = useMutation({
    mutationKey: ['checkout/online'],
    mutationFn: onlineOrder,
    onSuccess: (res) => {
      console.log(res);
      toast.success('redirecting you to our secure payment provider... Please wait.');
      if (res.status === 'success') {
        open(res.session.url, '_self');
      }
    },
    onError: (err) => {
      toast.error(err.message);
    }
  })
  return { register, handleSubmit, errors, submitForm, paymentMethod, isCashPending, isOnlinePending, method }
}

export default useOrder;
