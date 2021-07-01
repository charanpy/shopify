import React from 'react';
import router from 'next/router';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Tooltip,
} from '@material-ui/core';
import { signOut } from 'next-auth/client';

const NavigateItems = ({ listStyle, iconStyle, menu }) => {
  const [selected, setSelected] = React.useState(null);
  React.useEffect(() => {
    const path = router.pathname;
    const route = path === '/' ? '/' : path.split('/')[1];
    setSelected(() => route);
  }, []);

  const navigate = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    path: string
  ) => {
    e.preventDefault();
    const pathName = path.toLowerCase();
    if (pathName.includes('login')) {
      setSelected(() => pathName);
      router.push('/auth/login');
      return;
    }
    if (pathName === 'logout') {
      signOut();
      return;
    }
    setSelected(() => pathName);
    router.push(path === '/' ? '/' : `/${pathName}`);
  };
  return (
    <List className={listStyle}>
      {menu.map(({ name, Icon }) => (
        <Tooltip
          key={name}
          title={name === '/' ? 'Products' : name}
          placement='right'
          arrow
        >
          <ListItem
            button
            onClick={(e) => navigate(e, name)}
            selected={selected === name.toLowerCase()}
          >
            <ListItemIcon>
              <Icon className={iconStyle} />
            </ListItemIcon>
            <ListItemText primary={name === '/' ? 'Products' : name} />
          </ListItem>
        </Tooltip>
      ))}
    </List>
  );
};

export default NavigateItems;
