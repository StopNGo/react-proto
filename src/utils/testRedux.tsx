import { PropsWithChildren, ReactElement } from 'react'
import { render } from '@testing-library/react'
import type { RenderOptions } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

import type { Store, RootState } from 'store/store'
// As a basic setup, import your same slice reducers
import { rootReducer } from 'store/rootReducer'

// This type interface extends the default options for render from RTL, as well
// as allows the user to specify other things such as initialState, store.
interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: Partial<RootState>
  store?: Store
}

export function renderWithProviders (
  ui: ReactElement,
  {
    preloadedState = {},

    // Automatically create a store instance if no store was passed in
    store = configureStore({ reducer: rootReducer, preloadedState }),
    ...renderOptions
  }: ExtendedRenderOptions = {}
): ExtendedRenderOptions {
  function Wrapper ({ children }: PropsWithChildren<{}>): ReactElement {
    return <Provider store={store}>{children}</Provider>
  }

  // Return an object with the store and all of RTL's query functions
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}
