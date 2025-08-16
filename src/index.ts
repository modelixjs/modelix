import { ModelBuilder } from './lib'

const User = ModelBuilder.init('User', ({ addField }) => [
  addField('firstname').string(),
  addField('age').integer(),
]).build()
