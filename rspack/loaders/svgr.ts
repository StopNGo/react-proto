import { RuleSetRule } from '@rspack/core'

import { IS_DEV } from '../constants'
import { TLoader } from '../types'

const svgRegex: RegExp = /\.svg$/

const universalLoader: RuleSetRule = {
  test: svgRegex,
  issuer: /\.[jt]sx?$/,
  use: ['@svgr/webpack'],
  resourceQuery: { not: [/url/, /base64/] },
  generator: {
    filename: `images/${IS_DEV ? '[name][ext]' : '[name]-[hash][ext]'}`
  }
}

export const svgrLoader: TLoader = {
  client: universalLoader,
  server: universalLoader
}
