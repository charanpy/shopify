import {
  AccountCircleOutlined,
  ShoppingCartOutlined,
  FavoriteOutlined,
  PaymentOutlined,
  ExitToAppOutlined,
  WhatshotOutlined,
  CategoryOutlined,
} from '@material-ui/icons';

export const navData = [
  {
    name: 'Profile',
    Icon: AccountCircleOutlined,
  },
  {
    name: '/',
    Icon: ShoppingCartOutlined,
  },
  {
    name: 'categories',
    Icon: CategoryOutlined,
  },
  {
    name: 'Orders',
    Icon: PaymentOutlined,
  },
  {
    name: 'Logout',
    Icon: ExitToAppOutlined,
  },
];

export const unAuthNavData = [
  {
    name: 'Login/Register',
    Icon: AccountCircleOutlined,
  },
  navData[1],
];
