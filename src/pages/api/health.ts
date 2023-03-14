import type { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';

import { ErrorMessage, errorMiddleware } from '@/backend';

const router = nextConnect(errorMiddleware);

router.get((_: NextApiRequest, res: NextApiResponse) =>
  res.send(ErrorMessage.SERVER_HEALTH)
);

export default router;
