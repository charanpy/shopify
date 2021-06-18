import { Alert } from '@material-ui/lab';
import React, { useContext } from 'react';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Collapse from '@material-ui/core/Collapse';
import { AlertContext } from '../context/Alert/Alert';

const AlertComponent: React.FC = () => {
  const { open, closeAlert, variant, title } = useContext(AlertContext);
  console.log('alert mount', open);

  return (
    <Collapse in={open} timeout={500} collapsedHeight={0} className='z'>
      <Alert
        variant='filled'
        severity={variant}
        action={
          <IconButton
            aria-label='close'
            color='inherit'
            size='small'
            onClick={() => closeAlert()}
          >
            <CloseIcon fontSize='inherit' />
          </IconButton>
        }
      >
        {title}
      </Alert>
    </Collapse>
  );
};

export default React.memo(AlertComponent);
