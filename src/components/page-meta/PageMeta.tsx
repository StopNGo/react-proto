import { FC, memo } from 'react'
import { Helmet } from 'react-helmet-async'

import useTranslations from 'i18n/useTranslations'

import favicon1 from 'images/favicon.png'
import favicon2 from 'images/favicon.svg?url'

export interface Props {
  title?: string
  description?: string
  image?: string
}

const cutTags = (text = ''): string => text.replace(/<\/?.+?>/gi, '')

const prepareData = ({ title, description, image }: Props): Props => ({
  title: cutTags(title),
  description: cutTags(description).substr(0, 250),
  image
})

const PageMeta: FC<Props> = (props: Props) => {
  const { title, description, image } = prepareData(props)
  const { t } = useTranslations()

  return (
    <Helmet>
      {title != null
        ? (
          <title>
            {title} - {t.appName}
          </title>
          )
        : (
          <title>{t.appName}</title>
          )}
      <link rel='icon' type='image/svg+xml' href={favicon2} />
      <link rel='icon' type='image/png' href={favicon1} />
      <meta property='og:title' content={title} />
      <meta property='twitter:title' content={title} />
      {/*
      Helmet supports only valid head tags, so it is inpossibel even
      to use root tag <></> for inserting several head tags under one condition
      */}
      {description != null && <meta name='description' content={description} />}
      {description != null && (
        <meta property='og:description' content={description} />
      )}
      {description != null && (
        <meta property='twitter:description' content={description} />
      )}
      {image != null && <meta property='og:image' content={image} />}
    </Helmet>
  )
}

const memorizedPageMeta = memo(PageMeta)

export { memorizedPageMeta as PageMeta }
