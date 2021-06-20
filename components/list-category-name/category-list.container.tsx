import React from 'react';
import { Typography } from '@material-ui/core';
import { useCategoryStyles } from '@/styles/category.style';
import CategoryList from './category-list.component';
import ArrayMap from '../ArrayMap/array-map';

const CategoryListContainer = ({ categories }) => {
  const styles = useCategoryStyles();

  return (
    <>
      <Typography variant='h6' className='mb-1 roboto'>
        Category
      </Typography>
      <ArrayMap
        className={`flex-row flex-wrap ${styles.category_list}`}
        data={categories}
        Component={CategoryList}
      />
    </>
  );
};

export default CategoryListContainer;
