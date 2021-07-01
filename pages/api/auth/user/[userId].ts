import { handleMongoError } from './../../../../utils/mongo-error';
import User from '@/models/User.model';
import { NextApiRequest, NextApiResponse } from 'next';

const getUserId = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'GET') return;
  const { userId: googleId } = req.query;
  if (!googleId) {
    return res.status(400).json({
      message: 'Invalid req',
    });
  }
  try {
    const user = await User.findOne({ googleId: googleId + '' });
    console.log(user, 'api');

    return res.status(200).json({
      _id: user?._id || null,
    });
  } catch (error) {
    const [code, message] = handleMongoError(error);
    return res.status(code as number).json({ message });
  }
};

export default getUserId;
