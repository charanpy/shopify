import { handleMongoError } from 'utils/mongo-error';
import Product from '@/models/Product.model';
import dbConnect from 'utils/db';
import { NextApiRequest, NextApiResponse } from 'next';

const productRecommendationHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  if (req.method === 'GET') {
    dbConnect();
    const { categoryId } = req.query;
    if (!categoryId) {
      return res.status(400).json({
        message: 'Invalid id',
      });
    }
    try {
      const products = await Product.find({ category: categoryId })
        .select('category name price image _id')
        .sort({ price: 1 });
      return res.status(200).json({
        products,
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
