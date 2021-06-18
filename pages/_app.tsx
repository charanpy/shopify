import { AppProps } from 'next/dist/next-server/lib/router/router';
import React, { useEffect } from 'react';
import { Provider } from 'next-auth/client';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AlertProvider from '../context/Alert/Alert';
import '../styles/globals.scss';
import theme from '../theme';
import AlertComponent from '../layout/Alert';
import Navbar from '@/layout/Navbar/Navbar';

function MyApp({ Component: Component, pageProps }: AppProps) {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return (
    <>
      <Head>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0'
        />
      </Head>
      <Provider session={pageProps.session}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <AlertProvider>
            <Navbar />
            <AlertComponent />
            <Component {...pageProps} />
          </AlertProvider>
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default MyApp;
