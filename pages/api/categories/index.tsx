import { NextApiResponse, NextApiRequest } from 'next';
import Category from '@/models/Category.model';
import dbConnect from 'utils/db';

const getCategories = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      await dbConnect();
      const categories = await Category.find({}).select('_id name image');
      return res.status(200).json(categories);
    } catch (error) {
      res.status(500).json({
        message: 'Server error',
      });
    }
  }
};

export default getCategories;
