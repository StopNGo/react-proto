import { RuleSetRule } from 'webpack'

import { IS_SWC } from '../constants'
import { TLoader } from '../types'

const tsRegex: RegExp = /\.tsx?$/

const universalLoader: RuleSetRule = {
  test: tsRegex,
  use: [
    IS_SWC
      ? {
          loader: 'swc-loader'
        }
      : {
          loader: 'ts-loader',
          options: {
            transpileOnly: true
          }
        }
  ]
}

export const tsLoader: TLoader = {
  client: universalLoader,
  server: universalLoader
}
