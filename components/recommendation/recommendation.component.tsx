import React, { FC } from 'react';
import ImageComponent from '@/components/Image/Image';
import { RecommendationProduct } from '@/types/Product.type';
import { useCategoryStyles } from '@/styles/category.style';
import { Typography } from '@material-ui/core';
import { currencyFormat } from '@/utils/currency-formatter';

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
      <ImageComponent
        width={300}
        height={300}
        src={item.image}
        alt={item.name || 'product-image'}
        className={classes.image}
      />
      <Typography variant='subtitle1' style={{ textAlign: 'center' }}>
        {item.name}-
      </Typography>
      <Typography variant='subtitle1' style={{ textAlign: 'center' }}>
        ₹{currencyFormat(item?.price)}
      </Typography>
    </li>
  );
};

export default Recommendation;
