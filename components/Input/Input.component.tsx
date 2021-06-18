import React from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import { TextInput } from '../../types/TextInput.types';
import useStyles from '../../styles/style';
import { TextField } from '@material-ui/core';

const InputComponent = React.forwardRef<HTMLInputElement, TextInput>(
  ({ name, type, children }, ref) => {
    const classes = useStyles();
    return (
      <TextField
        required
        label={name}
        inputRef={ref}
        type={type}
        className={classes.textInput}
        InputProps={{
          endAdornment: (
            <InputAdornment position='end'>{children}</InputAdornment>
          ),
        }}
        inputProps={{
          ...(type === 'password' && { minLength: 8 }),
          ...(type === 'name' && { minLength: 2 }),
        }}
      />
    );
  }
);

export default InputComponent;
