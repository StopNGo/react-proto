
import { FC, ReactElement } from 'react';
import cn from 'classnames';

import styles from './pokemonCard.module.scss';

interface IPokemonCard {
  name?: string;
  sprite?: string;
  className?: string;
}

const PokemonCard: FC<IPokemonCard> = ({ className, name, sprite }): ReactElement => (
  <div className={cn(className, styles.frame)}>
    <img src={sprite} className={styles.sprite} />
    <div className={styles.name}>{name}</div>
  </div>
);

export { PokemonCard };
