import { addProductToWishlist, getLoggedUserWishlist, removeProductFromWishlist } from "@services/wishlistService";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

const useWishlist = () => {
  const queryClient = useQueryClient();
  const { data } = useQuery({
    queryKey: ['wishlist'],
    queryFn: getLoggedUserWishlist,
    select: (data) => data.data
  })
  const { mutate: addToWishlist } = useMutation({
    mutationFn: addProductToWishlist,
    onSuccess: (res) => {
      if (res.status === 'success') {
        toast.success(res.message);
        queryClient.invalidateQueries({ queryKey: ["wishlist"] });
      }
    },
    onError: (err) => {
      toast.error(err.message);
    }
  })
  const { mutate: removeFromWishlist } = useMutation({
    mutationFn: removeProductFromWishlist,
    onSuccess: (res) => {
      if (res.status === 'success') {
        toast.success(res.message);
        queryClient.invalidateQueries({ queryKey: ["wishlist"] });
      }
    },
    onError: (err) => {
      toast.error(err.message);
    }
  })
  const isInWishlist = (productId: string) => {
    return data?.some(item => item.id === productId)
  }
  const toggelWishlist = (productId: string) => {
    if (isInWishlist(productId)) {
      removeFromWishlist(productId);
    } else {
      addToWishlist(productId);
    }
  }
  return { toggelWishlist, isInWishlist, data }
}

export default useWishlist;
