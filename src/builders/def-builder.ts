import { Def } from '../entity'
import { invariant } from '../utils'
import { TYPE_ALREADY_CONFIGURED } from '../constants'
import mongoose from 'mongoose'

export class DefBuilder {
  private readonly def: Def

  constructor(name: string) {
    this.def = new Def(name)
  }

  setType(type: any) {
    invariant(!this.def.isConfigured(), TYPE_ALREADY_CONFIGURED)
    this.def.setType(type)
    return this
  }

  number() {
    return this.setType(Number)
  }

  string() {
    return this.setType(String)
  }

  boolean() {
    return this.setType(Boolean)
  }

  date() {
    return this.setType(Date)
  }

  buffer() {
    return this.setType(Buffer)
  }

  objectId() {
    return this.setType(mongoose.SchemaTypes.ObjectId)
  }

  mixed() {
    return this.setType(mongoose.SchemaTypes.Mixed)
  }

  decimal128() {
    return this.setType(mongoose.SchemaTypes.Decimal128)
  }

  array() {
    return this.setType(Array)
  }

  map() {
    return this.setType(Map)
  }

  arrayOf(builder: DefBuilder) {
    return this.setType([builder.build().getType()])
  }

  mapOf(builder: DefBuilder) {
    return this.setType(
      new Map<string, any>().set('value', builder.build().getType()),
    )
  }

  required() {
    this.def.setRequired()
    return this
  }
  min(value: number) {
    this.def.setMin(value)
    return this
  }
  max(value: number) {
    this.def.setMax(value)
    return this
  }
  unique(value: boolean = true) {
    this.def.setUnique(value)
    return this
  }
  default(value: any) {
    this.def.setDefault(value)
    return this
  }
  enum(values: any[]) {
    this.def.setEnum(values)
    return this
  }
  ref(modelName: string) {
    this.def.setRef(modelName)
    return this
  }
  match(regex: RegExp) {
    this.def.setMatch(regex)
    return this
  }

  build() {
    return this.def
  }

  static field(name: string) {
    return new DefBuilder(name)
  }
}
