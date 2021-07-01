import React from 'react';
import { getCategories, getCategory } from 'lib/category';
import { CategoryTypes } from 'types/Category.type';
import CategoryList from '@/components/category-list/category-list.container';
import Seo from '@/components/seo/Seo';

const Categories = ({ categories = [] }) => {
  console.log(categories, 88888);

  return (
    <>
      <Seo title='Categories' url='/categories' />
      <CategoryList categories={categories} />
    </>
  );
};

export const getStaticProps = async () => {
  const categories = await getCategories();

  return {
    props: {
      categories: JSON.parse(JSON.stringify(categories)) || [],
    },
    revalidate: 86400,
  };
};

export default Categories;
