import { FC, ReactElement } from 'react';

import { Menu, PageMeta } from 'components';
import { ABOUT_TEXT, PAGE_NAMES } from 'constants/commonConstants';

const About: FC = (): ReactElement => (
  <div className='main about'>
    <PageMeta title={PAGE_NAMES.ABOUT} />
    <h1>{ABOUT_TEXT}</h1>
    <Menu />
  </div>
);

export { About };
