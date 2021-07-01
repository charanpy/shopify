import React, { FC } from 'react';
import { Typography } from '@material-ui/core';
import Button from '../Button/Button.component';
import { totalAmount } from './calculate-amount';
import { Cart } from '@/types/Product.type';
import { useProductStyles } from '@/styles/product.style';
import StripeButton from '../stripe/stripe';
import { User } from '@/types/User.types';

interface cartTotalProps {
  cart: Cart[];
  user: User;
}
const CartAmount: FC<cartTotalProps> = ({ cart, user }) => {
  const classes = useProductStyles();
  const total = totalAmount(cart) as number;
  return (
    <section className={`${classes.flexEnd} mb-1`}>
      <div className='flex-column flex-center mb-1'>
        <Typography variant='h6'>Total- ₹{totalAmount(cart)}</Typography>
        {/* <Button>ORDER NOW</Button>
         */}
        <StripeButton price={total} user={user} />
      </div>
    </section>
  );
};

export default CartAmount;
