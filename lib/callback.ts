import { isUser as getUser, createUser } from '../utils/auth';

const signInCallback = async (user, account, profile) => {
  if (account.type === 'credentials') return Promise.resolve(true);
  if (!user?.email) return Promise.reject(new Error('Iser not found'));
  if (!profile.verified_email)
    return Promise.reject(
      new Error('Your email is not verified.Try login or register manually')
    );
  try {
    const { email, name, id } = user;
    const isUser = await getUser(email);
    if (isUser?.googleId) return Promise.resolve(true);
    if (!isUser) {
      await createUser({
        email,
        name,
        googleId: id,
        google: true,
      });
      return Promise.resolve(true);
    }
    isUser['googleId'] = id;
    await isUser.save();
    return Promise.resolve(true);
  } catch (error) {
    console.log(error);
    return Promise.resolve(false);
  }
};

export default signInCallback;

export const token = async (token, user) => {
  user && (token.user = user);
  return Promise.resolve(token);
};

export const session = async (session, user) => {
  console.log(user);

  delete user.user.user?.password;
  session.user = user.user;
  return Promise.resolve(session);
};
