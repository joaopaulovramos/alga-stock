import { Thunk } from ".."
import { ProductCreator } from "../../components/App/Products/ProductForm"
import { 
  createSingleProduct, 
  deleteSingleProduct, 
  getAllProducts, 
  updateSingleProduct } from "../../services/Products.service"
import { Product } from "../../shared/Table/Table.mockdata"

export const fetchProducts = 'FETCH_PRODUCTS'

export const updateProducts = 
  (newProduct: Product): Thunk<Product> =>
    async (dispatch) => {
      await updateSingleProduct(newProduct)
      dispatch(getProducts)
    }

export const getProducts = 
  (): Thunk<Product[]> => 
  async (dispatch) => {
    const products = await getAllProducts()
    dispatch({
      type: fetchProducts,
      payload: products
    })
  }


export const insertNewProduct = 
  (product: ProductCreator): Thunk =>
  async (dispatch) => {
    await createSingleProduct(product)
    dispatch(getProducts())
  }

  export const deleteProduct = 
    (productId: string): Thunk =>
    async(dispatch) => {
      await deleteSingleProduct(productId)
      dispatch(getProducts())
    }