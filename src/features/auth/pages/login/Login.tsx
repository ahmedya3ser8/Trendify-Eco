import AuthSlider from "@features/auth/components/auth-slider/AuthSlider";
import LoginForm from "@features/auth/components/login-form/LoginForm";

const Login = () => {
  return (
    <section className="grid grid-cols-2">
      <LoginForm />
      <AuthSlider />
    </section>
  )
}

export default Login;
