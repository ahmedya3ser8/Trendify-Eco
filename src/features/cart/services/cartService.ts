import axiosInstance from "@services/axiosInstance";
import { isAxiosError } from "axios";

import type { IProduct } from "@models/iproduct";

interface IResponse {
  cartId: string;
  message: string;
  status: string;
  numOfCartItems: number;
  data: ICart
}

interface ICart {
  cartOwner: string;
  createdAt: string;
  updatedAt: string;
  _id: string;
  totalCartPrice: number;
  products: {
    count: number;
    price: number;
    _id: string;
    product: IProduct;
  }[]
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

