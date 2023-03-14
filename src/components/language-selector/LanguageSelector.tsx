import { FC, ReactElement } from 'react'
import cn from 'classnames'

import useTranslations from 'i18n/useTranslations'

import { DropdownSelector } from 'components/dropdown-selector/DropdownSelector'

import styles from './languageSelector.module.scss'

interface ILanguageSelector {
  className?: string
}

const LanguageSelector: FC<ILanguageSelector> = ({
  className
}): ReactElement => {
  const { lang, supportedLangs, setLang } = useTranslations()

  return (
    <DropdownSelector
      className={cn(styles['language-selector'], className)}
      options={Object.values(supportedLangs)}
      defaultOption={supportedLangs[lang]}
      onChange={(newLang) => setLang(newLang as keyof typeof supportedLangs)}
    />
  )
}

export { LanguageSelector }
