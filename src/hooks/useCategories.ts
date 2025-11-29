import { useQuery } from "@tanstack/react-query"

import { getAllCategories } from "@services/categoryService"

const useCategories = () => {
  const { data } = useQuery({
    queryKey: ['categories'],
    queryFn: getAllCategories,
    staleTime: 5 * 60 * 1000,
    select: (data) => data.data
  })
  return { data }
}

export default useCategories;
