import React from 'react';
import { useSnackbar } from 'notistack';
import Slide from '@mui/material/Slide';
import IconButton from '@mui/material/IconButton';
import { Close } from '@mui/icons';


export function useEBSnackbar() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const openSnackBar = (message, variant) => {
    {
      const keyValue = new Date().getTime() + Math.random();
      enqueueSnackbar(message, {
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'left'
        },
        variant: variant,
        TransitionComponent: Slide,
        action: (key) => (
          <>
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              onClick={() => {
                closeSnackbar(key);
              }}
            >
              <Close style={{ fontSize: '15px' }} />
            </IconButton>
          </>
        )
      });
    }
  };

  return { EBSnackBar };
}
