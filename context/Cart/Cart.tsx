import { createContext, FC, ReactNode } from 'react';
import UseCart from './useCart';
import { Cart, CartProduct } from '@/types/Product.type';

interface cartProps {
  cart: Cart[] | [];
}

interface cartMethodProps extends cartProps {
  addCart: (item: CartProduct) => void;
  deleteCart: (id: string) => void;
  clearCart: () => void;
  isCartProduct: (id: string) => boolean;
}

export const CartContext = createContext<cartMethodProps>({
  cart: [],
  addCart: () => {},
  deleteCart: () => {},
  clearCart: () => {},
  isCartProduct: () => {
    return false;
  },
});

const CartProvider: FC<ReactNode> = ({ children }) => {
  const [cart, addCart, deleteCart, clearCart, isCartProduct, checkSession] =
    UseCart();
  const data = {
    cart,
    addCart,
    deleteCart,
    clearCart,
    isCartProduct,
  };
  //@ts-ignore
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartProvider;
