import { DEV_SERVER_PORT, IS_DEV } from '_webpack/constants'

export const SERVER_PORT: number = IS_DEV ? DEV_SERVER_PORT : 3000

export const IS_RENDER_TO_STREAM: boolean = true
