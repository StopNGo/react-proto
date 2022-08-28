import { FC, ReactElement } from 'react';
import cn from 'classnames';

import { useAppSelector, useAppDispatch } from 'store/store';
import { toggle as toggleTheme } from 'store/theme/themeSlice';

import { Switcher } from 'components';
import { THEME_NAMES, THEME_SWITCHER_DESCRIPTION } from 'constants/commonConstants';
import MoonIcon from 'images/moon.svg';
import SunIcon from 'images/sun.svg';

import styles from './themeSwitcher.module.scss';

interface IThemeSwitcher {
  className?: string;
}

const ThemeSwitcher: FC<IThemeSwitcher> = ({ className }): ReactElement => {
  const currentTheme = useAppSelector(state => state.theme.theme);
  const dispatch = useAppDispatch();

  const onChangeHandler = () => {
    dispatch(toggleTheme());
  };

  return (
    <>
      <Switcher
        className={cn(styles['theme-switcher'], className)}
        onChangeHandler={onChangeHandler}
        isOn={currentTheme === THEME_NAMES.LIGHT && true}
        description={THEME_SWITCHER_DESCRIPTION}
        leftIcon={<MoonIcon />}
        rightIcon={<SunIcon />}
      />
    </>
  );
};

export { ThemeSwitcher };
