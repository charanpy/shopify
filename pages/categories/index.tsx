import React from 'react';
import { getCategory } from 'lib/category';
import { CategoryTypes } from 'types/Category.type';
import { pageProps } from 'utils/page-props';
import CategoryList from '@/components/category-list/category-list.container';

const Categories = ({ categories }) => {
  return (
    <>
      <CategoryList categories={categories} />
    </>
  );
};

export const getStaticProps = async () => {
  const categories: CategoryTypes[] | boolean = await getCategory();

  return pageProps('categories', categories);
};

export default Categories;
