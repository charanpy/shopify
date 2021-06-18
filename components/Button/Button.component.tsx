import React from 'react';
import useStyles from '../../styles/style';
import { ButtonProps } from '../../types/Button.types';

const Button: React.FC<ButtonProps> = ({
  type = 'submit',
  handleClick,
  children,
  google = false,
  disabled = false,
  sm = false,
}) => {
  const classes = useStyles();
  console.log(disabled);

  return (
    <button
      disabled={disabled}
      type={type}
      style={{
        width: sm && '100px',
        margin: sm && '0px 10px',
        borderRadius: sm && '5px',
        padding: sm && '9px',
      }}
      onClick={handleClick}
      className={`${
        google ? `${classes.button} ${classes.google}` : `${classes.button}`
      }`}
    >
      {children}
    </button>
  );
};

export default React.memo(Button);
