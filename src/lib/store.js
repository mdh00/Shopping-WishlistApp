import { configureStore } from '@reduxjs/toolkit'
import itemReducer from "./features/shopping-items/itemSlice"

export const makeStore = () => {
  return configureStore({
    reducer: {
        items: itemReducer, 
    }
  })
}
