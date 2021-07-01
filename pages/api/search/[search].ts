import Category from '@/models/Category.model';
import { NextApiRequest, NextApiResponse } from 'next';
import { handleMongoError } from '../../../utils/mongo-error';
import Product from '@/models/Product.model';
import dbConnect from 'utils/db';

const searchProduct = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'GET') return;
  dbConnect();
  const { search }: { search?: string } = req.query;
  if (!search) {
    return res.redirect('/');
  }
  try {
    const products = await Product.find({
      name: {
        $regex: search,
        $options: 'i',
      },
    });
    if (!products.length) {
      const categoryId = await Category.findOne({
        name: { $regex: search, $options: 'i' },
      }).select('_id');
      if (!categoryId?._id) return res.status(200).json({ products: [] });
      const products = await Product.find({ category: categoryId._id });
      return res.status(200).json({ products });
    }
    return res.status(200).json({ products });
  } catch (error) {
    const [code, message] = handleMongoError(error);
    return res.status(code as number).json({ message });
  }
};

export default searchProduct;
