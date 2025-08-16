import type { SchemaDefinitionType, SchemaTypes } from 'mongoose'
import type { FieldAttribute } from '../types'

export class Field {
  private readonly name: string
  private readonly max?: number
  private readonly min?: number
  private required?: boolean
  private type?: SchemaDefinitionType<any>
  private default?: any
  private enum?: any[]
  private unique?: boolean
  private index?: boolean
  private immutable?: boolean
  private select?: boolean

  constructor(name: string) {
    this.name = name
  }

  assign(attribute: FieldAttribute): this {
    Object.assign(this, attribute)
    return this
  }

  getName(): string {
    return this.name
  }

  getMax(): number | undefined {
    return this.max
  }

  getMin(): number | undefined {
    return this.min
  }

  getRequired(): boolean | undefined {
    return this.required
  }

  getType(): SchemaDefinitionType<any> {
    return this.type
  }

  getDefault(): any {
    return this.default
  }

  getEnum(): any[] | undefined {
    return this.enum
  }

  getUnique(): boolean | undefined {
    return this.unique
  }

  getIndex(): boolean | undefined {
    return this.index
  }

  getImmutable(): boolean | undefined {
    return this.immutable
  }

  getSelect(): boolean | undefined {
    return this.select
  }

  isConfigured(): boolean {
    return Boolean(this.type)
  }
}
