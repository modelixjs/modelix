import mongoose from 'mongoose'
import { TYPE_ALREADY_CONFIGURED } from '../constants'
import { Def } from '../entity'
import { invariant } from '../utils'

/**
 * A builder class for defining Mongoose schema fields with fluent API.
 * Provides chainable methods to configure field types and validations.
 */
export class DefBuilder {
  /** @private Internal Def instance being built */
  private readonly def: Def

  /**
   * Creates a new DefBuilder instance
   *
   * @param {string} name - The field name
   */
  constructor(name: string) {
    this.def = new Def(name)
  }

  /**
   * Sets the field type
   *
   * @param {any} type - The Mongoose schema type
   * @returns {DefBuilder} The builder instance for chaining
   * @throws {Error} If type is already configured (TYPE_ALREADY_CONFIGURED)
   */
  setType(type: any): DefBuilder {
    invariant(!this.def.isConfigured(), TYPE_ALREADY_CONFIGURED)

    this.def.setType(type)

    return this
  }

  /** @returns {DefBuilder} Sets field type to Number */
  number(): DefBuilder {
    return this.setType(Number)
  }

  /** @returns {DefBuilder} Sets field type to String */
  string(): DefBuilder {
    return this.setType(String)
  }

  /** @returns {DefBuilder} Sets field type to Boolean */
  boolean(): DefBuilder {
    return this.setType(Boolean)
  }

  /** @returns {DefBuilder} Sets field type to Date */
  date(): DefBuilder {
    return this.setType(Date)
  }

  /** @returns {DefBuilder} Sets field type to Buffer */
  buffer(): DefBuilder {
    return this.setType(Buffer)
  }

  /** @returns {DefBuilder} Sets field type to ObjectId */
  objectId(): DefBuilder {
    return this.setType(mongoose.SchemaTypes.ObjectId)
  }

  /** @returns {DefBuilder} Sets field type to Mixed */
  mixed(): DefBuilder {
    return this.setType(mongoose.SchemaTypes.Mixed)
  }

  /** @returns {DefBuilder} Sets field type to Decimal128 */
  decimal128(): DefBuilder {
    return this.setType(mongoose.SchemaTypes.Decimal128)
  }

  /** @returns {DefBuilder} Sets field type to Array */
  array(): DefBuilder {
    return this.setType(Array)
  }

  /** @returns {DefBuilder} Sets field type to Map */
  map(): DefBuilder {
    return this.setType(Map)
  }

  /**
   * Defines an array field with specific element type
   *
   * @param {DefBuilder} builder - DefBuilder for array elements
   * @returns {DefBuilder} The builder instance for chaining
   */
  arrayOf(builder: DefBuilder): DefBuilder {
    return this.setType([builder.build().getType()])
  }

  /**
   * Defines a map field with specific value type
   *
   * @param {DefBuilder} builder - DefBuilder for map values
   * @returns {DefBuilder} The builder instance for chaining
   */
  mapOf(builder: DefBuilder): DefBuilder {
    return this.setType(
      new Map<string, any>().set('value', builder.build().getType()),
    )
  }

  /** @returns {DefBuilder} Marks field as required */
  required(): DefBuilder {
    this.def.setRequired()

    return this
  }

  /**
   * Sets minimum value/number of characters
   *
   * @param {number} value - Minimum value
   * @returns {DefBuilder} The builder instance for chaining
   */
  min(value: number): DefBuilder {
    this.def.setMin(value)

    return this
  }

  /**
   * Sets maximum value/number of characters
   *
   * @param {number} value - Maximum value
   * @returns {DefBuilder} The builder instance for chaining
   */
  max(value: number): DefBuilder {
    this.def.setMax(value)

    return this
  }

  /**
   * Marks field as unique index
   * @param {boolean} [value=true] - Whether to make unique
   * @returns {DefBuilder} The builder instance for chaining
   */
  unique(value: boolean = true) {
    this.def.setUnique(value)
    return this
  }

  /**
   * Sets default value
   * @param {any} value - Default value
   * @returns {DefBuilder} The builder instance for chaining
   */
  default(value: any) {
    this.def.setDefault(value)
    return this
  }

  /**
   * Sets enum values
   * @param {any[]} values - Allowed values
   * @returns {DefBuilder} The builder instance for chaining
   */
  enum(values: any[]) {
    this.def.setEnum(values)
    return this
  }

  /**
   * Sets reference to another model
   * @param {string} modelName - Name of referenced model
   * @returns {DefBuilder} The builder instance for chaining
   */
  ref(modelName: string): DefBuilder {
    this.def.setRef(modelName)
    return this
  }

  /**
   * Sets regex pattern validation
   *
   * @param {RegExp} regex - Regular expression to match
   * @returns {DefBuilder} The builder instance for chaining
   */
  match(regex: RegExp): DefBuilder {
    this.def.setMatch(regex)

    return this
  }

  /**
   * Finalizes the builder and returns the Def instance
   *
   * @returns {Def} The built field definition
   */
  build(): Def {
    return this.def
  }

  /**
   * Static factory method to create new DefBuilder
   *
   * @param {string} name - Field name
   * @returns {DefBuilder} New DefBuilder instance
   */
  static field(name: string): DefBuilder {
    return new DefBuilder(name)
  }
}
