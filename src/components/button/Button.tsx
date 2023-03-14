import { FC, ReactElement, ReactNode, MouseEvent, memo } from 'react'
import cn from 'classnames'

import styles from './button.module.scss'

interface IButton {
  className?: string
  disabled?: boolean
  onClick?: (_e: MouseEvent<HTMLButtonElement>) => void
  type?: 'button' | 'submit' | 'reset'
  children?: ReactNode
}

const Button: FC<IButton> = ({
  onClick,
  className,
  disabled = false,
  children,
  type = 'button'
}): ReactElement => (
  <button
    type={type}
    disabled={disabled}
    className={cn(styles.button, className)}
    onClick={onClick}
  >
    {children}
  </button>
)

const memorizedButton: FC<IButton> = memo(Button)

export { memorizedButton as Button }
