import '../styles/global.css';

import { ThemeProvider } from '@emotion/react';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';

import { ErrorBoundary } from '@/components';
import { theme } from '@/styles';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <SessionProvider session={pageProps.session}>
      <ErrorBoundary>
        <Component {...pageProps} />
      </ErrorBoundary>
    </SessionProvider>
  </ThemeProvider>
);

export default MyApp;
