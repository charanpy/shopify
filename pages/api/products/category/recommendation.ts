import Product from '@/models/Product.model';
import dbConnect from 'utils/db';
import { NextApiRequest, NextApiResponse } from 'next';

const productRecommendationHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  if (req.method === 'GET') {
    dbConnect();
    const men = await Product.find({
      category: '60cc110911ff72b0ada884b8',
      specificity: 'men',
    })
      .select('image name price')
      .limit(4);
    const women = await Product.find({
      category: '60cc110911ff72b0ada884b8',
      specificity: 'women',
    })
      .select('image name price')
      .limit(4);

    const electronics = await Product.find({
      category: '60cc7d9ce6df3d3c6008b707',
    })
      .select('image name price')
      .limit(4);
    const games = await Product.find({
      category: '60cc7d9ce6df3d3c6008b708',
    })
      .select('image name price')
      .limit(4);
    return res.status(200).json({ men, women, electronics, games });
  }
};

export default productRecommendationHandler;
