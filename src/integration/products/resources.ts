import { api } from "../../lib/api";
import { TProduct } from "./types";

export function getProducts({ pageParam: offset }: { pageParam: number }) {
  return api
    .get<TProduct[]>("/v1/products", {
      params: {
        offset,
        limit: 10,
      },
    })
    .then((res) => res.data);
}
