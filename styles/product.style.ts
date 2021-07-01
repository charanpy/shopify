import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useProductStyles = makeStyles(
  () =>
    createStyles({
      product: {
        textTransform: 'capitalize',
        fontSize: '1.3rem',
      },
      price: {
        fontWeight: 500,
      },
      productContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        borderBottom: '.3px solid rgba(0,0,0,0.1)',
        marginBottom: '2rem',
      },
      margin: {
        marginRight: '2rem',
      },
      productNameContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
      },
      descending: {
        flexDirection: 'column-reverse',
      },
      link: {
        textDecoration: 'none',
        color: 'inherit',
      },
      flexEnd: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        marginRight: '2rem',
      },
    }),
  {
    index: 1,
  }
);
