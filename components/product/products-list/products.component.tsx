import React, { useContext } from 'react';
import Link from 'next/link';
import ImageComponent from '@/components/Image/Image';
import { Button, Typography } from '@material-ui/core';
import { useProductStyles } from '@/styles/product.style';
import { currencyFormat } from '@/utils/currency-formatter';
import { CartContext } from '@/context/Cart/Cart';

const stripName = (name: string) => {
  const nameToArray = name?.split(' ');
  if (nameToArray.length < 1) return nameToArray[0];
  const [firstPart, secondPart] = nameToArray;
  return `${firstPart} ${secondPart}`;
};

const Products = ({ item, auth, cart, order }) => {
  const { image, name, price, _id } = cart ? item.productId : item;
  const classes = useProductStyles();

  const { isCartProduct, addCart } = useContext(CartContext);

  const buttonText = () => {
    const added = isCartProduct(_id);
    return added ? 'REMOVE FROM CART' : 'ADD TO CART';
  };

  const handleClick = () => addCart(cart ? item.productId : item);

  return (
    <li className={`${classes.productContainer}`}>
      <div className='flex-row mb-1'>
        <Link href={`/product/${_id}`}>
          <a className={classes.link}>
            <ImageComponent src={image} width={230} height={140} alt={name} />
          </a>
        </Link>
        <div className={classes.productNameContainer}>
          <Typography
            variant='subtitle1'
            className={`${classes.price} capitalize`}
          >
            {stripName(name)}
          </Typography>

          {auth && !order && (
            <Button variant='outlined' color='secondary' onClick={handleClick}>
              {buttonText()}
            </Button>
          )}
        </div>
      </div>
      <div className='flex-row flex-center'>
        <Typography
          variant='h6'
          className={`${classes.price} ${classes.margin}`}
        >
          ₹{currencyFormat(price)}
        </Typography>
      </div>
    </li>
  );
};

export default Products;
