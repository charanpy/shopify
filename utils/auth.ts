import Profile from '@/models/Profile.model';
import bcrypt from 'bcryptjs';
import User from '../models/User.model';
import {
  isEmailValid,
  isPasswordValid,
  isUsernameValid,
} from './credential-validation';

export const isUser = async (email: string) => {
  try {
    const user = await User.findOne({ email }).select(
      '_id email password name google googleId'
    );
    return user;
  } catch (error) {
    return false;
  }
};

export const comparePassword = async (
  dbPassword: string,
  userPassword: string
) => {
  return await bcrypt.compare(dbPassword, userPassword);
};

export const sanitizeUserInput = (
  email: string,
  password: string,
  username: string
) => {
  if (!email || !password || !username)
    return [false, 'Please fill all fields'];
  const notValidEmail = isEmailValid(email);
  const notValidPassword = isPasswordValid(password);
  const notValidUsername = isUsernameValid(username);
  const message = notValidEmail || notValidPassword || notValidUsername;
  if (message) return [false, message];
  return [true, null];
};

export const hashedPassword = async (password: string) =>
  await bcrypt.hash(password, 12);

export const login = async (email: string, password: string) => {
  if (!email || !password) return [null, 'Please fill all fields'];
  const userData = await isUser(email);
  console.log(userData, 66);

  if (!userData) return [null, 'Invalid credentials'];
  const isValidPassword = await comparePassword(password, userData.password);
  console.log(isValidPassword);

  if (!isValidPassword) return [null, 'Invalid credentials'];

  return [userData, null];
};

export const createUser = async (data) => {
  try {
    const user = await User.create(data);
    if (user['_id']) {
      await Profile.create({ userId: user['_id'] });
    }
    return user;
  } catch (error) {
    console.log(error);
    return false;
  }
};
