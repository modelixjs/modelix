import type { SchemaDefinitionType } from 'mongoose'
import type { FieldAttribute } from '../types'

export class Field {
  private readonly name: string
  private readonly max?: number
  private readonly min?: number
  private required?: boolean
  private type?: SchemaDefinitionType<any>

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

  isConfigured() {
    return Boolean(this.type)
  }
}
