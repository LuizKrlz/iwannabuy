import { useInfiniteQuery } from "@tanstack/react-query";
import { PRODUCT_LIST_QUERY } from "./keys";
import { getProducts } from "./resources";

export function useGetProductsInfinityQuery() {
  return useInfiniteQuery({
    queryKey: [PRODUCT_LIST_QUERY],
    queryFn: getProducts,
    initialPageParam: 0,
    getNextPageParam: (lastPage, _, lastPageParam) => {
      return lastPage.length < 200 ? lastPageParam + 1 : undefined;
    },
  });
}
