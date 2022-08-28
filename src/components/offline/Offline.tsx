
import { FC, ReactElement } from 'react';
import cn from 'classnames';

import { useOnlineStatus } from 'hooks';
import { OFFLINE_TEXT } from 'constants/commonConstants';

import styles from './offline.module.scss';

interface IOffline {
  className?: string;
}

const Offline: FC<IOffline> = ({ className }): ReactElement => {
  const isAppOnline = useOnlineStatus();

  return (
    <div className={cn(className, styles.offline, (isAppOnline ? styles.hide : styles.show))}>
      {OFFLINE_TEXT}
    </div>
  );
};

export { Offline };
