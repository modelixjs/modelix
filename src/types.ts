import { DefBuilder } from './builders'

export type Setup = (builder: typeof DefBuilder) => DefBuilder[]
