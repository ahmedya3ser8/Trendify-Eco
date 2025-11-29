import { useMutation, useQuery } from "@tanstack/react-query";

import { getAllProducts } from "@services/productService";
import { useEffect, useState } from "react";
import type { IProduct } from "@models/iproduct";

const useProducts = (limit: number, catId?: string) => {
  const [productsList, setProductsList] = useState<IProduct[]>([]);
  const [activeTab, setActiveTab] = useState('');
  const { data } = useQuery({
    queryKey: ['products'],
    queryFn: () => getAllProducts(limit, catId),
    staleTime: 5 * 60 * 1000,
    select: (data) => data.data
  })
  const { mutate } = useMutation({
    mutationFn: ({ limit, catId }: { limit: number, catId?: string }) => getAllProducts(limit, catId),
    onSuccess: (res) => {
      setProductsList(res.data);
    },
    onError: (err) => {
      console.log(err);
    }
  })
  const selectedTab = (catId?: string) => {
    if (catId) {
      setActiveTab(catId);
      mutate({ limit: limit, catId });
    } else {
      setActiveTab('');
      mutate({ limit: limit });
    }
  }
  useEffect(() => {
    mutate({ limit: limit })
  }, [mutate, limit])
  return { data, productsList, selectedTab, activeTab }
}

export default useProducts;
