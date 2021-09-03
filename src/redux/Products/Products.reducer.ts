import { Action } from ".."
import Products, { Product } from "../../shared/Table/Table.mockdata"
import { fetchProducts, insertProduct } from "./Products.actions"



// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = Products, action: Action): Product[] {
  switch(action.type){
    case fetchProducts:
      return [...action.payload]
    case insertProduct:
      return [...state, {
        ...action.payload,
        _id: String(state.length + 1)
      }]

    default:
      return state
  }

}