
import { FC, ReactElement } from 'react';
import cn from 'classnames';

import { LOADABLE_TEXT } from 'constants/commonConstants';

import styles from './loadableComponent.module.scss';

interface ILoadableComponent {
  className?: string;
}

const LoadableComponent: FC<ILoadableComponent> = ({ className }): ReactElement => (
  <div className={cn(className, styles.loadable)}>
    {LOADABLE_TEXT}
  </div>
);

export { LoadableComponent };
