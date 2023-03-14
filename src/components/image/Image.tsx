import { FC, ReactElement, useState } from 'react'
import cn from 'classnames'

import { WithSpinner } from 'hocs'

interface IImage {
  src?: string
  alt?: string
  height?: string
  width?: string
  loading?: 'eager' | 'lazy'
  withLoader?: boolean
  className?: string
}

const Image: FC<IImage> = ({
  src,
  alt,
  width,
  height,
  loading = 'lazy',
  withLoader = false,
  className
}): ReactElement => {
  const [isLoading, setIsLoading] = useState(true)

  const imgJSX = (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={cn(className)}
      loading={loading}
      onLoad={() => {
        setIsLoading(false)
      }}
    />
  )

  if (withLoader) {
    return (
      <WithSpinner isSpinnerShown={isLoading} isShadowLoading>
        {imgJSX}
      </WithSpinner>
    )
  }

  return <>{imgJSX}</>
}

export { Image }
