import { model } from 'mongoose'

export class ModelBuilder {
  private constructor(private readonly name: string) {}

  static build() {
    return model(this.name, null)
  }
}
