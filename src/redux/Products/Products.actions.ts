import { Product } from "../../shared/Table/Table.mockdata"
import { Action } from "./Products.reducer"

const insertProduct = 'INSERT_NEW_PRODUCT'
  

export const insertNewProduct = (): Action<Product> => {
  return {
    type: insertProduct,
    payload: {
      _id: 'aufhaufrrqaer123',
      name: 'hope',
      price: 1500.00,
      stock: 700

    }
  }
}