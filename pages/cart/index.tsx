import React, { useContext, useEffect } from 'react';
import { getSession } from 'next-auth/client';
import { Typography } from '@material-ui/core';
import { AlertContext } from '@/context/Alert/Alert';
import Container from '@/layout/Container';
import ProductsContainer from '@/components/product/products-list/products.container';
import { CartContext } from '@/context/Cart/Cart';
import CartAmount from '@/components/cart/cart-amount';
import { notFound } from 'lib/page-props';
import Seo from '@/components/seo/Seo';

const Cart = ({ user, query }) => {
  const { openAlert } = useContext(AlertContext);
  useEffect(() => {
    if (query.success) {
      openAlert({ variant: 'success', title: 'Payment successfull.' });
    }
    window.history.replaceState(null, '', '/cart');
  }, []);
  const { cart } = useContext(CartContext);

  return (
    <>
      <Seo title='Your Cart' url='/cart' />
      <Container center={false} content={false}>
        <Typography variant='h5' className='flex-row flex-center mt-1'>
          {cart.length ? 'Your Cart' : 'Your Cart is empty'}
        </Typography>
        {cart.length ? (
          <>
            <ProductsContainer products={cart} cart>
              <CartAmount cart={cart} user={user} />
            </ProductsContainer>
          </>
        ) : (
          ''
        )}
      </Container>
    </>
  );
};

export const getServerSideProps = async (context) => {
  const session = await getSession({ req: context.req });
  if (!session) return notFound();
  return {
    props: {
      user: session.user,
      query: context.query,
    },
  };
};

export default Cart;
