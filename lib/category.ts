import axios from 'axios';
import { CategoryTypes } from './../types/Category.type';

export const getCategory = async () => {
  try {
    const { data } = await axios.get(`${process.env.URL}/api/categories`);
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
