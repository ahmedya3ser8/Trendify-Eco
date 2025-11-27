import type { IProduct } from "@models/iproduct";
import axios, { isAxiosError } from "axios";

export interface IResponse {
  results: number;
  metadata: {
    currentPage: number;
    limit: number;
    numberOfPages: number;
  },
  data: IProduct[]
}

export const getAllProducts = async (limit: number) => {
  try {
    const { data } = await axios.get<IResponse>(`https://ecommerce.routemisr.com/api/v1/products`, {
      params: { 
        limit 
      }
    });
    return data;
  } catch (err) {
    if (isAxiosError(err)) {
      throw new Error(err.response?.data.message || 'Something went wrong')
    }
    throw new Error("Unexpected error occurred");
  }
}
