import mongoose, { Document } from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'name is required.'],
  },
  email: {
    type: String,
    unique: true,
    required: [true, 'email is required.'],
    trim: true,
  },
  password: {
    type: String,
    required: [true, 'password is required.'],
  },
});

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
}

export const User =
  (mongoose.models.User as mongoose.Model<IUser>) ||
  mongoose.model<IUser>('User', UserSchema);
