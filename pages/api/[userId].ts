import { NextApiRequest, NextApiResponse } from 'next';
import Profile from '@/models/Profile.model';
import { handleMongoError } from '@/utils/mongo-error';

const getProfile = async (userId: string) => {
  return await Profile.findOne({ userId });
};

const profileHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { userId } = req.query;

    if (req.method === 'GET') {
      const user = await getProfile(userId as string);
      return res.status(200).json({ user });
    }
    if (req.method === 'PATCH') {
      const { userData } = req.body;
      const user = await Profile.findOneAndUpdate({ userId }, userData, {
        new: true,
      });
      return res.status(200).json({ user });
    }
  } catch (error) {
    const [code, message] = handleMongoError(error);
    return res.status(code as number).json({ message });
  }
};

export default profileHandler;
