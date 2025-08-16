import type { SchemaDefinition, SchemaDefinitionProperty } from 'mongoose'

export class Field {
  private max?: number
  private min?: number
  private required?: boolean = false

  constructor(private readonly name: string) {}

  assign(value: Partial<Field>): this {
    Object.assign(this, value)

    return this
  }

  isConfigured() {
    return true
  }

  // resolve(): SchemaDefinition {
  //   const properties: SchemaDefinitionProperty<T> = {
  //     min: this.min,
  //     max: this.max,
  //   }
  //
  //   return {
  //     [this.name]: properties,
  //   }
  // }
}
