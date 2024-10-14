import { IS_DEV } from './webpack/constants'

import { clientConfig } from './webpack/client.config'
import { serverConfig } from './webpack/server.config'

const configs = []

if (process.env.NO_SSR === 'true') {
  configs.push(clientConfig)
} else {
  configs.push(serverConfig)

  if (!IS_DEV) {
    configs.push(clientConfig)
  }
}

module.exports = configs
