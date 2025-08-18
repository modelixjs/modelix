import EventEmitter from 'events'
import mongoose from 'mongoose'
import { Events } from '../constants'
import { DefBuilder } from './def-builder'
import { Model, Schema } from '../entity'
import { resolveDefs } from '../utils'
import type { Setup } from '../types'

export class ModelBuilder<T> {
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
    if (mongoose.models[this.name]) {
      return new Model<T>(mongoose.model<T & mongoose.Document>(this.name))
    }

    return new Model<T>(
      mongoose.model<T & mongoose.Document>(
        this.name,
        new mongoose.Schema<T>(this.schema.toSchemaDefinition()),
      ),
    )
  }
}

export const builder = <T>(name: string, setup: Setup) => {
  return new ModelBuilder<T>(name, setup)
}
