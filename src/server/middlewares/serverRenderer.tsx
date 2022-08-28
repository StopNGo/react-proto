
import { HelmetProvider, FilledContext } from 'react-helmet-async';
import { renderToPipeableStream, renderToString } from 'react-dom/server';
import { Request, Response, RequestHandler } from 'express';
import { StaticRouter } from 'react-router-dom/server';
import { ChunkExtractor } from '@loadable/server';
import { getDataFromTree } from '@apollo/react-ssr';

import { initStore, RootState } from 'store/store';
import { Provider } from 'react-redux';

import { App } from 'src/App';
import { ROUTE_CONSTANTS } from 'constants/routeConstants';
import { getHtmlTemplate } from 'server/template';
import { IS_RENDER_TO_STREAM } from 'server/constants';

const serverRenderer = (chunkExtractor: ChunkExtractor):
RequestHandler => async (req: Request, res: Response) => {
  const isPageAvailable = (Object.values(ROUTE_CONSTANTS) as string[]).includes(
    req.path,
  );

  if (!isPageAvailable) {
    req.url = ROUTE_CONSTANTS.NOT_FOUND;
  }

  const location: string = req.url;

  const preloadState: Partial<RootState> = { counter: { value: 42 } };
  const store = initStore(preloadState);

  const helmetContext = {};

  const jsx = (
    <Provider store={store}>
      <HelmetProvider context={helmetContext}>
        <StaticRouter location={location}>
          <App />
        </StaticRouter>
      </HelmetProvider>
    </Provider>
  );

  const pageIsAvailable = (Object.values(ROUTE_CONSTANTS) as string[]).includes(
    req.path,
  );

  if (IS_RENDER_TO_STREAM) {
    await getDataFromTree(jsx);

    const { helmet } = helmetContext as FilledContext;

    const { header, footer } = getHtmlTemplate(
      {
        preloadState,
        helmetData: helmet,
        scriptTags: chunkExtractor.getScriptTags({ nonce: res.locals.cspNonce }),
        styleTags: chunkExtractor.getStyleTags(),
        nonce: res.locals.cspNonce,
      });

    res.status(pageIsAvailable ? 200 : 404);
    res.write(header);
    let didError = false;
    const stream = renderToPipeableStream(
      jsx,
      {
        onShellReady() {
          res.statusCode = didError ? 500 : 200;
          stream.pipe(res);
        },
        onAllReady() {
          res.end(footer);
        },
        onError(err) {
          didError = true;
          console.error(err);
        },
      },
    );
  } else {
    const reactHtml = renderToString(jsx);
    const { helmet } = helmetContext as FilledContext;

    const { header, footer } = getHtmlTemplate(
      {
        preloadState,
        helmetData: helmet,
        scriptTags: chunkExtractor.getScriptTags(),
        styleTags: chunkExtractor.getStyleTags(),
        nonce: res.locals.cspNonce,
      });

    res
      .status(pageIsAvailable ? 200 : 404)
      .send(header + reactHtml + footer);
  }
};

export { serverRenderer };
