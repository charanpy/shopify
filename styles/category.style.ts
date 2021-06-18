import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useCategoryStyles = makeStyles(() =>
  createStyles({
    category: {
      flexBasis: '40%',
      display: 'flex',
      flexDirection: 'column',
      marginBottom: '2rem',
    },
    image: {
      opacity: '0.8',
      transform: 'scale(1)',
      transition: 'all 500ms ease-in-out',
      '&:hover': {
        transform: 'scale(1.5)',
      },
    },
  })
);
