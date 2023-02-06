import { FC, ReactElement } from 'react';
import loadable from '@loadable/component';

import { Menu, PageMeta, Spinner } from 'components';
import { ABOUT_TEXT, PAGE_NAMES } from 'constants/commonConstants';

import styles from './about.module.scss';

// Loadable component or page should not be in index.ts file of components or page folder
const LoadableComponent = loadable(() =>
  import(/* webpackChunkName: "loadable-component" */ 'components/loadable-component/LoadableComponent'), {
  resolveComponent: components => components.LoadableComponent,
  fallback: <Spinner />,
});

const About: FC = (): ReactElement => (
  <div className='main about'>
    <PageMeta title={PAGE_NAMES.ABOUT} />
    <h1>{ABOUT_TEXT}</h1>
    <Menu />
    <div className={styles.content}>
      <LoadableComponent />
    </div>

  </div>
);

export { About };
