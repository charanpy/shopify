import React from 'react';
import { Chip } from '@material-ui/core';
import { useHomeStyles } from '@/styles/home.style';
import router from 'next/router';

const CategoryList = ({ item }) => {
  const classes = useHomeStyles();
  const handleClick = () => {
    localStorage.setItem('shopifyCategory', item.name);
    router.push(`/categories/products/${item._id}`);
  };
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
