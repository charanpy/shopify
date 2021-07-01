import React from 'react';
import Container from '@/layout/Container';
import Products from './products.component';
import ArrayMap from '@/components/ArrayMap/array-map';
import SortInput from './sort-input';
import { useProductStyles } from '@/styles/product.style';
import { withSession } from '@/components/Session/with-session.component';

const ProductContainer = ({
  products,
  session = null,
  cart = false,
  children = null,
  orderPage = false,
}) => {
  const classes = useProductStyles();
  const [order, setOrder] = React.useState(false);
  const handleChange = () => {
    setOrder((order) => !order);
  };
  return (
    <Container center={false} content={false}>
      {!cart ? <SortInput order={order} handleChange={handleChange} /> : ''}
      <ArrayMap
        className={`flex-column ${order && classes.descending}`}
        data={products}
        Component={Products}
        auth={!!session?.user?.email}
        cart={cart}
        order={orderPage}
      />
      {children && children}
    </Container>
  );
};

export default withSession(ProductContainer);
