import Cart from '@/models/Cart.model';
import { handleMongoError } from '@/utils/mongo-error';
import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/client';
import { User } from 'types/User.types';

const addCart = async (req: NextApiRequest, res: NextApiResponse) => {
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
  const { productId } = req.body;
  if (!productId) {
    return res.status(400).json({
      message: 'Invalid data',
    });
  }
  try {
    const cart = await Cart.findOne({ userId, productId });
    if (cart) {
      return res.status(200).json({ cart: null });
    }
    await Cart.create({ userId, productId });
    return res.status(201).json({ cart: productId });
  } catch (e) {
    const [code, message] = handleMongoError(e);
    return res.status(code as number).json({
      message,
    });
  }
};

export default addCart;
