import { Link, useNavigate } from "react-router-dom";
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from '@tanstack/react-query'
import toast from 'react-hot-toast'

import { Input } from "@components/common";
import { loginSchema, type TLoginForm } from "@validations/index";
import { loginService } from "@features/auth/index";
import { LuLoader } from "react-icons/lu";

const LoginForm = () => {
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
      console.log(res);
      if (res.message === 'success') {
        toast.success('Logged in successfully');
        localStorage.setItem("access_token", res.token);
        navigate('/');
      }
    },
    onError: (err) => {
      console.log(err);
      toast.error(err.message);
    }
  })
  return (
    <div className="flex flex-col justify-center gap-4 px-10">

      <div className="main_title flex flex-col gap-2">
        <h1 className="text-3xl text-secondary font-bold">Welcome Back!</h1>
        <p className="text-sm text-gray-400">Please log in or sign up to continue using our app</p>
      </div>

      <form onSubmit={handleSubmit(submitForm)} className="flex flex-col gap-6">
        <Input label="Email" name="email" register={register} error={errors.email?.message as string} type="email" />
        <Input label="Password" name="password" register={register} error={errors.password?.message as string} type="password" />
        <button type="submit" className="btn"> 
          {isPending ? <LuLoader className="text-lg animate-spin mx-auto" /> : 'Login'} 
        </button>
      </form>

      <p className="text-center">
        Don't have an account ?
        <Link to='/auth/register' className="text-main font-medium underline"> Register </Link>
      </p>

    </div>
  )
}

export default LoginForm;
