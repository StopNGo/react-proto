import { RuleSetRule } from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

import { TLoader } from '../types'

const scssRegex: RegExp = /\.s?[ac]?ss$/
const scssModuleRegex: RegExp = /\.module\.s?[ac]?ss$/

const universalLoader = (isServer: boolean = false): RuleSetRule => ({
  test: scssRegex,
  oneOf: [
    {
      test: scssModuleRegex,
      use: [
        {
          loader: MiniCssExtractPlugin.loader,
          options: {
            emit: !isServer
          }
        },
        {
          loader: 'css-loader',
          options: {
            modules: {
              mode: 'local',
              /*
                This type of naming variant is better for gzip compression -
                https://github.com/webpack-contrib/css-loader/issues/406
              */
              localIdentName: '[folder]__[local]--[hash:base64:5]'
            }
          }
        },
        {
          loader: 'sass-loader'
        }
      ]
    },
    {
      use: [
        {
          loader: MiniCssExtractPlugin.loader,
          options: {
            emit: !isServer
          }
        },
        'css-loader',
        'sass-loader'
      ]
    }
  ]
})

export const scssLoader: TLoader = {
  client: universalLoader(),
  server: universalLoader(true)
}
