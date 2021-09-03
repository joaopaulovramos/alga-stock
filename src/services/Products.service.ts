import { ProductCreator } from "../components/App/Products/ProductForm"
import { Product } from "../shared/Table/Table.mockdata"
import http from "../utils/https"

export const getAllProducts = () => {
  return http
  .get<Product[]>('/products')
  .then(resp => resp.data)
}

export const createSingleProduct = (product: ProductCreator) => {
  return http
  .post('/products', product)
  
}

export const updateSingleProduct = ({_id, name, price, stock}: Product) => {
  return http
  .patch(`/products/${_id}`, {
    ...(name && {name}),
    ...(price && {price}),
    ...(stock && {stock}),
  })
} 

export const deleteSingleProduct = (_id: string) => {
  return http
  .delete(`/products/${_id}`)
}