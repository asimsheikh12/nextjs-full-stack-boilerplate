import { Button, Typography } from '@mui/material';
import Link from 'next/link';

import { AppConfig } from '@/utils';

interface INotFoundProps {
  url?: string | null;
}
/** @todo - style, add props, and add business logic to this NotFound  */
export const NotFound = ({ url = null }: INotFoundProps) => {
  return (
    <>
      <Typography variant="h6" textAlign="center">
        Page not found! Please check the link.
      </Typography>
      <Link passHref href={url ?? AppConfig.paths.WEBSITE_URL}>
        <Button size="large" variant="contained" color="secondary">
          Take me back
        </Button>
      </Link>
    </>
  );
};
