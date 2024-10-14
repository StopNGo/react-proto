import { RuleSetRule } from '@rspack/core'

import { IS_DEV } from '../constants'
import { TLoader } from '../types'

const svgRegex: RegExp = /\.svg$/i

const universalLoader: RuleSetRule = {
  test: svgRegex,
  type: 'asset/inline',
  resourceQuery: /base64/,
  generator: {
    filename: `images/${IS_DEV ? '[name][ext]' : '[name]-[hash][ext]'}`
  }
}

export const svgLoader: TLoader = {
  client: universalLoader,
  server: universalLoader
}
