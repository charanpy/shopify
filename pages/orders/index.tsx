import React from 'react';
import { getSession } from 'next-auth/client';
import Container from '@/layout/Container';
import { Typography } from '@material-ui/core';
import ProductsContainer from '@/components/product/products-list/products.container';
import { User } from '@/types/User.types';
import { getOrders } from 'lib/order';
import { dataProps, notFound } from 'lib/page-props';
import Seo from '@/components/seo/Seo';

const Orders = ({ orders }) => {
  return (
    <>
      <Seo title='Order' description='Your orders' url='/orders' />
      <Container center={false} content={false}>
        <Typography variant='h5' className='flex-row flex-center mt-1'>
          {orders.length ? 'Your Orders' : 'No Order found'}
        </Typography>
        {orders.length ? (
          <>
            <ProductsContainer products={orders} cart orderPage />
          </>
        ) : (
          ''
        )}
      </Container>
    </>
  );
};

export const getServerSideProps = async ({ req }) => {
  const session = await getSession({ req });
  if (!session) return notFound();
  const user = session.user as User;
  const orders = await getOrders(user._id);

  if (orders) return dataProps('orders', orders);
  return notFound();
};

export default Orders;
