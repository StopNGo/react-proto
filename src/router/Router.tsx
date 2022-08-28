import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import { ROUTE_CONSTANTS } from 'constants/routeConstants';
import {
  About,
  Fetch,
  Home,
  NotFound,
} from 'pages';

const Router: FC = () => (
  <Routes>
    <Route path='*' element={<NotFound />} />
    <Route path={ROUTE_CONSTANTS.HOME} element={<Home />} />
    <Route path={ROUTE_CONSTANTS.FETCH} element={<Fetch />} />
    <Route path={ROUTE_CONSTANTS.ABOUT} element={<About />} />
    <Route path={ROUTE_CONSTANTS.NOT_FOUND} element={<NotFound />} />
  </Routes>
);

export default Router;
