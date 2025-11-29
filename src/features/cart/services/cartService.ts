import axiosInstance from "@services/axiosInstance";
import { isAxiosError } from "axios";

import type { ICart } from "../models/icart";

interface IResponse {
  cartId: string;
  message: string;
  status: string;
  numOfCartItems: number;
  data: ICart
}

export const addProductToCart = async (productId: string) => {
  try {
    const { data } = await axiosInstance.post<IResponse>(`/cart`, { productId });
    return data;
  } catch (err) {
    if (isAxiosError(err)) {
      throw new Error(err.response?.data.message || 'Something went wrong')
    }
    throw new Error("Unexpected error occurred");
  }
}

export const getLoggedUserCart = async () => {
  try {
    const { data } = await axiosInstance.get<IResponse>(`/cart`);
    return data;
  } catch (err) {
    if (isAxiosError(err)) {
      throw new Error(err.response?.data.message || 'Something went wrong')
    }
    throw new Error("Unexpected error occurred");
  }
}

export const removeSpecificCartItem = async (productId: string) => {
  try {
    const { data } = await axiosInstance.delete<IResponse>(`cart/${productId}`);
    return data;
  } catch (err) {
    if (isAxiosError(err)) {
      throw new Error(err.response?.data.message || 'Something went wrong')
    }
    throw new Error("Unexpected error occurred");
  }
}

export const updateCartProductQuantity = async (productId: string, count: number, action?: string) => {
  try {
    const { data } = await axiosInstance.put<IResponse>(`cart/${productId}`, { count, action });
    return data;
  } catch (err) {
    if (isAxiosError(err)) {
      throw new Error(err.response?.data.message || 'Something went wrong')
    }
    throw new Error("Unexpected error occurred");
  }
}
