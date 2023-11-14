

import { createStore, combineReducers } from "redux"
import { productReducer } from "./reducers/product.reducer"
import { countReducer } from "./reducers/count.reducer"
import {cartReducer} from "./reducers/cart.reducer"

const RootReducer = combineReducers({
    productStore: productReducer,
    countStore: countReducer,
    cartStore: cartReducer,
})

export const store = createStore(RootReducer)