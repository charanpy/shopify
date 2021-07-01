import User from '@/models/User.model';

export const getUserId = async (googleId: string) => {
  try {
    if (!googleId) return null;
    const user = await User.findOne({ googleId });
    return user._id || null;
  } catch (error) {
    console.log(error);
    return null;
  }
};
