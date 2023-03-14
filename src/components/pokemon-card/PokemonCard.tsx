import { FC, ReactElement } from 'react'
import cn from 'classnames'

import { Image } from 'components'

import styles from './pokemonCard.module.scss'

interface IPokemonCard {
  name?: string
  sprite?: string
  className?: string
}

const PokemonCard: FC<IPokemonCard> = ({
  className,
  name,
  sprite
}): ReactElement => (
  <div className={cn(className, styles.frame)}>
    <Image src={sprite} className={styles.sprite} withLoader />
    <div className={styles.name}>{name}</div>
  </div>
)

export { PokemonCard }
