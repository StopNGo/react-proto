import { RuleSetRule } from 'webpack'

import { IS_DEV } from '../constants'
import { TLoader } from '../types'

const svgRegex: RegExp = /\.svg$/

const universalLoader: RuleSetRule = {
  test: svgRegex,
  oneOf: [
    {
      type: 'asset/resource',
      resourceQuery: /url/
    },
    {
      type: 'asset/inline',
      resourceQuery: /base64/
    },
    {
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack']
    }
  ],
  generator: {
    filename: `images/${IS_DEV ? '[name][ext]' : '[name]-[hash][ext]'}`
  }
}

export const svgLoader: TLoader = {
  client: universalLoader,
  server: universalLoader
}
