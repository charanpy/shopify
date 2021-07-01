import React, { FC } from 'react';
import ImageComponent from '../Image/Image';
import { CategoryTypes } from 'types/Category.type';
import { useCategoryStyles } from '@/styles/category.style';
import { Typography } from '@material-ui/core';

interface categoryProps {
  item: CategoryTypes;
  navigate: Function;
}

const CategoryList: FC<categoryProps> = ({
  item: { name, image, _id },
  navigate,
}) => {
  const classes = useCategoryStyles();
  return (
    <li
      className={`${classes.category} flex-center cursor`}
      onClick={() => navigate(_id, name)}
    >
      <ImageComponent
        src={image}
        width={230}
        height={220}
        alt={name}
        className={classes.image}
      />
      <Typography variant='subtitle1' className='capitalize roboto'>
        {name}
      </Typography>
    </li>
  );
};

export default CategoryList;
