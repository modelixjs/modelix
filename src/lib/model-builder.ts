import mongoose from 'mongoose'
import { SchemaBuilder } from './schema-builder'
import type { Configure } from '../types'

export class ModelBuilder {
  private readonly schemaBuilder: SchemaBuilder

  private constructor(
    private readonly name: string,
    configure: Configure,
  ) {
    this.schemaBuilder = new SchemaBuilder()
    configure(this.schemaBuilder)
  }

  build() {
    return mongoose.model(this.name, this.schemaBuilder.build())
  }

  static init(name: string, setup: Configure): ModelBuilder {
    return new ModelBuilder(name, setup)
  }
}
