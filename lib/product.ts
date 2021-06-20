import axios from 'axios';

export const homePageRecommendation = async () => {
  try {
    const { data } = await axios.get(
      `${process.env.URL}/api/products/category/recommendation`
    );
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
