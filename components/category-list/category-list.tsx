import React, { FC } from 'react';
import Image from 'next/image';
import { CategoryTypes } from 'types/Category.type';
import { useCategoryStyles } from '@/styles/category.style';

interface categoryProps {
  item: CategoryTypes;
  navigate: Function;
}

const CategoryList: FC<categoryProps> = ({
  item: { name, image },
  navigate,
}) => {
  const classes = useCategoryStyles();
  return (
    <li
      className={`${classes.category} flex-center cursor`}
      onClick={() => navigate(name)}
    >
      <Image
        src={image}
        width={230}
        height={220}
        alt={name}
        objectFit='contain'
        blurDataURL='/load.png'
        placeholder='blur'
        quality={100}
        className={classes.image}
      />
      <p className={`${classes.categoryName} custom`}>{name}</p>
    </li>
  );
};

export default CategoryList;
