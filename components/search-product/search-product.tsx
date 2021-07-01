import React, { SyntheticEvent, useRef } from 'react';
import router from 'next/router';
import { SearchOutlined } from '@material-ui/icons';
import InputComponent from '../Input/Input.component';

const SearchProduct = () => {
  const searchRef = useRef(null);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    const search = searchRef?.current?.value;
    if (!search) return;
    return router.push(`/${search}`);
  };
  return (
    <form className='flex-column flex-center mb-1' onSubmit={handleSubmit}>
      <InputComponent name='Search' type='search' ref={searchRef}>
        <SearchOutlined color='primary' />
      </InputComponent>
    </form>
  );
};

export default SearchProduct;
