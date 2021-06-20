import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useCategoryStyles = makeStyles(
  () =>
    createStyles({
      category: {
        flexBasis: '30%',
        display: 'flex',
        flexDirection: 'column',
        margin: '0 2rem',
      },
      image: {
        transform: 'scale(1)',
        transition: 'all 500ms ease-in-out',

        '&:hover': {
          transform: 'scale(1.08)',
        },
      },
      container: {
        boxShadow:
          '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
      },
      categoryName: {
        marginTop: '1rem',
        fontSize: '1.1rem',
        textTransform: 'capitalize',
        fontWeight: 400,
      },
      recommendation: {
        display: 'flex',
        width: '20%',
        '@media(max-width:800px)': {
          width: '45%',
          marginBottom: '4rem',
        },
      },
      category_list: {
        '@media(min-width:750px)': {
          justifyContent: 'flex-start',
        },
        '@media(max-width:749px) and (orientation:portrait)': {
          justifyContent: 'space-evenly',
        },
      },
    }),
  {
    index: 1,
  }
);
