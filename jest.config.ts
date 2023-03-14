import type { Config } from 'jest'

const config: Config = {
  verbose: true,
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(css|less|scss|sss|styl)$': 'identity-obj-proxy',
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)(\\?.+)?$':
      'identity-obj-proxy',
    '^api(.*)$': '<rootDir>/src/api$1',
    '^assets(.*)$': '<rootDir>/src/assets$1',
    '^components(.*)$': '<rootDir>/src/components$1',
    '^constants/(.*)$': '<rootDir>/src/constants/$1',
    '^i18n(.*)$': '<rootDir>/src/i18n$1',
    '^images(.*)$': '<rootDir>/src/assets/images$1',
    '^hocs(.*)$': '<rootDir>/src/hocs$1',
    '^hooks(.*)$': '<rootDir>/src/hooks$1',
    '^pages(.*)$': '<rootDir>/src/pages$1',
    '^src(.*)$': '<rootDir>/src$1',
    '^style(.*)$': '<rootDir>/src/style$1',
    '^store(.*)$': '<rootDir>/src/store$1',
    '^types(.*)$': '<rootDir>/src/types$1',
    '^utils(.*)$': '<rootDir>/src/utils$1'
  }
}

export default config
