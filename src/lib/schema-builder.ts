import mongoose from 'mongoose'
import { FieldBuilder } from './field-builder'

export class SchemaBuilder {
  addField(name: string) {
    return new FieldBuilder(name)
  }

  build(): mongoose.Schema {
    return new mongoose.Schema({})
  }

  static init() {
    return new SchemaBuilder()
  }
}
