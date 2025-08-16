import { ModelBuilder } from './lib'

const User = ModelBuilder.init('User', (schema) => [
  schema.addField('firstname').string(),
  schema.addField('age').integer().required(),
]).build()

import mongoose from 'mongoose'

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/mydb')

  await User.create({
    firstname: '23232',
    age: '23232',
  })
  const users = await User.find()
  console.log(users)
}

//main().catch((err) => console.error(err))
