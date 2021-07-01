import axios from 'axios';

export const getOrders = async (userId: string) => {
  try {
    const {
      data: { orders },
    } = await axios.post(`${process.env.URL}/api/cart/order`, {
      userId,
    });
    return orders;
  } catch (error) {
    return null;
  }
};
