import { Field } from '../entity'
import type { SchemaDefinition } from 'mongoose'

export const resolveSchemaFields = (fields: Field[]): SchemaDefinition =>
  fields.reduce<SchemaDefinition>(
    (schema, field) => ({
      ...schema,
      [field.getName()]: {
        required: true,
      },
    }),
    {},
  )
