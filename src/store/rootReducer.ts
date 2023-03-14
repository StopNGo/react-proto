import { combineReducers, Reducer } from '@reduxjs/toolkit'
import { counterReducer } from './counter/counterSlice'
import { themeReducer } from './theme/themeSlice'
import { i18nReducer } from 'i18n/i18nSlice'
import { pokemonApi } from 'api'

export const rootReducer = {
  theme: themeReducer,
  counter: counterReducer,
  i18n: i18nReducer,
  [pokemonApi.reducerPath]: pokemonApi.reducer
}

export function createReducer (): Reducer {
  return combineReducers(rootReducer)
}
