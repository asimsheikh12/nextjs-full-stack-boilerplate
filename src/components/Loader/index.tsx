import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import React from 'react';

import { theme } from '@/styles';

interface IProps {
  open?: boolean;
}

export const Loader: React.FC<IProps> = ({ open = true }) => {
  return (
    <>
      {open && (
        <Backdrop
          sx={{
            color: theme.palette?.primary?.main,
            zIndex: (t) => t.zIndex.drawer + 1,
          }}
          open={open}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
    </>
  );
};
