import mongoose from 'mongoose'
import { Field } from '../entity'
import { fields } from '../constants'
import { invariant } from '../utils'
import { ERROR_FIELD_ALREADY_CONFIGURED } from '../constants'

export class FieldBuilder<T = any> {
  private readonly field: Field

  constructor(private readonly name: string) {
    this.field = new Field(this.name)
  }

  /**
   * Configures the field as a string type.
   *
   * @returns {FieldBuilder<string>} The builder instance for chaining.
   */
  string(): FieldBuilder<string> {
    invariant(!this.field.isConfigured(), ERROR_FIELD_ALREADY_CONFIGURED)

    this.field.assign(fields.string)

    return this as FieldBuilder<string>
  }

  /**
   * Configures the field as a number type (integer).
   *
   * @returns {FieldBuilder<number>} The builder instance for chaining.
   */
  integer(): FieldBuilder<number> {
    invariant(!this.field.isConfigured(), ERROR_FIELD_ALREADY_CONFIGURED)

    this.field.assign(fields.integer)

    return this as FieldBuilder<number>
  }

  /**
   * Configures the field as a boolean type.
   *
   * @returns {FieldBuilder<boolean>} The builder instance for chaining.
   */
  boolean() {
    invariant(!this.field.isConfigured(), ERROR_FIELD_ALREADY_CONFIGURED)

    this.field.assign(fields.boolean)

    return this as FieldBuilder<boolean>
  }

  /**
   * Configures the field as a Date type.
   *
   * @returns {FieldBuilder<Date>} The builder instance for chaining.
   */
  date() {
    invariant(!this.field.isConfigured(), ERROR_FIELD_ALREADY_CONFIGURED)

    this.field.assign(fields.date)

    return this as FieldBuilder<Date>
  }

  /**
   * Configures the field as a Buffer type.
   *
   * @returns {FieldBuilder<Buffer>} The builder instance for chaining.
   */
  buffer() {
    invariant(!this.field.isConfigured(), ERROR_FIELD_ALREADY_CONFIGURED)

    this.field.assign(fields.buffer)

    return this as FieldBuilder<Buffer>
  }

  /**
   * Configures the field as a Mixed type.
   *
   * @returns {FieldBuilder<any>} The builder instance for chaining.
   */
  mixed() {
    invariant(!this.field.isConfigured(), ERROR_FIELD_ALREADY_CONFIGURED)

    this.field.assign(fields.mixed)

    return this as FieldBuilder<any>
  }

  /**
   * Configures the field as an ObjectId type.
   *
   * @returns {FieldBuilder<mongoose.Types.ObjectId>} The builder instance for chaining.
   */
  objectId() {
    invariant(!this.field.isConfigured(), ERROR_FIELD_ALREADY_CONFIGURED)

    this.field.assign(fields.objectId)

    return this as FieldBuilder<mongoose.Types.ObjectId>
  }

  /**
   * Configures the field as an Array type.
   *
   * @returns {FieldBuilder<any[]>} The builder instance for chaining.
   */
  array() {
    invariant(!this.field.isConfigured(), ERROR_FIELD_ALREADY_CONFIGURED)

    this.field.assign(fields.array)

    return this as FieldBuilder<any[]>
  }

  /**
   * Configures the field as a Decimal128 type.
   *
   * @returns {FieldBuilder<mongoose.Types.Decimal128>} The builder instance for chaining.
   */
  decimal128() {
    invariant(!this.field.isConfigured(), ERROR_FIELD_ALREADY_CONFIGURED)

    this.field.assign(fields.decimal128)

    return this as FieldBuilder<mongoose.Types.Decimal128>
  }

  /**
   * Returns the configured Field instance.
   *
   * @returns {Field} The field object with the applied configuration.
   */
  build(): Field {
    return this.field
  }
}
