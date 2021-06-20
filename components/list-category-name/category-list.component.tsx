import React from 'react';
import { Chip } from '@material-ui/core';
import { useHomeStyles } from '@/styles/home.style';

const CategoryList = ({ item }) => {
  const classes = useHomeStyles();
  const handleClick = () => {};
  return (
    <li className='mb-1'>
      <Chip
        label={item.name}
        onClick={handleClick}
        className={`${classes.category} custom`}
      />
    </li>
  );
};

export default CategoryList;
