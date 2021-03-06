import React from 'react';
import { TextField, Grid, InputAdornment, IconButton } from '@material-ui/core';

import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const Input = ({ name, handleChange, label, half, autoFocus, type, handleShowPassword }) => {
  return (
    <Grid xs={12} sm={half ? 6 : 12} item>
      <TextField 
        name={name}
        label={label}
        onChange={handleChange} 
        variant="outlined"
        required
        fullWidth
        autoFocus={autoFocus}
        type={type}
        InputProps={name === 'password' ? null : {
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleShowPassword}>
                {type === 'password' ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          )
        }}
      />
    </Grid>
  );
};

export default Input;
