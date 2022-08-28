import { FC, useEffect, useState, ReactElement } from 'react';

import { useAppSelector, useAppDispatch } from 'store/store';
import { increment } from 'store/counter/counterSlice';

import { Button, Counter, Menu, PageMeta } from 'components';
import { COUNTER_DESCRIPTION, HOME_TEXT, PAGE_NAMES, BUTTON_TEXT } from 'constants/commonConstants';

import styles from './home.module.scss';

const Home: FC = (): ReactElement => {
  const globalCount = useAppSelector(state => state.counter.value);
  const dispatch = useAppDispatch();

  const [localCount, setCount] = useState(0);

  useEffect(() => {
    /* Uncomment to test Error Boundary
    throw new Error('💥 KABOOM 💥');
    */
  }, []);

  return (
    <div className='main home'>
      <PageMeta title={PAGE_NAMES.HOME} />
      <h1>{HOME_TEXT}</h1>
      <Menu />
      <div className={styles.counters}>
        <Counter value={localCount} description={COUNTER_DESCRIPTION.LOCAL} />
        <Counter value={globalCount} description={COUNTER_DESCRIPTION.GLOBAL} />
      </div>
      <Button className='center' onClick={
        () => {
          setCount(prevState => prevState + 1);
          dispatch(increment());
        }
      }>{BUTTON_TEXT}</Button>
    </div>
  );
};

export { Home };
