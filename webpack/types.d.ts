import { RuleSetRule } from 'webpack/types'

export type TLoader = Record<'client' | 'server', RuleSetRule>
