import contentSecurityPolicy from 'helmet-csp';
import { randomUUID } from 'crypto';
import { Response, Request, NextFunction } from 'express';

import { ROUTE_CONSTANTS } from 'constants/routeConstants';
import { IS_DEV } from '_webpack/constants';

const routes = Object.values(ROUTE_CONSTANTS);

const checkPage = (url: string) =>
  (routes.some(route => url.includes(route) && !url.includes('.') && route !== '/')) || url === '/';

const nonce = (req: Request, res: Response, next: NextFunction): void => {
  if (checkPage(req.url)) {
    res.locals.cspNonce = Buffer.from(randomUUID()).toString('base64');
  }

  next();
};

const csp = (req: Request, res: Response, next: NextFunction): void => {
  let middleware;

  if (checkPage(req.url)) {
    middleware
    = contentSecurityPolicy({
        useDefaults: true,
        directives: {
          defaultSrc: ['\'self\'', 'pokeapi.co'],
          imgSrc: ['\'self\'', 'raw.githubusercontent.com'],
          scriptSrc: [
            '\'self\'',
            `'nonce-${(<Response>res).locals.cspNonce}'`,
            IS_DEV ? '\'unsafe-eval\'' : '',
          ],
        },
      });
  }

  if (middleware) {
    middleware(req, res, next);
  }

  next();
};

export { nonce, csp };
