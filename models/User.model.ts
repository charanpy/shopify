import mongoose, { Schema, Document, Model } from 'mongoose';
import UserModel from '../types/UserModel.types';
const validator = require('validator');

interface methods extends Model<UserSchemaModel> {
  comparePassword(dbPassword: string, userPassword: string): any;
}
interface UserSchemaModel extends UserModel, Document {}

const UserSchema: Schema = new mongoose.Schema(
  {
    name: {
      type: String,
      minLength: 2,
      min: [2, 'Username should have minimum of 2 characters'],
      required: [true, 'Username is required'],
      trim: true,
    },
    google: {
      type: Boolean,
      default: false,
    },
    googleId: {
      type: String,
      default: null,
    },
    email: {
      type: String,
      trim: true,
      unique: true,
      validator: validator.isEmail,
      required: [true, 'Email is required'],
    },
    password: {
      type: String,
      required: function () {
        console.log(this.google, 'google');
        return !this.google;
      },
      select: false,
      minLength: 8,
      min: [8, 'Password should be minimum of 8 character'],
    },
  },
  { timestamps: true }
);

UserSchema.pre('save', function (this: UserModel, next) {
  if (this.googleId) this.google = true;
  next();
});

const User =
  mongoose.models.User ||
  mongoose.model<UserSchemaModel, methods>('User', UserSchema);

export default User;
