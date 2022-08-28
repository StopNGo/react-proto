import { combineReducers } from '@reduxjs/toolkit';
import { counterReducer } from './counter/counterSlice';
import { themeReducer } from './theme/themeSlice';
import { pokemonApi } from 'api';

export const rootReducer = {
  theme: themeReducer,
  counter: counterReducer,
  [pokemonApi.reducerPath]: pokemonApi.reducer,
};

export function createReducer() {
  return combineReducers(rootReducer);
}

