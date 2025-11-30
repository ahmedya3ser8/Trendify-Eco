import { isAxiosError } from "axios";
import axiosInstance from "./axiosInstance";
import type { IProduct } from "@models/iproduct";

interface IResponse {
  message: string;
  status: string;
  data: string[];
}

interface ILoggedResponse {
  message: string;
  status: string;
  data: IProduct[];
}

export const addProductToWishlist = async (productId: string) => {
  try {
    const { data } = await axiosInstance.post<IResponse>(`/wishlist`, { productId });
    return data;
  } catch (err) {
    if (isAxiosError(err)) {
      throw new Error(err.response?.data.message || 'Something went wrong')
    }
    throw new Error("Unexpected error occurred");
  }
}

export const removeProductFromWishlist = async (productId: string) => {
  try {
    const { data } = await axiosInstance.delete<IResponse>(`/wishlist/${productId}`);
    return data;
  } catch (err) {
    if (isAxiosError(err)) {
      throw new Error(err.response?.data.message || 'Something went wrong')
    }
    throw new Error("Unexpected error occurred");
  }
}

export const getLoggedUserWishlist = async () => {
  try {
    const { data } = await axiosInstance.get<ILoggedResponse>(`/wishlist`);
    return data;
  } catch (err) {
    if (isAxiosError(err)) {
      throw new Error(err.response?.data.message || 'Something went wrong')
    }
    throw new Error("Unexpected error occurred");
  }
}
