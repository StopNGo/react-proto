import webpack from 'webpack'
import { RequestHandler } from 'express'
import devMiddleware from 'webpack-dev-middleware'
import hotMiddleware from 'webpack-hot-middleware'

import { clientConfig as config } from '_webpack/client.config'

const compiler = webpack({ ...config, mode: 'development' })

export const devMiddlewareInstance = devMiddleware(compiler, {
  serverSideRender: true,
  writeToDisk: true,
  publicPath:
    config.output?.publicPath != null ? String(config.output.publicPath) : '/'
})

export function hotReload (): RequestHandler[] {
  return [devMiddlewareInstance, hotMiddleware(compiler)]
}

export default hotReload
