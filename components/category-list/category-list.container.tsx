import router from 'next/router';
import React, { FC } from 'react';
import Container from '@/layout/Container';
import { CategoryTypes } from 'types/Category.type';
import CategoryList from './category-list';

interface categoryListProps {
  categories: CategoryTypes[];
}
const CategoryListContainer: FC<categoryListProps> = ({ categories }) => {
  const handleCategoryClick = (path: string) => router.push(`/${path}`);

  return (
    <Container>
      <ul
        className='flex-row flex-center flex-wrap mt-20'
        style={{ justifyContent: 'space-around' }}
      >
        {categories.length &&
          categories.map((category: CategoryTypes) => (
            <CategoryList
              category={category}
              navigate={handleCategoryClick}
              key={category._id}
            />
          ))}
      </ul>
    </Container>
  );
};

export default CategoryListContainer;
