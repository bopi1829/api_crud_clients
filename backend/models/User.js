import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

export const userSchema = new mongoose.Schema({
  userId: { String },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

userSchema.plugin(uniqueValidator);

export const User = mongoose.model('User', userSchema);
