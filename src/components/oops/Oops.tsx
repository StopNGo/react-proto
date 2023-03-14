import { FC, ReactElement } from 'react'

interface IProps {
  clearState: () => void
}

const Oops: FC<IProps> = (): ReactElement => (
  <>
    <div>Oops</div>
  </>
)

export { Oops }
