import React from 'react';
import clsx from 'clsx';
import { AppBar, Toolbar, IconButton } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import CartCount from './cart';

const Header = ({ classes, handleDrawerOpen, open }) => {
  console.log('Header');
  return (
    <AppBar
      position='fixed'
      className={clsx(classes.appBar, classes.header, {
        [classes.appBarShift]: open,
      })}
    >
      <Toolbar>
        <IconButton
          color='inherit'
          aria-label='open drawer'
          onClick={handleDrawerOpen}
          edge='start'
          className={clsx(classes.menuButton, {
            [classes.hide]: open,
          })}
        >
          <Menu />
        </IconButton>
        <h1 className={`${classes.brand} custom f-300`}>Shopify</h1>
      </Toolbar>
      <div className='flex-row'>
        <CartCount />
      </div>
    </AppBar>
  );
};

export default Header;
