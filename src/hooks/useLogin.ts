import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from '@tanstack/react-query';
import { useForm, type SubmitHandler } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

import { loginService } from "@features/auth/index";
import { loginSchema, type TLoginForm } from "@validations/index";

const useLogin = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<TLoginForm>({
    mode: 'onTouched',
    resolver: zodResolver(loginSchema)
  })
  const submitForm: SubmitHandler<TLoginForm> = (data) => {
    mutate(data);
  }
  const { mutate, isPending } = useMutation({
    mutationFn: loginService,
    onSuccess: (res) => {
      if (res.message === 'success') {
        toast.success('Logged in successfully');
        localStorage.setItem("access_token", res.token);
        navigate('/');
      }
    },
    onError: (err) => {
      toast.error(err.message);
    }
  })
  return { register, handleSubmit, errors, submitForm, isPending }
}

export default useLogin;
