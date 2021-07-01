import { Cart } from '@/types/Product.type';

export const totalAmount = (cart: Cart[]): number => {
  return cart.reduce((acc, product) => acc + product.productId.price, 0);
};
