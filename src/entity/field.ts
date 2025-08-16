import type { SchemaDefinitionType, SchemaTypes } from 'mongoose'
import type { FieldAttribute } from '../types'

export class Field {
  /** The name of the field */
  private readonly name: string

  /** The maximum value allowed for the field (if applicable) */
  private readonly max?: number

  /** The minimum value allowed for the field (if applicable) */
  private readonly min?: number

  /** Whether the field is required */
  private required?: boolean

  /** The Mongoose schema type for the field */
  private type?: SchemaDefinitionType<any>

  /** The default value for the field */
  private default?: any

  /** Enumeration of allowed values */
  private enum?: any[]

  /** Whether the field must be unique */
  private unique?: boolean

  /** Whether the field is indexed */
  private index?: boolean

  /** Whether the field is immutable */
  private immutable?: boolean

  /** Whether the field should be selected by default */
  private select?: boolean

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
   * Returns the default value of the field, if any.
   *
   * @returns The default value or undefined.
   */
  getDefault(): any {
    return this.default
  }

  /**
   * Returns the allowed enumeration values for the field, if any.
   *
   * @returns An array of allowed values or undefined.
   */
  getEnum(): any[] | undefined {
    return this.enum
  }

  /**
   * Returns whether the field must be unique.
   *
   * @returns True if the field is unique, false or undefined otherwise.
   */
  getUnique(): boolean | undefined {
    return this.unique
  }

  /**
   * Returns whether the field is indexed.
   *
   * @returns True if the field has an index, false or undefined otherwise.
   */
  getIndex(): boolean | undefined {
    return this.index
  }

  /**
   * Returns whether the field is immutable.
   *
   * @returns True if immutable, false or undefined otherwise.
   */
  getImmutable(): boolean | undefined {
    return this.immutable
  }

  /**
   * Returns whether the field should be selected by default.
   *
   * @returns True if selected by default, false or undefined otherwise.
   */
  getSelect(): boolean | undefined {
    return this.select
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
