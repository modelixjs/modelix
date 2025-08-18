import { DefBuilder } from '../builders'

export const resolveDefs = (defs: DefBuilder[]) =>
  defs.map((def) => def.build())
