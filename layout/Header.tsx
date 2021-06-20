import React from 'react';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
// import Button from '@/components/Button/Button.component';

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
          <MenuIcon />
        </IconButton>
        <h1 className={`${classes.brand} custom f-300`}>Shopify</h1>
      </Toolbar>
      {/* <div className='flex-row flex-center'>
        <Button sm>Products</Button>
      </div> */}
    </AppBar>
  );
};

export default Header;
