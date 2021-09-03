import { ProductCreator } from "../../components/App/Products/ProductForm"
import { getAllProducts } from "../../services/Products.service"
import { Action } from "./Products.reducer"

const insertProduct = 'INSERT_NEW_PRODUCT'
 
export const getProducts = () => async (dispatch: any)=> {
  const products = await getAllProducts()
  dispatch({
    type: 'FETCH_PRODUCTS',
    payload: products
  })
}


export const insertNewProduct = (payload: ProductCreator): Action<ProductCreator> => {
  return {
    type: insertProduct,
    payload
  }
}