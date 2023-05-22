import { FC, ReactElement, ReactNode, useState, useEffect } from 'react'

interface INoSsr {
  fallback?: JSX.Element
  children?: ReactNode | ReactNode[]
}

const NoSsr: FC<INoSsr> = ({ children, fallback }): ReactElement => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  return <>{mounted ? children : fallback}</>
}

export { NoSsr }
