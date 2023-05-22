import { FC, ReactElement, useEffect, useState, ChangeEvent } from 'react'
import cn from 'classnames'

import styles from './dropdownSelector.module.scss'
interface IDropdownSelector {
  options: string[]
  value: string
  onChange: (selectedOption: string) => void
  className?: string
}

const DropdownSelector: FC<IDropdownSelector> = ({
  options,
  value,
  onChange,
  className
}): ReactElement => {
  const [selectedOption, setSelectedOption] = useState<string>(value)

  const handleOptionChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    const newOption = event.target.value
    setSelectedOption(newOption)
    onChange(newOption)
  }

  useEffect(() => {
    if (value !== selectedOption) {
      setSelectedOption(value)
    }
  }, [value])

  return (
    <select
      className={cn(styles.selector, className)}
      value={selectedOption}
      onChange={handleOptionChange}
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  )
}

export { DropdownSelector }
