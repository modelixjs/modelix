import { ModelBuilder } from './lib'

const User = ModelBuilder.init('User', (schema) => [
  schema.addField('firstname').string(),
]).build()

import mongoose from 'mongoose'

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/mydb')

  const users = await User.find()
  console.log(users)
}

//main().catch((err) => console.error(err))
