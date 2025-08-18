import mongoose from 'mongoose'
import { ModelBuilder } from '../builders'
import { Events } from '../constants'
import { Def } from './def'
import { forOf } from '../utils'
import type { SchemaDefinition } from 'mongoose'

export class Schema<T> {
  private defs: Map<string, Def> = new Map()

  constructor(protected modelBuilder: ModelBuilder<T>) {
    this.listenEvents()
  }

  add(name: string, def: Def) {
    this.defs.set(name, def)

    return this
  }

  addBatch(defs: Def[]) {
    forOf(defs, (def: Def) => {
      this.add(def.name, def)
    })

    return this
  }

  getDefs() {
    return this.defs
  }

  listenEvents() {
    this.modelBuilder.emitter.on(Events.UpdateDefs, (defs: Def[]) =>
      this.addBatch(defs),
    )
  }

  toSchemaDefinition(): mongoose.Schema<T> {
    const definition: mongoose.SchemaDefinition = {}

    for (const def of this.defs.values()) {
      Object.assign(definition, def.toSchemaDef())
    }

    return new mongoose.Schema<T>(definition)
  }
}
