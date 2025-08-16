import type { SchemaDefinitionType } from 'mongoose'
import type { FieldAttribute } from '../types'

export class Field {
  private readonly name: string
  private readonly max?: number
  private readonly min?: number
  private required?: boolean
  private type?: SchemaDefinitionType<any>

  /**
   * Creates a new Field instance with the given name.
   *
   * @param {string} name - The name of the field.
   */
  constructor(name: string) {
    this.name = name
  }

  /**
   * Assigns field attributes to this field.
   *
   * @param {FieldAttribute} attribute - The attributes to assign (type, required, min, max, etc.).
   * @returns {this} The current Field instance for chaining.
   */
  assign(attribute: FieldAttribute): this {
    Object.assign(this, attribute)
    return this
  }

  /**
   * Returns the name of the field.
   *
   * @returns {string} The field name.
   */
  getName(): string {
    return this.name
  }

  /**
   * Returns the maximum value for the field, if defined.
   *
   * @returns {number | undefined} The maximum value or undefined.
   */
  getMax(): number | undefined {
    return this.max
  }

  /**
   * Returns the minimum value for the field, if defined.
   *
   * @returns {number | undefined} The minimum value or undefined.
   */
  getMin(): number | undefined {
    return this.min
  }

  /**
   * Returns whether the field is required.
   *
   * @returns {boolean | undefined} True if required, false or undefined otherwise.
   */
  getRequired(): boolean | undefined {
    return this.required
  }

  /**
   * Returns the Mongoose type of the field.
   *
   * @returns {SchemaDefinitionType<any>} The schema type.
   */
  getType(): SchemaDefinitionType<any> {
    return this.type
  }

  /**
   * Checks whether the field has been configured with a type.
   *
   * @returns {boolean} True if the field type is defined, false otherwise.
   */
  isConfigured(): boolean {
    return Boolean(this.type)
  }
}
