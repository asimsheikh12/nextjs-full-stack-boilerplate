import nextConnect from 'next-connect';

import { connect, errorMiddleware } from '@/backend';
import { registerUser } from '@/backend/controller';

// Connect database
connect();

const router = nextConnect(errorMiddleware);

router.post(registerUser);

export default router;
