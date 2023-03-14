import { createSlice } from '@reduxjs/toolkit'

import { THEME_NAMES } from 'constants/commonConstants'
export interface ThemeState {
  theme: THEME_NAMES
}

const initialState: ThemeState = {
  theme: THEME_NAMES.LIGHT
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggle (state) {
      if (state.theme === THEME_NAMES.LIGHT) {
        state.theme = THEME_NAMES.DARK
      } else {
        state.theme = THEME_NAMES.LIGHT
      }
    },
    switchToLight (state) {
      state.theme = THEME_NAMES.LIGHT
    },
    switchToDark (state) {
      state.theme = THEME_NAMES.DARK
    }
  }
})

export const { toggle, switchToLight, switchToDark } = themeSlice.actions

export const themeReducer = themeSlice.reducer
