import React, { FC } from 'react';
import Image from 'next/image';
import { CategoryTypes } from 'types/Category.type';
import { useCategoryStyles } from '@/styles/category.style';

interface categoryProps {
  category: CategoryTypes;
  navigate: Function;
}

const CategoryList: FC<categoryProps> = ({
  category: { name, image, _id },
  navigate,
}) => {
  const classes = useCategoryStyles();
  return (
    <li
      className={`${classes.category} flex-center`}
      onClick={() => navigate(name)}
    >
      <div style={{ width: '250px', height: '250px', textAlign: 'center' }}>
        <Image
          src={image}
          width={250}
          height={245}
          alt={name}
          blurDataURL='/load.png'
          placeholder='blur'
          quality={100}
        />
      </div>
    </li>
  );
};

export default CategoryList;
