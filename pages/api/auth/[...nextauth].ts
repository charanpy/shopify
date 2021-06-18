import NextAuth from 'next-auth';
import signIn, { token as jwt, session } from 'lib/callback';
import { providers } from 'lib/providers';

const options = {
  site: process.env.NEXTAUTH_URL,
  providers: providers,
  callbacks: {
    signIn,
    jwt,
    session,
  },
  session: {
    jwt: true,
    maxAge: 2 * 24 * 60 * 60,
  },
  jwt: {
    // signingKey: process.env.JWT_SIGNING_PRIVATE_KEY,
  },
  pages: {
    signIn: '/auth/login',
    error: '/auth/login',
  },
};

export default (req, res) => NextAuth(req, res, options);
