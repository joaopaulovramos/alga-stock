import { Action, Thunk } from ".."
import { ProductCreator } from "../../components/App/Products/ProductForm"
import { getAllProducts } from "../../services/Products.service"
import { Product } from "../../shared/Table/Table.mockdata"

export const insertProduct = 'INSERT_NEW_PRODUCT'
export const fetchProducts = 'FETCH_PRODUCTS'

export const getProducts = 
  (): Thunk<Product[]> => 
  async (dispatch) => {
    const products = await getAllProducts()
    dispatch({
      type: fetchProducts,
      payload: products
    })
  }


export const insertNewProduct = (payload: ProductCreator): Action<ProductCreator> => {
  return {
    type: insertProduct,
    payload
  }
}