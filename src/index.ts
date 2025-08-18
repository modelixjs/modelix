import mongoose from 'mongoose'
import { builder } from './builders'

type User = { age: number }

const User = builder<User>('User', (builder) => [
  builder.field('age').number(),
]).build()

mongoose.connect('mongodb://localhost:27017/mydatabase').then(async () => {
  await User
})
