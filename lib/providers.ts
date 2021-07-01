import Providers from 'next-auth/providers';
import { login } from '../utils/auth';
import { LogResponse } from '../types/LogResponse.types';

export const providers = [
  Providers.Credentials({
    id: 'login',
    name: 'login',
    authorize: async (credentials: LogResponse) => {
      const { email, password } = credentials;

      const [user, error] = await login(email, password);
      console.log(user, 4445);

      if (error) {
        return Promise.reject(new Error(error || 'Please fill all fields'));
      }
      user['emailLogin'] = true;
      return user;
    },
  }),
  Providers.Google({
    clientId: process.env.GOOGLE_ID,
    clientSecret: process.env.GOOGLE_SECRET,
  }),
];
