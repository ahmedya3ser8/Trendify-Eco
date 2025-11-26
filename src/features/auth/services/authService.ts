import axios, { isAxiosError } from 'axios';

import type { TRegisterForm } from '@validations/registerSchema';
import type { IUserResponse } from '../models/iuser';
import type { TLoginForm } from '@validations/loginSchema';

export const registerService = async (formData: TRegisterForm) => {
  try {
    const { data } = await axios.post<IUserResponse>(`https://ecommerce.routemisr.com/api/v1/auth/signup`, formData);
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
    const { data } = await axios.post<IUserResponse>(`https://ecommerce.routemisr.com/api/v1/auth/signin`, formData);
    return data;
  } catch (err) {
    if (isAxiosError(err)) {
      throw new Error(err.response?.data.message || 'Something went wrong')
    }
    throw new Error("Unexpected error occurred");
  }
}
