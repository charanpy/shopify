import Cart from '@/models/Cart.model';
import { handleMongoError } from '@/utils/mongo-error';
import { NextApiRequest, NextApiResponse } from 'next';

const getCart = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') return;
  const { userId } = req.body;
  if (!userId) {
    return res.status(401).json({
      message: 'Not authorized',
    });
  }
  try {
    const orders = await Cart.find({
      $and: [{ userId }, { paid: true }],
    }).populate('productId');

    return res.status(200).json({
      orders,
    });
  } catch (e) {
    const [code, message] = handleMongoError(e);
    return res.status(code as number).json({
      message,
    });
  }
};

export default getCart;
