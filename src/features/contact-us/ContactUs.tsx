import { Input } from "@components/common";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";

import { Subscription } from "@components/ui";
import { contactSchema, type TcontactSchema } from "@validations/contactSchema";
import style from './style.module.css';

const ContactUs = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<TcontactSchema>({
    mode: 'onTouched',
    resolver: zodResolver(contactSchema)
  })
  const submitForm: SubmitHandler<TcontactSchema> = (data) => {
    console.log(data);
  }
  return (
    <>
      <section className="pt-28 pb-20">
        <div className="container">
          <div className="mian_title flex flex-col gap-4 mb-8">
            <h2 className="text-secondary text-3xl md:text-4xl font-bold">Contact me</h2>
            <p className="text-gray-400 text-sm md:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit sequi ad unde.</p>
          </div>
          <form onSubmit={handleSubmit(submitForm)} className="w-full md:w-[70%] flex flex-col gap-5">
            <Input label="FirstName" error={errors.firstName?.message as string} name="firstName" register={register} type="text" />
            <Input label="LastName" error={errors.lastName?.message as string} name="lastName" register={register} type="text" />
            <Input label="Email" error={errors.email?.message as string} name="email" register={register} type="email" />
            <div className="basic_textarea">
              <div className="floating_label_group">
                <textarea id="message" {...register('message')} className="floating_input h-[110px]! resize-none" placeholder=" "></textarea>
                <label htmlFor="message" className={`floating_label ${style.floating_label}`}> Message </label>
              </div>
              <p className="text-sm lowercase text-red-500 mt-1"> {errors.message?.message} </p>
            </div>
            <button type="submit" className="btn w-1/6"> Submit </button>
          </form>
        </div>
      </section>
      <Subscription />
    </>
  )
}

export default ContactUs;
