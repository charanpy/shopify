import Category from '@/models/Category.model';
import dbConnect from '@/utils/db';

export const getCategory = async () => {
  try {
    const res = await fetch(`/api/categories`);
    return await res.json();
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getCategories = async () => {
  try {
    await dbConnect();
    const categories = await Category.find({}).select('_id name image').lean();
    return categories;
  } catch (error) {
    return [];
  }
};
