import { FC, ReactElement } from 'react'
import cn from 'classnames'

import useTranslations from 'i18n/useTranslations'

import styles from './loadableComponent.module.scss'

interface ILoadableComponent {
  className?: string
}

const LoadableComponent: FC<ILoadableComponent> = ({
  className
}): ReactElement => {
  const { t } = useTranslations()

  return <div className={cn(className, styles.loadable)}>{t.loadableText}</div>
}

export { LoadableComponent }
