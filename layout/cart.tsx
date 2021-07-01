import React, { useContext } from 'react';
import Link from 'next/link';
import { Badge } from '@material-ui/core';
import { ShoppingCartOutlined } from '@material-ui/icons';
import { CartContext } from '@/context/Cart/Cart';

const CartCount = () => {
  const { cart } = useContext(CartContext);
  return (
    <Link href='/cart'>
      <a
        className='cursor flex-row flex-center'
        style={{ marginRight: '2rem', color: 'inherit' }}
      >
        <Badge badgeContent={cart.length} color='primary'>
          <ShoppingCartOutlined />
        </Badge>
      </a>
    </Link>
  );
};

export default CartCount;
