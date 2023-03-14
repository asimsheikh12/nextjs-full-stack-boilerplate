import { Button, Typography } from '@mui/material';

const window = require('global/window');

interface IHasErrorProps {}
/** @todo - style, add props, and add business logic to this HasError  */
export const HasError = (_props: IHasErrorProps) => {
  return (
    <>
      <Typography variant="h6" textAlign="center">
        Something went wrong on our side. Please try again.
      </Typography>
      <Button
        size="large"
        variant="contained"
        color="secondary"
        onClick={() => {
          window.location.reload();
        }}
      >
        Reload Page
      </Button>
    </>
  );
};
