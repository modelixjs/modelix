import mongoose from 'mongoose'
import { Schema } from '../entity'
import { FieldBuilder } from './field-builder'

export class SchemaBuilder {
  private readonly schema: Schema

  private constructor() {
    this.schema = new Schema()
  }

  addField(name: string) {
    return FieldBuilder.init(name, this.schema)
  }

  build(): mongoose.Schema {
    return new mongoose.Schema(this.schema.resolveDefinitions())
  }

  static init() {
    return new SchemaBuilder()
  }
}
