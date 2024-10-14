import { RuleSetRule } from 'webpack'

import { IS_DEV } from '../constants'
import { TLoader } from '../types'

const imageRegex: RegExp = /\.(png|jpg|jpeg|gif)$/

const universalLoader: RuleSetRule = {
  test: imageRegex,
  type: 'asset/resource',
  generator: {
    filename: `images/${IS_DEV ? '[name][ext]' : '[name]-[hash][ext]'}`
  }
}

export const imageLoader: TLoader = {
  client: universalLoader,
  server: universalLoader
}
