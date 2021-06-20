import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useHomeStyles = makeStyles(
  () =>
    createStyles({
      category: {
        marginRight: '2rem',
        textTransform: 'capitalize',
        borderRadius: '5px',
        width: '90px',
        background: '#212529',
        color: 'white',
        transition: 'all 500ms linear',
        '&:hover': {
          background: 'rgba(0,0,0,0.7)',
        },
      },
    }),
  {
    index: 1,
  }
);
