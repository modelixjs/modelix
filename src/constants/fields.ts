import mongoose from 'mongoose'

export const fields = {
  defaults: { required: true },
  string: { type: mongoose.Schema.Types.String, maxlength: 255 },
  integer: { type: mongoose.Schema.Types.Number },
  boolean: { type: mongoose.Schema.Types.Boolean },
  date: { type: mongoose.Schema.Types.Date },
  buffer: { type: Buffer },
  mixed: { type: mongoose.Schema.Types.Mixed },
  objectId: { type: mongoose.Schema.Types.ObjectId },
  array: { type: Array },
  decimal128: { type: mongoose.Schema.Types.Decimal128 },
}
