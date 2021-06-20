import React, { FC } from 'react';
import Image from 'next/image';
import { RecommendationProduct } from '@/types/Product.type';
import { useCategoryStyles } from '@/styles/category.style';
import { Typography } from '@material-ui/core';

interface recommendationProps {
  item: RecommendationProduct;
  handleClick: (id: string) => {};
}

const Recommendation: FC<recommendationProps> = ({ item, handleClick }) => {
  const classes = useCategoryStyles();

  return (
    <li
      onClick={() => handleClick(item._id)}
      className={`${classes.recommendation} cursor flex-column`}
    >
      <Image
        width={300}
        height={300}
        src={item.image}
        objectFit='contain'
        placeholder='blur'
        blurDataURL='/load.png'
        alt={item.name || 'product-image'}
        className={classes.image}
      />
      <Typography variant='subtitle1' style={{ textAlign: 'center' }}>
        {item.name}-
      </Typography>
      <Typography variant='subtitle1' style={{ textAlign: 'center' }}>
        ₹{new Intl.NumberFormat().format(item.price) || 500}
      </Typography>
    </li>
  );
};

export default Recommendation;
