import { FC, ReactElement } from 'react'
import loadable from '@loadable/component'

import { Menu, PageMeta, Spinner } from 'components'
import useTranslations from 'i18n/useTranslations'

import styles from './about.module.scss'

// Loadable component or page should not be in index.ts file of components or page folder
const LoadableComponent = loadable(
  async () =>
    await import(
      /* webpackChunkName: "loadable-component" */ 'components/loadable-component/LoadableComponent'
    ),
  {
    resolveComponent: (components) => components.LoadableComponent,
    fallback: <Spinner />
  }
)

const About: FC = (): ReactElement => {
  const { t, tt } = useTranslations()

  return (
    <div className='main about'>
      <PageMeta title={t.notFoundText} />
      <h1>{tt('aboutText')}</h1>
      <Menu />
      <div className={styles.content}>
        <LoadableComponent />
      </div>
    </div>
  )
}

export { About }
