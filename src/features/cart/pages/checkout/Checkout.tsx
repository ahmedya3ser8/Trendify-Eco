import useOrder from "@hooks/useOrder";
import { CheckoutForm, CheckoutSummary } from "@features/cart/components/index";

const Checkout = () => {
  const { register, handleSubmit, errors, submitForm, paymentMethod, isCashPending, isOnlinePending, method } = useOrder();
  return (
    <section className="pt-28 pb-20">
      <div className="container">
        <div className="flex gap-8">
          <CheckoutForm 
            register={register} 
            errors={errors} 
            paymentMethod={paymentMethod} 
            method={method} 
          />
          <CheckoutSummary 
            submitForm={submitForm} 
            handleSubmit={handleSubmit} 
            isCashPending={isCashPending} 
            isOnlinePending={isOnlinePending} 
          />
        </div>
      </div>
    </section>
  )
}

export default Checkout;
