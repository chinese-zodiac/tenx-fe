import React, { useState } from 'react';
import { Typography, Box, Slider, TextField } from '@mui/material';

export default function TextFieldStyled({
  text,
  setText,
  maxChar,
  width,
  label,
}) {
  return (
    <TextField
      label={label}
      variant="filled"
      sx={{
        '&.MuiFormControl-root': {
          backgroundColor: 'white',
          width: { width },
        },
      }}
      value={text}
      onChange={(event) => {
        const newText = event.target.value.substr(0, maxChar);
        setText(newText);
      }}
    />
  );
}
