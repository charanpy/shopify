import Cart from 'models/Cart.model';
import { handleMongoError } from 'utils/mongo-error';
import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/client';
import { User as UserType } from 'types/User.types';

const getCart = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'GET') return;
  const session = await getSession({ req });
  if (!session?.user || !session?.user?.email) {
    return res.status(401).json({
      message: 'Not authorized',
    });
  }
  const user = session.user as UserType;
  let userId = user._id;
  if (!userId) {
    return res.status(401).json({
      message: 'Not authorized',
    });
  }
  try {
    const cart = await Cart.find({ userId, paid: false }).populate('productId');
    if (!cart) {
      return res.status(200).json({ cartItems: [], userId });
    }
    return res.status(200).json({ cart, userId });
  } catch (e) {
    console.log(e, e.response);

    const [code, message] = handleMongoError(e);
    return res.status(code as number).json({
      message,
    });
  }
};

export default getCart;
