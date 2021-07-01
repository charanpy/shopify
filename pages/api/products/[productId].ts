import { handleMongoError } from './../../../utils/mongo-error';
import Product from '@/models/Product.model';
import dbConnect from 'utils/db';
import { NextApiRequest, NextApiResponse } from 'next';

const productRecommendationHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  if (req.method === 'GET') {
    dbConnect();
    const { productId } = req.query;
    try {
      const product = await Product.findById(productId).select(
        'category stock specificity name price image _id description'
      );
      return res.status(200).json({
        product,
      });
    } catch (error) {
      const [code, message] = handleMongoError(error);
      return res.status(code as number).json({
        message,
      });
    }
  }
};

export default productRecommendationHandler;
