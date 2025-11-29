import { useQuery } from "@tanstack/react-query";

import { CartItem, CartSummary } from "@features/cart/components/index";
import { getLoggedUserCart } from "@features/cart/services/cartService";
import type { ICart } from "@features/cart/models/icart";

const Cart = () => {
  const { data } = useQuery({
    queryKey: ['cart'],
    queryFn: getLoggedUserCart
  })
  return (
    <section className="pt-28 pb-20">
      <div className="container">
        <div className="flex gap-8">
          <CartItem data={data?.data as ICart} />
          <CartSummary cartId={data?.cartId as string} totalCartPrice={data?.data.totalCartPrice as number} />
        </div>
      </div>
    </section>
  )
}

export default Cart;
