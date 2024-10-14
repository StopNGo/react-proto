import { RuleSetRule } from 'webpack'

export type TLoader = Record<'client' | 'server', RuleSetRule>
