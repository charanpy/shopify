const validator = require('validator');

export const isEmailValid = (email: string): string =>
  validator.isEmail(email) ? null : 'Invalid email';

export const isPasswordValid = (password: string) =>
  validator.isStrongPassword(password)
    ? null
    : 'Password should have atleast 8 characters,one special character,one number';

export const isUsernameValid = (username: string) =>
  username.length > 2 ? null : 'Username should be minimum of 2 characters';
