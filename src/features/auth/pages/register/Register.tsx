import AuthSlider from "@features/auth/components/auth-slider/AuthSlider";
import RegisterForm from "@features/auth/components/register-form/RegisterForm";

const Register = () => {
  return (
    <section className="grid grid-cols-2">
      <RegisterForm />
      <AuthSlider />
    </section>
  )
}

export default Register;
