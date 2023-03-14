import type { ReactNode } from 'react';
import { Suspense } from 'react';

import { Loader } from '@/components';

type IProps = {
  meta?: ReactNode;
  children: ReactNode;
};

export const Main: React.FC<IProps> = ({ meta, children }): JSX.Element => (
  <div>
    {meta}
    <Suspense fallback={<Loader />}>{children}</Suspense>
  </div>
);
