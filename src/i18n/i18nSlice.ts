import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'

import { RootState } from 'store/store'
import {
  defaultLang,
  supportedLangs,
  TSupportedLanguages,
  preloadedTranslations,
  TTranslations
} from 'i18n/i18nConfig'
import { fetchTranslations } from './i18nApi'

export interface i18nState {
  status: 'loading' | 'idle'
  lang: keyof TSupportedLanguages
  supportedLangs: TSupportedLanguages
  translations: Partial<Record<keyof TSupportedLanguages, TTranslations>>
}

export const initialState: i18nState = {
  status: 'idle',
  lang: defaultLang,
  supportedLangs: { ...supportedLangs },
  translations: preloadedTranslations
}

export const setLangAsync = createAsyncThunk(
  'i18n/setLangAsync',
  async (lang: keyof TSupportedLanguages, { getState, dispatch }) => {
    const i18nState = (getState() as RootState).i18n
    let translations
    const resolvedLang: keyof TSupportedLanguages =
      lang != null ? lang : i18nState.lang
    if (i18nState.translations[lang] == null) {
      translations = await fetchTranslations(resolvedLang)
    } else {
      translations = i18nState.translations[lang]
    }
    dispatch(i18nSlice.actions.setLang(resolvedLang))
    return translations as TTranslations
  }
)

export const i18nSlice = createSlice({
  name: 'i18n',
  initialState,
  reducers: {
    setLang: (state, action: PayloadAction<keyof TSupportedLanguages>) => {
      state.lang = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(setLangAsync.pending, (state) => {
      state.status = 'loading'
    })
    builder.addCase(setLangAsync.fulfilled, (state, action) => {
      state.translations[state.lang] = action.payload
      state.status = 'idle'
    })
  }
})

export const { setLang } = i18nSlice.actions

export const i18nReducer = i18nSlice.reducer
