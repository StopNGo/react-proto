import { FC, ReactElement, ChangeEvent } from 'react'
import cn from 'classnames'

import styles from './switcher.module.scss'

interface ISwitcher {
  className?: string
  disabled?: boolean
  onChangeHandler?: (_e: ChangeEvent<HTMLInputElement>) => void
  isOn?: boolean
  description?: string
  leftIcon?: ReactElement
  rightIcon?: ReactElement
}

const Switcher: FC<ISwitcher> = ({
  onChangeHandler,
  className,
  disabled = false,
  isOn = false,
  description,
  leftIcon,
  rightIcon
}): ReactElement => (
  <div className={cn(styles.switcher, className, isOn && styles.checked)}>
    <label aria-label={description}>
      <input
        type='checkbox'
        disabled={disabled}
        {...(onChangeHandler != null && {
          onChange: onChangeHandler,
          checked: isOn
        })}
      />
      {(leftIcon != null || rightIcon != null) && (
        <span className={styles.icons}>
          {leftIcon}
          {rightIcon}
        </span>
      )}
      <span className={styles.slider} />
    </label>
  </div>
)

export { Switcher }
