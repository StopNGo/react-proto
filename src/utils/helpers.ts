import { ROUTE_CONSTANTS } from 'constants/routeConstants'

export const isServer: boolean = !(typeof window !== 'undefined')

export const checkPage = (url: string): boolean =>
  Object.values(ROUTE_CONSTANTS).some(
    (route) => url.includes(route) && !url.includes('.') && route !== '/'
  ) || url === '/'
