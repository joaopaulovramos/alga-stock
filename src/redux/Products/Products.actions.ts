import { ProductCreator } from "../../components/App/Products/ProductForm"
import { Action } from "./Products.reducer"

const insertProduct = 'INSERT_NEW_PRODUCT'
  

export const insertNewProduct = (payload: ProductCreator): Action<ProductCreator> => {
  return {
    type: insertProduct,
    payload
  }
}