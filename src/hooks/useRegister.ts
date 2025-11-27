import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from '@tanstack/react-query';
import { useForm, type SubmitHandler } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

import { registerService } from "@features/auth/index";
import { registerSchema, type TRegisterForm } from "@validations/index";

const useRegister = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<TRegisterForm>({
    mode: 'onTouched',
    resolver: zodResolver(registerSchema)
  })
  const submitForm: SubmitHandler<TRegisterForm> = (data) => {
    mutate(data);
  }
  const { mutate, isPending } = useMutation({
    mutationFn: registerService,
    onSuccess: (res) => {
      if (res.message === 'success') {
        toast.success('Account created successfully!');
        navigate('/auth/login');
      }
    },
    onError: (err) => {
      toast.error(err.message);
    }
  })
  return { register, handleSubmit, errors, submitForm, isPending }
}

export default useRegister;
