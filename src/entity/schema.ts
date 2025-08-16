import type { Definitions } from '../types'
import type { SchemaDefinitionType } from 'mongoose'

export class Schema {
  private readonly definitions: Definitions = {}

  setDefinition(name: string, definition: SchemaDefinitionType<any>) {
    this.definitions[name] = {
      ...this.definitions[name],
      ...definition,
    }
  }

  getDefinitions(): Definitions {
    return this.definitions
  }

  resolveDefinitions() {
    const definitions: Definitions = {}

    for (const definition in this.definitions) {
      definitions[definition] = this.definitions[definition]
    }

    return definitions
  }
}
