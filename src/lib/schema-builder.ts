import { Schema } from 'mongoose'
import { FieldBuilder } from './field-builder'

export class SchemaBuilder {
  private readonly fields: FieldBuilder[] = []

  constructor() {}

  build() {
    return new Schema({})
  }
}
