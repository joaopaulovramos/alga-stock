import { Action } from ".."
import { Product } from "../../shared/Table/Table.mockdata"
import { fetchProducts } from "./Products.actions"



// eslint-disable-next-line import/no-anonymous-default-export
export default function (state: Product[] = [], action: Action): Product[] {
  switch(action.type){
    case fetchProducts:
      return [...action.payload]
    default:
      return state
  }

}