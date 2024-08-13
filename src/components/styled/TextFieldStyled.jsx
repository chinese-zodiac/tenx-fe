import React, { useState } from 'react';
import {
  Typography,
  Box,
  Slider,
  TextField,
  InputAdornment,
  Tooltip,
} from '@mui/material';
import {
  HelpOutline,
  QuestionMarkOutlined,
  QuestionMarkRounded,
} from '@mui/icons-material';

export default function TextFieldStyled({
  text,
  setText,
  maxChar,
  width,
  label,
  helpMsg,
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
      InputProps={
        !!helpMsg && {
          startAdornment: (
            <InputAdornment position="start">
              <Tooltip title={helpMsg}>
                <HelpOutline
                  sx={{
                    fontSize: '1em',
                    marginRight: '-0.5em',
                    cursor: 'help',
                  }}
                />
              </Tooltip>
            </InputAdornment>
          ),
        }
      }
    />
  );
}
