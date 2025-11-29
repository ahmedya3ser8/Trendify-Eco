import { isAxiosError } from 'axios';

import axiosInstance from '@services/axiosInstance';
import type { TLoginForm } from '@validations/loginSchema';
import type { TRegisterForm } from '@validations/registerSchema';
import type { IUserResponse } from '../models/iuser';

export const registerService = async (formData: TRegisterForm) => {
  try {
    const { data } = await axiosInstance.post<IUserResponse>(`/auth/signup`, formData);
    return data;
  } catch (err) {
    if (isAxiosError(err)) {
      throw new Error(err.response?.data.message || 'Something went wrong')
    }
    throw new Error("Unexpected error occurred");
  }
}

export const loginService = async (formData: TLoginForm) => {
  try {
    const { data } = await axiosInstance.post<IUserResponse>(`/auth/signin`, formData);
    return data;
  } catch (err) {
    if (isAxiosError(err)) {
      throw new Error(err.response?.data.message || 'Something went wrong')
    }
    throw new Error("Unexpected error occurred");
  }
}
