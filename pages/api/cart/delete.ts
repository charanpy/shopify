import Cart from 'models/Cart.model';
import { handleMongoError } from 'utils/mongo-error';
import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/client';
import { User } from 'types/User.types';

const deleteCart = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') return;
  const session = await getSession({ req });
  if (!session?.user || !session?.user?.email) {
    return res.status(401).json({
      message: 'Not authorized',
    });
  }
  const user = session.user as User;
  const userId = user._id;
  if (!userId) {
    return res.status(401).json({
      message: 'Not authorized',
    });
  }
  const { productId = null } = req.body;
  try {
    if (!productId) {
      await Cart.deleteMany({ userId, paid: false });
    } else {
      await Cart.deleteOne({ userId, productId, paid: false });
    }
    return res.status(200).json({
      cart: [],
    });
  } catch (e) {
    const [code, message] = handleMongoError(e);
    return res.status(code as number).json({
      message,
    });
  }
};

export default deleteCart;
