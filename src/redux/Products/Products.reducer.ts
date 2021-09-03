import Products from "../../shared/Table/Table.mockdata"

export interface Action<T = any> {
  type: string
  payload?: T
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state:any = Products, action: Action): any {
  switch(action.type){
    case 'INSERT_NEW_PRODUCT':
      return [...state, {
        ...action.payload,
        _id: String(state.length + 1)
      }]

    default:
      return state
  }

}