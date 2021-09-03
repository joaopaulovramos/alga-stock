export interface Action<T = any> {
  type: string
  payload?: T
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state:any = [], action: Action): any {
  switch(action.type){
    case 'INSERT_NEW_PRODUCT':
      return [...state, action.payload]

    default:
      return state
  }

}