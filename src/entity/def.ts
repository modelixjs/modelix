import type { SchemaDefinition, SchemaDefinitionType } from 'mongoose'

/**
 * A builder class for defining Mongoose schema properties with a fluent interface.
 * Allows configuration of various schema options and converts them to Mongoose-compatible definitions.
 */
export class Def {
  /**
   * The name of the schema property
   *
   * @type {string}
   */
  name: string

  /**
   * The type of the schema property
   *
   * @type {SchemaDefinitionType<any>|undefined}
   */
  type?: SchemaDefinitionType<any>

  /**
   * Whether the property is required
   *
   * @type {boolean|undefined}
   */
  required?: boolean

  /**
   * Whether the property must be unique
   *
   * @type {boolean|undefined}
   */
  unique?: boolean

  /**
   * The default value for the property
   *
   * @type {any|undefined}
   */
  defaultValue?: any

  /**
   * Minimum value (for numbers or dates)
   *
   * @type {number|Date|undefined}
   */
  min?: number | Date

  /**
   * Maximum value (for numbers or dates)
   *
   * @type {number|Date|undefined}
   */
  max?: number | Date

  /**
   * Allowed enum values
   *
   * @type {any[]|undefined}
   */
  enumValues?: any[]

  /**
   * Reference to another model
   *
   * @type {string|undefined}
   */
  ref?: string

  /**
   * Regular expression pattern for validation
   *
   * @type {RegExp|undefined}
   */
  match?: RegExp

  /**
   * Whether to create an index
   *
   * @type {boolean|undefined}
   */
  index?: boolean

  /**
   * Whether the index should be sparse
   *
   * @type {boolean|undefined}
   */
  sparse?: boolean

  /**
   * Whether the field should be selected by default
   *
   * @type {boolean|undefined}
   */
  select?: boolean

  /**
   * Whether the field is immutable
   *
   * @type {boolean|undefined}
   */
  immutable?: boolean

  /**
   * Maximum string length
   *
   * @type {number|undefined}
   */
  maxlength?: number

  /**
   * Minimum string length
   *
   * @type {number|undefined}
   */
  minlength?: number

  /**
   * Whether to trim strings
   *
   * @type {boolean|undefined}
   */
  trim?: boolean

  /**
   * Whether to convert strings to lowercase
   *
   * @type {boolean|undefined}
   */
  lowercase?: boolean

  /**
   * Whether to convert strings to uppercase
   *
   * @type {boolean|undefined}
   */
  uppercase?: boolean

  /**
   * Getter function
   *
   * @type {((val: any) => any)|undefined}
   */
  getFn?: (val: any) => any

  /**
   * Setter function
   *
   * @type {((val: any) => any)|undefined}
   */
  setFn?: (val: any) => any

  /**
   * Field alias
   *
   * @type {string|undefined}
   */
  alias?: string

  /**
   * Validation function or object
   *
   * @type {((val: any) => boolean)|{validator: (val: any) => boolean, message: string}|undefined}
   */
  validateFn?:
    | ((val: any) => boolean)
    | { validator: (val: any) => boolean; message: string }

  /**
   * @param {string} name - The name of the schema property
   */
  constructor(name: string) {
    this.name = name
  }

  /**
   * Checks if the property has been configured with a type
   *
   * @returns {boolean} True if the property has a type defined
   */
  isConfigured(): boolean {
    return Boolean(this.type)
  }

  /**
   * Gets the property name
   *
   * @returns {string} The property name
   */
  getName(): string {
    return this.name
  }

  /**
   * Gets the property type
   *
   * @returns {SchemaDefinitionType<any>} The property type
   */
  getType(): SchemaDefinitionType<any> {
    return this.type
  }

  /**
   * Sets the property type
   *
   * @param {SchemaDefinitionType<any>} type - The type to set
   * @returns {Def} The current instance for chaining
   */
  setType(type: SchemaDefinitionType<any>): Def {
    this.type = type

    return this
  }

  /**
   * Marks the property as required
   *
   * @returns {Def} The current instance for chaining
   */
  setRequired(): Def {
    this.required = true

    return this
  }

  /**
   * Sets the unique constraint
   *
   * @param {boolean} [unique=true] - Whether the property should be unique
   * @returns {Def} The current instance for chaining
   */
  setUnique(unique: boolean = true): Def {
    this.unique = unique

    return this
  }

  /**
   * Sets the default value
   *
   * @param {any} value - The default value
   * @returns {Def} The current instance for chaining
   */
  setDefault(value: any): Def {
    this.defaultValue = value

    return this
  }

  /**
   * Sets the minimum value (for numbers or dates)
   *
   * @param {number|Date} value - The minimum value
   * @returns {Def} The current instance for chaining
   */
  setMin(value: number | Date): Def {
    this.min = value

    return this
  }

  /**
   * Sets the maximum value (for numbers or dates)
   *
   * @param {number|Date} value - The maximum value
   * @returns {Def} The current instance for chaining
   */
  setMax(value: number | Date): Def {
    this.max = value

    return this
  }

  /**
   * Sets the enum values
   *
   * @param {any[]} values - The allowed enum values
   * @returns {Def} The current instance for chaining
   */
  setEnum(values: any[]): Def {
    this.enumValues = values

    return this
  }

