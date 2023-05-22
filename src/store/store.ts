import {
  configureStore,
  Action,
  StateFromReducersMapObject,
  Dispatch,
  AnyAction,
  EnhancedStore,
  ThunkDispatch
} from '@reduxjs/toolkit'

import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import { ThunkAction } from 'redux-thunk'

import { rootReducer, mainReducer } from './rootReducer'
import { pokemonApi } from 'api'
import { persistStateToLocalStorage } from './middlewares'
import { isServer } from 'utils'

const middlewares = [
  ...(!isServer ? [persistStateToLocalStorage(['counter', 'pokemonApi'])] : []),
  pokemonApi.middleware
]

const initStore = (preloadedState?: Partial<RootState>): EnhancedStore =>
  configureStore({
    reducer: mainReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(middlewares),
    preloadedState,
    devTools: String(process.env.NODE_ENV).trim() !== 'production'
  })

export type Store = ReturnType<typeof initStore>
export type RootState = StateFromReducersMapObject<typeof rootReducer>
export type AppDispatch = Store['dispatch']
export type AppThunk = ThunkAction<void, RootState, unknown, Action>

export const useAppDispatch = (): Dispatch<AnyAction> &
ThunkDispatch<RootState, undefined, AnyAction> => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export { initStore }
