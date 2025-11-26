import type { FieldValues, Path, UseFormRegister } from "react-hook-form";

interface IProps<TFieldValue extends FieldValues> {
  label: string;
  name: Path<TFieldValue>;
  register: UseFormRegister<TFieldValue>;
  type?: string;
  error: string;
}

const Input = <TFieldValue extends FieldValues>({ label, name, register, error, type = 'text' }: IProps<TFieldValue>) => {
  return (
    <div className="basic_input">
      <div className="floating_label_group">
        <input type={type} id={name} {...register(name)} className="floating_input" placeholder=" " />
        <label htmlFor={name} className="floating_label"> {label} </label>
      </div>
      <p className="text-sm lowercase text-red-500 mt-1"> {error} </p>
    </div>
  )
}

export default Input;
