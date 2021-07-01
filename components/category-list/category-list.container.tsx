import router from 'next/router';
import React, { FC } from 'react';
import Container from '@/layout/Container';
import { CategoryTypes } from 'types/Category.type';
import CategoryList from './category-list';
import ArrayMap from '@/components/ArrayMap/array-map';
import { Typography } from '@material-ui/core';

interface categoryListProps {
  categories: CategoryTypes[];
}
const CategoryListContainer: FC<categoryListProps> = ({ categories }) => {
  const handleCategoryClick = (path: string, name: string) => {
    localStorage.setItem('shopifyCategory', name);

    router.push(`/categories/products/${path}`);
  };

  return (
    <Container>
      <Typography variant='h5' className='mb-1 roboto capitalize'>
        Categories
      </Typography>
      <ArrayMap
        className='flex-row flex-center flex-wrap mb-1'
        data={categories}
        navigate={handleCategoryClick}
        Component={CategoryList}
      />
    </Container>
  );
};

export default CategoryListContainer;
