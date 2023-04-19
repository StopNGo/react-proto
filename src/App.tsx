import { FC, ReactElement, useEffect } from 'react'
import { useRoutes } from 'react-router-dom'
import cn from 'classnames'

import {
  ThemeSwitcher,
  LanguageSelector,
  ErrorBoundary,
  Offline
} from 'components'
import { routes } from 'router/Router'

import { useAppSelector, useAppDispatch } from 'store/store'
import { switchToDark } from 'store/theme/themeSlice'
import { THEME_NAMES } from 'constants/commonConstants'

const App: FC = (): ReactElement => {
  const content = useRoutes(routes)
  const currentTheme = useAppSelector((state) => state.theme.theme)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (
      window.__PRELOADED_STATE__?.theme?.theme == null &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      dispatch(switchToDark())
    }
  }, [])

  return (
    <ErrorBoundary>
      <div
        className={cn(
          'app-wrapper',
          currentTheme === THEME_NAMES.DARK && 'theme-dark'
        )}
      >
        <LanguageSelector />
        <ThemeSwitcher />
        <Offline />
        {content}
      </div>
    </ErrorBoundary>
  )
}

export { App }
