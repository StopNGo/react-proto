import { RouteObject } from 'react-router-dom'

import { ROUTE_CONSTANTS } from 'constants/routeConstants'
import { About, Fetch, Home, NotFound } from 'pages'

const routes: RouteObject[] = [
  {
    path: '*',
    element: <NotFound />
  },
  {
    path: ROUTE_CONSTANTS.HOME,
    element: <Home />
  },
  {
    path: ROUTE_CONSTANTS.FETCH,
    element: <Fetch />
  },
  {
    path: ROUTE_CONSTANTS.ABOUT,
    element: <About />
  },
  {
    path: ROUTE_CONSTANTS.NOT_FOUND,
    element: <NotFound />
  },
  {
    path: 'sw.js',
    loader: async () => {
      return await fetch('sw.js')
    }
  }
]

export { routes }
