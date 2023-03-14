import { FC, ReactElement, useState, ChangeEvent } from 'react'
import cn from 'classnames'

import styles from './dropdownSelector.module.scss'
interface IDropdownSelector {
  options: string[]
  onChange: (selectedOption: string) => void
  defaultOption: string
  className?: string
}

const DropdownSelector: FC<IDropdownSelector> = ({
  options,
  onChange,
  defaultOption,
  className
}): ReactElement => {
  const [selectedOption, setSelectedOption] = useState<string>(defaultOption)

  const handleOptionChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    const newOption = event.target.value
    setSelectedOption(newOption)
    onChange(newOption)
  }

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
