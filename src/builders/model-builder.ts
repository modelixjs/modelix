import EventEmitter from 'events'
import mongoose, { type HydratedDocument } from 'mongoose'
import { Events } from '../constants'
import { DefBuilder } from './def-builder'
import { Model, Schema } from '../entity'
import { resolveDefs } from '../utils'
import type { Setup } from '../types'

export class ModelBuilder<T extends object> {
  emitter: EventEmitter
  protected schema: Schema<T>

  constructor(
    private readonly name: string,
    setup: Setup,
  ) {
    this.emitter = new EventEmitter()

    this.schema = new Schema(this)

    const defs = setup(DefBuilder)

    this.emitter.emit(Events.UpdateDefs, resolveDefs(defs))
  }

  build(): Model<T> {
    const existingModel = mongoose.models[this.name] as mongoose.Model<any>

    const model =
      existingModel ??
      mongoose.model<T>(this.name, this.schema.toSchemaDefinition())

    return new Model<T>(model)
  }
}

export const builder = <T extends object>(name: string, setup: Setup) => {
  return new ModelBuilder<T>(name, setup)
}