  /**
   * Sets the referenced model name
   *
   * @param {string} modelName - The name of the referenced model
   * @returns {Def} The current instance for chaining
   */
  setRef(modelName: string): Def {
    this.ref = modelName

    return this
  }

  /**
   * Sets the regex pattern for validation
   *
   * @param {RegExp} regex - The regular expression to match
   * @returns {Def} The current instance for chaining
   */
  setMatch(regex: RegExp): Def {
    this.match = regex

    return this
  }

  /**
   * Sets whether to create an index
   *
   * @param {boolean} [index=true] - Whether to create an index
   * @returns {Def} The current instance for chaining
   */
  setIndex(index: boolean = true): Def {
    this.index = index

    return this
  }

  /**
   * Sets the sparse option
   *
   * @param {boolean} [sparse=true] - Whether the index should be sparse
   * @returns {Def} The current instance for chaining
   */
  setSparse(sparse: boolean = true): Def {
    this.sparse = sparse

    return this
  }

  /**
   * Sets whether the field should be selected by default
   *
   * @param {boolean} select - Whether to select the field by default
   * @returns {Def} The current instance for chaining
   */
  setSelect(select: boolean): Def {
    this.select = select

    return this
  }

  /**
   * Sets whether the field is immutable
   *
   * @param {boolean} [immutable=true] - Whether the field is immutable
   * @returns {Def} The current instance for chaining
   */
  setImmutable(immutable: boolean = true): Def {
    this.immutable = immutable

    return this
  }

  /**
   * Sets the maximum string length
   *
   * @param {number} length - The maximum length
   * @returns {Def} The current instance for chaining
   */
  setMaxlength(length: number): Def {
    this.maxlength = length

    return this
  }

  /**
   * Sets the minimum string length
   *
   * @param {number} length - The minimum length
   * @returns {Def} The current instance for chaining
   */
  setMinlength(length: number): Def {
    this.minlength = length

    return this
  }

  /**
   * Sets whether to trim strings
   *
   * @param {boolean} [trim=true] - Whether to trim strings
   * @returns {Def} The current instance for chaining
   */
  setTrim(trim: boolean = true): Def {
    this.trim = trim

    return this
  }

  /**
   * Sets whether to convert strings to lowercase
   *
   * @param {boolean} [lowercase=true] - Whether to convert to lowercase
   * @returns {Def} The current instance for chaining
   */
  setLowercase(lowercase: boolean = true): Def {
    this.lowercase = lowercase

    return this
  }

  /**
   * Sets whether to convert strings to uppercase
   *
   * @param {boolean} [uppercase=true] - Whether to convert to uppercase
   * @returns {Def} The current instance for chaining
   */
  setUppercase(uppercase: boolean = true): Def {
    this.uppercase = uppercase

    return this
  }

  /**
   * Sets a getter function
   *
   * @param {(val: any) => any} fn - The getter function
   * @returns {Def} The current instance for chaining
   */
  setGet(fn: (val: any) => any): Def {
    this.getFn = fn

    return this
  }

  /**
   * Sets a setter function
   *
   * @param {(val: any) => any} fn - The setter function
   * @returns {Def} The current instance for chaining
   */
  setSet(fn: (val: any) => any): Def {
    this.setFn = fn

    return this
  }

  /**
   * Sets an alias for the field
   *
   * @param {string} alias - The alias name
   * @returns {Def} The current instance for chaining
   */
  setAlias(alias: string): Def {
    this.alias = alias

    return this
  }

  /**
   * Sets a validation function
   *
   * @param {((val: any) => boolean)|{validator: (val: any) => boolean, message: string}} fn - The validation function or object
   * @returns {Def} The current instance for chaining
   */
  setValidate(
    fn:
      | ((val: any) => boolean)
      | { validator: (val: any) => boolean; message: string },
  ): Def {
    this.validateFn = fn

    return this
  }

  /**
   * Converts the configuration to a Mongoose schema definition
   *
   * @returns {SchemaDefinition} The Mongoose-compatible schema definition
   */
  toSchemaDef(): SchemaDefinition {
    const config: SchemaDefinitionType<any> = { type: this.getType() }

    if (this.required) config.required = this.required
    if (this.unique) config.unique = this.unique
    if (this.defaultValue !== undefined) config.default = this.defaultValue
    if (this.min !== undefined) config.min = this.min
    if (this.max !== undefined) config.max = this.max
    if (this.enumValues) config.enum = this.enumValues
    if (this.ref) config.ref = this.ref
    if (this.match) config.match = this.match
    if (this.index) config.index = this.index
    if (this.sparse) config.sparse = this.sparse
    if (this.select !== undefined) config.select = this.select
    if (this.immutable) config.immutable = this.immutable
    if (this.maxlength) config.maxlength = this.maxlength
    if (this.minlength) config.minlength = this.minlength
    if (this.trim) config.trim = this.trim
    if (this.lowercase) config.lowercase = this.lowercase
    if (this.uppercase) config.uppercase = this.uppercase
    if (this.getFn) config.get = this.getFn
    if (this.setFn) config.set = this.setFn
    if (this.alias) config.alias = this.alias
    if (this.validateFn) config.validate = this.validateFn

    return { [this.getName()]: config }
  }
}
