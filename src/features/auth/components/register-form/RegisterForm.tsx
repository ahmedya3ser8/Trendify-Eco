import { Link, useNavigate } from "react-router-dom";
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from '@tanstack/react-query'
import toast from 'react-hot-toast'

import { Input } from "@components/common";
import { registerSchema, type TRegisterForm } from "@validations/index";
import { registerService } from "@features/auth/index";
import { LuLoader } from "react-icons/lu";

const RegisterForm = () => {
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
  return (
    <div className="flex flex-col justify-center gap-4 px-10">

      <div className="main_title flex flex-col gap-2">
        <h1 className="text-3xl text-secondary font-bold">Create a Account</h1>
        <p className="text-sm text-gray-400">Create a new account</p>
      </div>

      <form onSubmit={handleSubmit(submitForm)} className="flex flex-col gap-6">
        <Input label="Name" name="name" register={register} error={errors.name?.message as string} type="text" />
        <Input label="Email" name="email" register={register} error={errors.email?.message as string} type="email" />
        <Input label="Password" name="password" register={register} error={errors.password?.message as string} type="password" />
        <Input label="Confirm Password" name="rePassword" register={register} error={errors.rePassword?.message as string} type="password" />
        <Input label="Phone" name="phone" register={register} error={errors.phone?.message as string} type="tel" />
        <button type="submit" className="btn"> 
          {isPending ? <LuLoader className="text-lg animate-spin mx-auto" /> : 'Register'} 
        </button>
      </form>

      <p className="text-center">
        Already have an account ? 
        <Link to='/auth/login' className="text-main font-medium underline"> Login </Link>
      </p>

    </div>
  )
}

export default RegisterForm;
