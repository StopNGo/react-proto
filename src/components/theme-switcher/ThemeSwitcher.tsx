import { FC, ReactElement } from 'react'
import cn from 'classnames'

import { useAppSelector, useAppDispatch } from 'store/store'
import { toggle as toggleTheme } from 'store/theme/themeSlice'
import useTranslations from 'i18n/useTranslations'

import { Switcher } from 'components'
import { THEME_NAMES } from 'constants/commonConstants'
import MoonIcon from 'images/moon.svg'
import SunIcon from 'images/sun.svg'

import styles from './themeSwitcher.module.scss'

interface IThemeSwitcher {
  className?: string
}

const ThemeSwitcher: FC<IThemeSwitcher> = ({ className }): ReactElement => {
  const currentTheme = useAppSelector((state) => state.theme.theme)
  const dispatch = useAppDispatch()
  const { t } = useTranslations()

  const onChangeHandler = (): void => {
    dispatch(toggleTheme())
  }

  return (
    <>
      <Switcher
        className={cn(styles['theme-switcher'], className)}
        onChangeHandler={onChangeHandler}
        isOn={currentTheme === THEME_NAMES.LIGHT && true}
        description={t.themeSwitcherDescription}
        leftIcon={<MoonIcon />}
        rightIcon={<SunIcon />}
      />
    </>
  )
}

export { ThemeSwitcher }
