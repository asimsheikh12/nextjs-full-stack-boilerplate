import type { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

export const asyncHandler =
  (fn: any) =>
  (req: NextApiRequest, res: NextApiResponse, next: NextApiHandler): void => {
    fn(req, res, next).catch(next);
  };
