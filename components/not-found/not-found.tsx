import React from 'react';
import { Typography } from '@material-ui/core';
import Container from '@/layout/Container';
import ButtonComponent from '../Button/Button.component';
import router from 'next/router';

const NotFound = () => {
  const handleClick = () => router.push('/');
  return (
    <Container center>
      <Typography variant='subtitle1'>No Products Found</Typography>
      <ButtonComponent handleClick={handleClick}>View Products</ButtonComponent>
    </Container>
  );
};

export default NotFound;
