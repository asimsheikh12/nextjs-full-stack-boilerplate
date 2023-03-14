/* eslint-disable class-methods-use-this */
import Document, { Head, Html, Main, NextScript } from 'next/document';

import { theme } from '@/styles';
import { AppConfig } from '@/utils';

// Need to create a custom _document because i18n support is not compatible with `next export`.
class MyDocument extends Document {
  render() {
    return (
      <Html lang={AppConfig.locale}>
        <Head>
          {/* PWA primary color */}
          <meta name="theme-color" content={theme?.palette?.primary?.main!} />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
