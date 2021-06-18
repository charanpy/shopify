import React from 'react';
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import NavigateItems from './navigate-items';
import { useNavbarStyles } from '@/styles/Navbar.style';
import Header from '../Header';
import { navData, unAuthNavData } from './navar.util';
import { withSession } from '@/components/Session/with-session.component';

const MiniDrawer = ({ session = null }) => {
  const classes = useNavbarStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const navItems = session?.user ? navData : unAuthNavData;

  const handleDrawer = () => setOpen((open) => !open);

  return (
    <div>
      <Header classes={classes} handleDrawerOpen={handleDrawer} open={open} />
      <Drawer
        variant='permanent'
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawer}>
            {theme.direction === 'rtl' ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <NavigateItems
          listStyle={classes.list}
          iconStyle={classes.icon}
          menu={navItems}
        />
      </Drawer>
    </div>
  );
};

export default withSession(MiniDrawer);
