import router from 'next/router';
import React, { FC } from 'react';
import Container from '@/layout/Container';
import { CategoryTypes } from 'types/Category.type';
import CategoryList from './category-list';
import ArrayMap from '@/components/ArrayMap/array-map';

interface categoryListProps {
  categories: CategoryTypes[];
}
const CategoryListContainer: FC<categoryListProps> = ({ categories }) => {
  const handleCategoryClick = (path: string) => router.push(`/${path}`);

  return (
    <Container>
      <section className='mt-20 flex-column flex-center'>
        <h1 className='mb-1'>CATEGORIES</h1>
        <ArrayMap
          className='flex-row flex-center flex-wrap mb-1'
          data={categories}
          navigate={handleCategoryClick}
          Component={CategoryList}
        />
      </section>
    </Container>
  );
};

export default CategoryListContainer;
