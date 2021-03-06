import { 
  createStore, 
  combineReducers, 
  compose, 
  applyMiddleware } from "redux"
import Products from './Products/Products.reducer'
import thunk, { ThunkAction } from "redux-thunk"

const reducers = combineReducers(
  {
    products: Products
  }
)

export interface Action<T = any> {
  type: string
  payload?: T
}

export type RootState = ReturnType<typeof reducers>
export type ThunkDispatch = (thunk: Thunk) => Promise<Thunk>

export type Thunk<T = any> = 
  ThunkAction<void, RootState, unknown, Action<T>>

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
    //@ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
  ),
  
  )

export default store
