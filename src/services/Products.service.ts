import { Product } from "../shared/Table/Table.mockdata"
import http from "../utils/https"

export const getAllProducts = () => {
  return http
  .get<Product[]>('http://localhost:3024/products')
  .then(resp => resp.data)
}