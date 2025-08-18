import EventEmitter from 'events'
import mongoose from 'mongoose'
import { Events } from '../constants'
import { DefBuilder } from './def-builder'
import { Model, Schema } from '../entity'
import { resolveDefs } from '../utils'
import type { Setup } from '../types'

/**
 * A builder class for creating Mongoose models with custom schema definitions.
 *
 * @template T - The type of the document this model will handle.
 */
export class ModelBuilder<T extends object> {
  /** Event emitter instance for handling model events */
  emitter: EventEmitter

  /** The schema instance associated with this model builder */
  protected schema: Schema<T>

  /**
   * Creates a new ModelBuilder instance.
   *
   * @param {string} name - The name of the model.
   * @param {Setup} setup - A function that defines the schema using DefBuilder.
   */
  constructor(
    private readonly name: string,
    setup: Setup,
  ) {
    this.emitter = new EventEmitter()
    this.schema = new Schema(this)

    const defs = setup(DefBuilder)
    this.emitter.emit(Events.UpdateDefs, resolveDefs(defs))
  }

  /**
   * Builds and returns the Mongoose model.
   *
   * Reuses existing model if it's already registered.
   * @returns {Model<T>} The constructed model instance.
   */
  build(): Model<T> {
    const existingModel = mongoose.models[this.name] as mongoose.Model<any>

    const model =
      existingModel ??
      mongoose.model<T>(this.name, this.schema.toSchemaDefinition())

    return new Model<T>(model)
  }
}

/**
 * Factory function for creating a new ModelBuilder instance.
 *
 * @template T - The type of the document this model will handle.
 * @param {string} name - The name of the model.
 * @param {Setup} setup - A function that defines the schema using DefBuilder.
 * @returns {ModelBuilder<T>} A new ModelBuilder instance.
 */
export const builder = <T extends object>(
  name: string,
  setup: Setup,
): ModelBuilder<T> => {
  return new ModelBuilder<T>(name, setup)
}
