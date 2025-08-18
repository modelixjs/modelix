import type { SchemaDefinition, SchemaDefinitionType } from 'mongoose'

export class Def {
  name: string
  type?: SchemaDefinitionType<any>
  required?: boolean
  unique?: boolean
  defaultValue?: any
  min?: number | Date
  max?: number | Date
  enumValues?: any[]
  ref?: string
  match?: RegExp
  index?: boolean
  sparse?: boolean
  select?: boolean
  immutable?: boolean
  maxlength?: number
  minlength?: number
  trim?: boolean
  lowercase?: boolean
  uppercase?: boolean
  getFn?: (val: any) => any
  setFn?: (val: any) => any
  alias?: string
  validateFn?:
    | ((val: any) => boolean)
    | { validator: (val: any) => boolean; message: string }

  constructor(name: string) {
    this.name = name
  }

  isConfigured() {
    return Boolean(this.type)
  }

  getName() {
    return this.name
  }

  getType() {
    return this.type
  }

  setType(type: SchemaDefinitionType<any>) {
    this.type = type
    return this
  }

  setRequired() {
    this.required = true
    return this
  }

  setUnique(unique: boolean = true) {
    this.unique = unique
    return this
  }

  setDefault(value: any) {
    this.defaultValue = value
    return this
  }

  setMin(value: number | Date) {
    this.min = value
    return this
  }

  setMax(value: number | Date) {
    this.max = value
    return this
  }

  setEnum(values: any[]) {
    this.enumValues = values
    return this
  }

  setRef(modelName: string) {
    this.ref = modelName
    return this
  }

  setMatch(regex: RegExp) {
    this.match = regex
    return this
  }

  setIndex(index: boolean = true) {
    this.index = index
    return this
  }

  setSparse(sparse: boolean = true) {
    this.sparse = sparse
    return this
  }

  setSelect(select: boolean) {
    this.select = select
    return this
  }

  setImmutable(immutable: boolean = true) {
    this.immutable = immutable
    return this
  }

  setMaxlength(length: number) {
    this.maxlength = length
    return this
  }

  setMinlength(length: number) {
    this.minlength = length
    return this
  }

  setTrim(trim: boolean = true) {
    this.trim = trim
    return this
  }

  setLowercase(lowercase: boolean = true) {
    this.lowercase = lowercase
    return this
  }

  setUppercase(uppercase: boolean = true) {
    this.uppercase = uppercase
    return this
  }

  setGet(fn: (val: any) => any) {
    this.getFn = fn
    return this
  }

  setSet(fn: (val: any) => any) {
    this.setFn = fn
    return this
  }

  setAlias(alias: string) {
    this.alias = alias
    return this
  }

  setValidate(
    fn:
      | ((val: any) => boolean)
      | { validator: (val: any) => boolean; message: string },
  ) {
    this.validateFn = fn
    return this
  }

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
