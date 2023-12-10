import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import exampleReducer from './example'

const reducers = combineReducers({
  exampleReducer
})

export const store = configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck:false
  })
})
