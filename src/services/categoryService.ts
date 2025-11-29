import { isAxiosError } from "axios";

import type { ICategoryResponse } from "@models/icategory";
import axiosInstance from "./axiosInstance";

export const getAllCategories = async () => {
  try {
    const { data } = await axiosInstance.get<ICategoryResponse>(`/categories`);
    return data;
  } catch (err) {
    if (isAxiosError(err)) {
      throw new Error(err.response?.data.message || 'Something went wrong')
    }
    throw new Error("Unexpected error occurred");
  }
}
