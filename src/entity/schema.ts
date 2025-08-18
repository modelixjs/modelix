import mongoose from 'mongoose'
import { ModelBuilder } from '../builders'
import { Events } from '../constants'
import { Def } from './def'
import { forOf } from '../utils'

/**
 * A class representing a Mongoose schema with additional functionality for managing field definitions.
 *
 * @template T - The type shape of the documents this schema will handle.
 */
export class Schema<T extends object> {
  /** Internal map storing field definitions by name */
  private defs: Map<string, Def> = new Map()

  /**
   * Creates a new Schema instance.
   *
   * @param {ModelBuilder<T>} modelBuilder - The parent ModelBuilder instance.
   */
  constructor(protected modelBuilder: ModelBuilder<T>) {
    this.listenEvents()
  }

  /**
   * Adds a single field definition to the schema.
   *
   * @param {string} name - The name of the field.
   * @param {Def} def - The field definition to add.
   * @returns {Schema<T>} The schema instance for chaining.
   */
  add(name: string, def: Def): Schema<T> {
    this.defs.set(name, def)

    return this
  }

  /**
   * Adds multiple field definitions to the schema in batch.
   *
   * @param {Def[]} defs - Array of field definitions to add.
   * @returns {Schema<T>} The schema instance for chaining.
   */
  addBatch(defs: Def[]): Schema<T> {
    forOf(defs, (def: Def) => {
      this.add(def.name, def)
    })

    return this
  }

  /**
   * Gets all field definitions in this schema.
   *
   * @returns {Map<string, Def>} Map of field definitions.
   */
  getDefs(): Map<string, Def> {
    return this.defs
  }

  /**
   * Sets up event listeners for schema updates.
   *
   * @private
   */
  listenEvents(): void {
    this.modelBuilder.emitter.on(Events.UpdateDefs, (defs: Def[]) =>
      this.addBatch(defs),
    )
  }

  /**
   * Converts the schema definition to a Mongoose Schema instance.
   *
   * @returns {mongoose.Schema<T>} The constructed Mongoose Schema.
   */
  toSchemaDefinition(): mongoose.Schema<T> {
    const definition = {} as mongoose.SchemaDefinition<T>

    for (const def of this.defs.values()) {
      Object.assign(definition, def.toSchemaDef())
    }

    return new mongoose.Schema<T>(definition)
  }
}
