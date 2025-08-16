import { FieldBuilder, SchemaBuilder } from './lib'
import type { SchemaDefinitionType } from 'mongoose'

export type Configure = (schema: SchemaBuilder) => FieldBuilder[]

export type FieldAttribute = {
  type?: SchemaDefinitionType<any>
  required?: boolean
  min?: number
  max?: number
}

export type Definitions = Record<string, SchemaDefinitionType<any>>
