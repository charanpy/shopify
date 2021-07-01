import { useState, useEffect } from 'react';
import axios from 'axios';
import { CartProduct } from './../../types/Product.type';
import { Cart } from '@/types/Product.type';

const UseCart = () => {
  const [cart, setCart] = useState<Cart[] | []>([]);

  console.log(process.env.URL, 'context', cart);

  useEffect(() => {
    axios
      .get(`${process.env.URL}/api/cart`)
      .then((res) => {
        const { cart } = res.data;
        console.log(cart);
        setCart(cart);
      })
      .catch((e) => console.log(e));
  }, []);

  const deleteRequest = async (productId?: string) => {
    await axios.post(`${process.env.URL}/api/cart/delete`, {
      productId: productId || null,
    });
  };

  const deleteCart = async (id?: string, productIndex?: number) => {
    const cartItems = [...cart];
    cartItems.splice(productIndex, 1);

    await deleteRequest(id || null)
      .then(() => {
        console.log('deleted');
        setCart(() => [...cartItems]);
      })
      .catch((e) => console.log(e));
    return;
  };

  const addCart = (item: CartProduct) => {
    if (cart.length) {
      const productIndex = cart.findIndex(
        (product: Cart) => product.productId._id === item._id
      );

      if (productIndex !== -1) {
        return deleteCart(cart[productIndex].productId._id, productIndex);
      }
    }
    const newCart = {
      productId: { ...item },
    };

    axios
      .post(`${process.env.URL}/api/cart/add`, {
        productId: item._id,
      })
      .then((res) => {
        console.log(res.data);
        setCart((data) => [...data, newCart]);
      })
      .catch((e) => console.log(e));
    return;
  };

  const clearCart = () => {
    return;
  };

  const isCartProduct = (id: string) => {
    if (!cart.length || !id) return false;
    return cart.some((product: Cart) => product?.productId._id === id);
  };

  return [cart, addCart, deleteCart, clearCart, isCartProduct];
};

export default UseCart;
