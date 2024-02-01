import React, { useState } from 'react';
import { Typography, Box, Slider } from '@mui/material';

export default function SliderPercentagePicker({ pct, setPct, label }) {
  return (
    <>
      <Box sx={{ backgroundColor: '#f3f3f3', width: '10em' }}>
        <Slider
          value={pct}
          onChange={(event) => setPct(event.target.value)}
          size="small"
          min={0}
          max={900}
          step={25}
          sx={{ width: '8em', margin: 0 }}
        />
        <Typography
          sx={{
            textAlign: 'left',
            color: 'black',
            marginTop: '-0.45em',
            marginLeft: '1em',
            marginBottom: '0.5em',
          }}
        >
          <Typography
            as="span"
            sx={{ color: 'rgba(0,0,0,0.6)', fontSize: '0.75em' }}
          >
            {label}
          </Typography>
          <Typography
            as="span"
            sx={{
              color: 'rgba(0,0,0,0.87)',
              fontSize: '1em',
              marginLeft: '0.5em',
            }}
          >
            {(pct / 100).toFixed(2)}%
          </Typography>
        </Typography>
      </Box>
    </>
  );
}
