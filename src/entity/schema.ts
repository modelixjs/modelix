import { Field } from './field'
import type { SchemaDefinition } from 'mongoose'

export class Schema {
  private readonly fields: Field[] = []

  addField(field: Field): this {
    this.fields.push(field)

    return this
  }

  getFields(): Field[] {
    return this.fields
  }

  resolveFields() {
    return this.getFields().reduce<SchemaDefinition>(
      (schema, field) => ({
        ...schema,
        [field.getName()]: {
          required: true,
        },
      }),
      {},
    )
  }
}
