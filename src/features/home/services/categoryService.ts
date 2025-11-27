import axios, { isAxiosError } from "axios";
import type { ICategoryResponse } from "../models/icategory";

export const getAllCategories = async () => {
  try {
    const { data } = await axios.get<ICategoryResponse>(`https://ecommerce.routemisr.com/api/v1/categories`);
    return data;
  } catch (err) {
    if (isAxiosError(err)) {
      throw new Error(err.response?.data.message || 'Something went wrong')
    }
    throw new Error("Unexpected error occurred");
  }
}
