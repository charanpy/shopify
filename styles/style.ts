import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles(
  (theme: Theme) =>
    createStyles({
      textInput: {
        marginBottom: '1rem',
        width: '250px',
      },
      label: {
        fontSize: '15px',
      },
      button: {
        width: '255px',
        padding: '12px',
        fontSize: '16px',
        border: 'none',
        fontWeight: 400,
        marginTop: '1.5rem',
        background: '#7A17CE',
        marginLeft: '3px',
        color: 'white',
        borderRadius: '25px',
        cursor: 'pointer',
        transition: 'all 280ms linear',
        '&:hover': {
          background: '#6618A8',
        },
      },
      google: {
        backgroundColor: 'transparent',
        borderRadius: '0',
        border: '1px solid #999',
        marginTop: '1rem',
        color: 'black',
        position: 'relative',
        '&:hover': {
          background: '#181818',
          color: 'white',
        },
      },
      header: {
        marginBottom: '1.5rem',
      },
      register: {
        marginTop: '1rem',
        fontWeight: 400,
        color: 'rgba(0,0,0,0.5)',
      },
    }),
  {
    index: 1,
  }
);

export default useStyles;
