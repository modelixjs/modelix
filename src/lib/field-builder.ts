import { Field } from '../entity'
import { fields } from '../constants'
import { invariant } from '../utils'
import { ERROR_FIELD_ALREADY_CONFIGURED } from '../constants'

export class FieldBuilder {
  private readonly field: Field

  constructor(private readonly name: string) {
    this.field = new Field(this.name)
  }

  integer() {
    invariant(!this.field.isConfigured(), ERROR_FIELD_ALREADY_CONFIGURED)

    this.field.assign(fields.integer)

    return this
  }

  string() {
    invariant(!this.field.isConfigured(), ERROR_FIELD_ALREADY_CONFIGURED)

    this.field.assign(fields.string)

    return this
  }

  build() {
    return this.field
  }
}
