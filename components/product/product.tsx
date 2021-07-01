import React, { FC, useState, useContext } from 'react';
import ImageComponent from '../Image/Image';
import { Typography } from '@material-ui/core';
import Container from '@/layout/Container';
import Button from '@/components/Button/Button.component';
import { Product as ProductType } from '@/types/Product.type';
import { withSession } from '../Session/with-session.component';
import { currencyFormat } from '@/utils/currency-formatter';
import { useProductStyles } from '@/styles/product.style';
import ProductDetail from './product-detail';
import { CartContext } from '@/context/Cart/Cart';

interface productProps {
  product: ProductType;
  session?: any;
}

const Product: FC<productProps> = ({ product, session = null }) => {
  const { image, name, price, description = null, specificity } = product;
  const { addCart, isCartProduct } = useContext(CartContext);
  const [open, setOpen] = useState(false);
  const classes = useProductStyles();
  const handleToggle = () => {
    setOpen((open) => !open);
  };
  const handleClick = () => {
    addCart(product);
  };
  const buttonText = () => {
    const added = isCartProduct(product._id);
    return added ? 'REMOVE FROM CART' : 'ADD TO CART';
  };

  return (
    <Container>
      <ImageComponent width={370} height={270} src={image} alt={name} />
      <Typography variant='subtitle1' className={`${classes.product} mt-1`}>
        {name}-
      </Typography>
      <Typography
        variant='subtitle1'
        className={`${classes.product} ${classes.price}`}
      >
        ₹{currencyFormat(price)}
      </Typography>
      <Button handleClick={session && handleClick}>
        {session ? buttonText() : 'LOGIN'}
      </Button>
      <Button google handleClick={handleToggle}>
        ABOUT
      </Button>
      <ProductDetail
        open={open}
        handleToggle={handleToggle}
        description={description}
        specificity={specificity}
        name={name}
      />
    </Container>
  );
};

export default withSession(Product);
