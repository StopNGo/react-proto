import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { loadableReady } from '@loadable/component'

import { App } from './App'

import { initStore } from 'store/store'
import { Provider } from 'react-redux'
import { USE_SERVICE_WORKER } from 'constants/commonConstants'

import { isServer } from 'utils'

import 'style/main.scss'

const store = initStore(
  !isServer && window.__PRELOADED_STATE__ != null
    ? window.__PRELOADED_STATE__
    : undefined
)

if (module.hot != null) {
  module.hot.accept(['store/store', 'store/rootReducer'], () => async () => {
    const { createReducer } = await import('store/rootReducer')
    store.replaceReducer(createReducer())
  })
}

if (
  USE_SERVICE_WORKER &&
  String(process.env.NODE_ENV).trim() !== 'development'
) {
  const startServiceWorkerPromise = async (): Promise<void> => {
    const { startServiceWorker } = await import('./serviceWorker')
    startServiceWorker()
  }

  startServiceWorkerPromise().then(
    () => {}
  ).catch(er => console.log(er))
}

const indexJSX = (
  <StrictMode>
    <Provider store={store}>
      <HelmetProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </HelmetProvider>
    </Provider>
  </StrictMode>
)

const container = document.getElementById('root')
if (container == null) throw new Error('Failed to find the root element')

if (NO_SSR) {
  createRoot(container).render(indexJSX)
} else {
  loadableReady(() => {
    hydrateRoot(container, indexJSX)
  }).then(
    () => {}
  ).catch(er => console.log(er))
}
