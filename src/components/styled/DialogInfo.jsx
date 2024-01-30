import { Button, DialogContent } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import * as React from 'react';

export default function DialogInfo({ btn, children, sx }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {React.cloneElement(btn, {
        onClick: handleClickOpen,
      })}
      <Dialog onClose={handleClose} open={open} sx={sx}>
        <DialogContent
          sx={{
            padding: '1em',
            background: '#f0eeed',
            border: 'solid 4px #9E5635',
            borderRadius: '10px',
            color: 'black',
          }}
        >
          {children}
          <Button
            onClick={handleClose}
            variant="text"
            autoFocus
            sx={{
              backgroundColor: '#9E5635',
              color: '#f0eeed',
              marginTop: '1em',
              marginBottom: '2em',
              fontSize: '1.25em',
              paddingLeft: '1.5em',
              paddingRight: '1.5em',
              '&:hover': {
                backgroundColor: '#9E5635',
              },
            }}
          >
            SEE YA LATER!
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
}
