import React from 'react';
import { light } from 'theme';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';

const MuiThemeProvider = (props) => {

  return (
    <ThemeProvider theme={createMuiTheme(light)}>
      {props.children}
    </ThemeProvider>
  );
};

export default MuiThemeProvider;
