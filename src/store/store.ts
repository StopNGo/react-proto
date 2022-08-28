import { configureStore, Action, StateFromReducersMapObject } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { ThunkAction } from 'redux-thunk';

import { rootReducer } from './rootReducer';
import { pokemonApi } from 'api';

const initStore = (preloadedState?: Partial<RootState>) => configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
  preloadedState,
  devTools: String(process.env.NODE_ENV).trim() !== 'production',
});

export type Store = ReturnType<typeof initStore>;
export type RootState = StateFromReducersMapObject<typeof rootReducer>;
export type AppDispatch = Store['dispatch'];
export type AppThunk = ThunkAction<void, RootState, unknown, Action>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export { initStore };
