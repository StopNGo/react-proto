import { FC, ReactElement } from 'react'

import { PageMeta } from 'components'
import useTranslations from 'i18n/useTranslations'

const NotFound: FC = (): ReactElement => {
  const { t } = useTranslations()

  return (
    <div className='main not-found'>
      <PageMeta title={t.pageNames.pageNotFound} />
      <h1>{t.notFoundText}</h1>
    </div>
  )
}

export { NotFound }
