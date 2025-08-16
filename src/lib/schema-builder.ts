import mongoose from 'mongoose'
import { Schema } from '../entity'
import { FieldBuilder } from './field-builder'
import { resolveSchemaFields } from '../utils'

export class SchemaBuilder {
  private readonly schema: Schema

  private constructor() {
    this.schema = new Schema()
  }

  addField(name: string) {
    return new FieldBuilder(name, this.schema)
  }

  build(): mongoose.Schema {
    return new mongoose.Schema(resolveSchemaFields(this.schema.getFields()))
  }

  static init() {
    return new SchemaBuilder()
  }
}
