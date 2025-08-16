import { Field } from './field'

export class Schema {
  private readonly fields: Field[]

  addField(field: Field): this {
    this.fields.push(field)

    return this
  }

  getFields(): Field[] {
    return this.fields
  }
}
