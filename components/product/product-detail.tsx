import React, { FC } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';

interface ProductDetailProps {
  open: boolean;
  handleToggle: () => void;
  description: null | string;
  specificity: string;
  name: string;
}

const ProductDetail: FC<ProductDetailProps> = ({
  open,
  handleToggle,
  description,
  specificity,
  name,
}) => {
  return (
    <Dialog
      open={open}
      onClose={handleToggle}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
    >
      <DialogTitle id='alert-dialog-title capitalize'>{name}</DialogTitle>
      <DialogContent>
        <DialogContentText id='alert-dialog-description'>
          Product in stock <br /> Specificity-{specificity}
          <br />
          {description ? description : ''}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleToggle} color='primary' autoFocus>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProductDetail;
