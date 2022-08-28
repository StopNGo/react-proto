import { FC, ReactElement, useEffect } from 'react';
import cn from 'classnames';

import { ErrorBoundary, Offline, ThemeSwitcher } from 'components';
import Router from 'router/Router';

import { useAppSelector, useAppDispatch } from 'store/store';
import { switchToDark } from 'store/theme/themeSlice';
import { THEME_NAMES } from 'constants/commonConstants';

const App: FC = (): ReactElement => {
  const currentTheme = useAppSelector(state => state.theme.theme);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (
      !window.__PRELOADED_STATE__?.theme?.theme
      && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      dispatch(switchToDark());
    }
  }, []);

  return (
    <ErrorBoundary>
      <div className={cn('app-wrapper', currentTheme === THEME_NAMES.DARK && 'theme-dark')}>
        <ThemeSwitcher />
        <Offline />
        <Router />
      </div>
    </ErrorBoundary>
  );
};

export { App };
