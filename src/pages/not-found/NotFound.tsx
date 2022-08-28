import { FC, ReactElement } from 'react';

import { PageMeta } from 'components';
import { NOT_FOUND_TEXT, PAGE_NAMES } from 'constants/commonConstants';

const NotFound: FC = (): ReactElement => (
  <div className='main not-found'>
    <PageMeta title={PAGE_NAMES.PAGE_NOT_FOUND} />
    <h1>{NOT_FOUND_TEXT}</h1>
  </div>
);

export { NotFound };
