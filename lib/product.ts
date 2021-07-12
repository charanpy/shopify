import Product from '@/models/Product.model';
import dbConnect from '@/utils/db';
import axios from 'axios';
import { notFound, dataProps } from './page-props';

export const homePageRecommendation = async () => {
  try {
    const res = await fetch('/api/products/category/recommendation');
    return await res.json();
  } catch (error) {
    console.log(error, 'fu error', process.env.URL);
    return [];
  }
};

export const getProductById = async (productId: string) => {
  try {
    const {
      data: { product },
    } = await axios.get(`/api/products/${productId}`);
    // console.log('heeeeee', product);
    // if (!product || !product?.name) {
    //   return notFound();
    // }

    return dataProps('product', product);
  } catch (e) {
    console.log(e);

    return notFound();
  }
};

export const getProductByCategoryId = async (
  categoryId: string,
  staticPage = false
) => {
  try {
    const res = await fetch(`/api/products/category/${categoryId}`);
    const products = (await res.json()).products;
    if (staticPage) {
      return products || [];
    }
    if (!products.length) {
      return notFound();
    }
    return dataProps('products', products);
  } catch (e) {
    return notFound();
  }
};

export const searchProduct = async (searchTerm: string) => {
  try {
    const {
      data: { products },
    } = await axios.get(`${process.env.URL}/api/search/${searchTerm}`);
    return products;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const homePage = async () => {
  try {
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
    return { men, women, electronics, games };
  } catch (error) {
    return null;
  }
};

export const getCategoryProduct = async (categoryId) => {
  try {
    const products = await Product.find({ category: categoryId })
      .select('category name price image _id')
      .sort({ price: 1 });
    return products;
  } catch (error) {
    return [];
  }
};
