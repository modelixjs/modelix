import mongoose from 'mongoose'
import { fields, ERROR_FIELD_ALREADY_CONFIGURED } from '../constants'
import { Field, Schema } from '../entity'
import { invariant } from '../utils'

export class FieldBuilder<T = any> {
  private readonly field: Field

  constructor(
    private readonly name: string,
    private readonly schema: Schema,
  ) {
    this.field = new Field(this.name, this.schema)
  }

  string(): FieldBuilder<string> {
    invariant(!this.field.isConfigured(), ERROR_FIELD_ALREADY_CONFIGURED)

    this.field.assign(fields.string)

    return this as FieldBuilder<string>
  }

  integer(): FieldBuilder<number> {
    invariant(!this.field.isConfigured(), ERROR_FIELD_ALREADY_CONFIGURED)

    this.field.assign(fields.integer)

    return this as FieldBuilder<number>
  }

  boolean() {
    invariant(!this.field.isConfigured(), ERROR_FIELD_ALREADY_CONFIGURED)

    this.field.assign(fields.boolean)

    return this as FieldBuilder<boolean>
  }

  date() {
    invariant(!this.field.isConfigured(), ERROR_FIELD_ALREADY_CONFIGURED)

    this.field.assign(fields.date)

    return this as FieldBuilder<Date>
  }

  buffer() {
    invariant(!this.field.isConfigured(), ERROR_FIELD_ALREADY_CONFIGURED)

    this.field.assign(fields.buffer)

    return this as FieldBuilder<Buffer>
  }

  mixed() {
    invariant(!this.field.isConfigured(), ERROR_FIELD_ALREADY_CONFIGURED)

    this.field.assign(fields.mixed)

    return this as FieldBuilder<any>
  }

  objectId() {
    invariant(!this.field.isConfigured(), ERROR_FIELD_ALREADY_CONFIGURED)

    this.field.assign(fields.objectId)

    return this as FieldBuilder<mongoose.Types.ObjectId>
  }

  array() {
    invariant(!this.field.isConfigured(), ERROR_FIELD_ALREADY_CONFIGURED)

    this.field.assign(fields.array)

    return this as FieldBuilder<any[]>
  }

  decimal128() {
    invariant(!this.field.isConfigured(), ERROR_FIELD_ALREADY_CONFIGURED)

    this.field.assign(fields.decimal128)

    return this as FieldBuilder<mongoose.Types.Decimal128>
  }

  build(): Field {
    return this.field
  }
}
