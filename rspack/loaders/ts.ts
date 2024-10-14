import { RuleSetRule } from '@rspack/core'
import { TLoader } from '../types'

import { IS_DEV } from '../constants'

const tsRegex: RegExp = /\.tsx?$/

const clientLoader: RuleSetRule = {
  test: tsRegex,
  use: {
    loader: 'builtin:swc-loader',
    options: {
      jsc: {
        parser: {
          syntax: 'typescript',
          tsx: true
        },
        transform: {
          react: {
            runtime: 'automatic',
            development: IS_DEV,
            refresh: IS_DEV
          }
        }
      }
    }
  },
  type: 'javascript/auto'
}

const serverLoader: RuleSetRule = structuredClone(clientLoader)
if (typeof serverLoader.use === 'object' && !Array.isArray(serverLoader.use)) {
  const options = serverLoader.use.options

  if (typeof options === 'object' && options !== null) {
    options.jsc.transform.react.refresh = false
  }
}

export const tsLoader: TLoader = {
  client: clientLoader,
  server: serverLoader
}
