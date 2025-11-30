import { isAxiosError } from "axios";
import axiosInstance from "./axiosInstance";

import type { TCheckoutSchema } from "@validations/checkoutSchema";
import type { IOrder } from "@models/iorder";

interface IResponse {
  status: string;
  data: IOrder,
  session: {
    cancel_url: string;
    success_url: string;
    url: string;
  }
}

export const cashOrder = async ({ cartId, formData }: { cartId: string, formData: TCheckoutSchema }) => {
  try {
    const { data } = await axiosInstance.post<IResponse>(`/orders/${cartId}`, { shippingAddress: formData });
    return data;
  } catch (err) {
    if (isAxiosError(err)) {
      throw new Error(err.response?.data.message || 'Something went wrong')
    }
    throw new Error("Unexpected error occurred");
  }
}

export const onlineOrder = async ({ cartId, formData }: { cartId: string, formData: TCheckoutSchema }) => {
  try {
    const { data } = await axiosInstance.post<IResponse>(`/orders/checkout-session/${cartId}?url=http://localhost:5173`, { shippingAddress: formData });
    return data;
  } catch (err) {
    if (isAxiosError(err)) {
      throw new Error(err.response?.data.message || 'Something went wrong')
    }
    throw new Error("Unexpected error occurred");
  }
}

