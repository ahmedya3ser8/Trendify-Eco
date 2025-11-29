import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { FaMinus, FaPlus, FaRegTrashCan } from "react-icons/fa6";
import { LuLoader } from "react-icons/lu";
import { removeSpecificCartItem, updateCartProductQuantity } from "@features/cart/services/cartService";
import type { ICart } from "@features/cart/models/icart";

const CartItem = ({ data }: { data: ICart }) => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: removeSpecificCartItem,
    onSuccess: () => {
      toast.success('Product removed successfully');
      queryClient.invalidateQueries({ queryKey: ['cart'] });
    },
    onError: (err) => {
      toast.error(err.message);
    }
  })
  const updateQuantityMutation  = useMutation({
    mutationFn: ({productId, count, action}: {productId: string, count: number, action?: string}) => updateCartProductQuantity(productId, count, action),
    onSuccess: () => {
      toast.success('Quantity updated successfully');
      queryClient.invalidateQueries({ queryKey: ['cart'] })
    },
    onError: (err) => {
      toast.error(err.message);
    }
  })  
  return (
    <div className="col flex-1 bg-white rounded-lg">
      {data?.products.map((product) => (
        <div key={product.product.id} className="cart p-4 flex gap-6 border-b border-gray-200">
          <div className="image w-32 h-32 bg-gray-50">
            <img src={product.product.imageCover} className="w-full h-full" alt={product.product.title} />
          </div>
          <div className="content flex flex-col gap-3">
            <h3 className="text-gray-700 font-semibold text-xl">{product.product.title}</h3>
            <h5 className="text-gray-500 font-medium text-lg">{product.price} EGP</h5>
            <div className="quanities flex items-center gap-3">
              <button onClick={() => updateQuantityMutation.mutate({ productId: product.product.id, count: product.count + 1, action: "inc" })} className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-md cursor-pointer">
                { 
                  updateQuantityMutation.isPending && 
                  updateQuantityMutation.variables.productId === product.product.id && 
                  updateQuantityMutation.variables?.action === "inc" 
                  ? <LuLoader className="animate-spin" /> : <FaPlus /> }
              </button>
              <span className="text-gray-700 font-medium">{product.count}</span>
              <button onClick={() => updateQuantityMutation.mutate({ productId: product.product.id, count: product.count - 1, action: "dec" })} className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-md cursor-pointer">
                { 
                  updateQuantityMutation.isPending && 
                  updateQuantityMutation.variables.productId === product.product.id && 
                  updateQuantityMutation.variables?.action === "dec" 
                  ? <LuLoader className="animate-spin" /> : <FaMinus /> }
              </button>
            </div>
            <button onClick={() => mutation.mutate(product.product.id)} className="text-gray-500 flex items-center gap-1 text-lg cursor-pointer">
              { mutation.isPending && mutation.variables === product.product.id ? <LuLoader className="animate-spin" /> : <FaRegTrashCan className="text-lg" /> }
              Delete Product
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CartItem;
