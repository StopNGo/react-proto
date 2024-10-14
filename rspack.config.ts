import { IS_DEV } from './rspack/constants'

import { clientConfig } from './rspack/client.config'
import { serverConfig } from './rspack/server.config'

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
