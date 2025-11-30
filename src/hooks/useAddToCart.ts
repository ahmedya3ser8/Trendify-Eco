import { addProductToCart } from "@features/cart";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

const useAddToCart = () => {
  const queryClient = useQueryClient();
  const { mutate: addToCart, isPending } = useMutation({
    mutationFn: addProductToCart,
    onSuccess: (res) => {
      console.log(res);
      if (res.status === 'success') {
        toast.success(res.message);
        queryClient.invalidateQueries({ queryKey: ['cart'] });
      }
    },
    onError: (err) => {
      toast.error(err.message);
    }
  })
  return { addToCart, isPending }
}

export default useAddToCart;
