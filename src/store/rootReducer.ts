import { combineReducers, UnknownAction } from '@reduxjs/toolkit'

import { counterReducer } from './counter/counterSlice'
import { themeReducer } from './theme/themeSlice'
import { i18nReducer } from 'i18n/i18nSlice'
import { pokemonApi } from 'api'

import { reduxHydrationAction } from 'constants/commonConstants'

export const rootReducer = {
  theme: themeReducer,
  counter: counterReducer,
  i18n: i18nReducer,
  [pokemonApi.reducerPath]: pokemonApi.reducer
}

export const appReducer = combineReducers(rootReducer)

export const mainReducer: any = (
  state: ReturnType<typeof appReducer>,
  action: UnknownAction
) => {
  /*
    Global action for whole state hydration.
  */
  if (action?.type === reduxHydrationAction) {
    const nextState = {
      ...state,
      ...(action.payload as object)
    }
    return nextState
  }

  return appReducer(state, action)
}
