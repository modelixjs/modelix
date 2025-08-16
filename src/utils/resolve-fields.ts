import { forOf } from './for-of'
import { FieldBuilder } from '../lib'

const resolveField = (field: FieldBuilder) => field.build()

export const resolveFields = (fields: FieldBuilder[]) =>
  forOf(fields, resolveField)
