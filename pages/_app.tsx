import React, { useEffect } from 'react';
import Head from 'next/head';
import { Provider } from 'next-auth/client';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import CartProvider from '@/context/Cart/Cart';
import AlertProvider from '@/context/Alert/Alert';
import AlertComponent from '../layout/Alert';
import Navbar from '@/layout/Navbar/Navbar';
import MuiThemeProvider from '@/components/theme/theme-provider';
import CssBaseline from '@material-ui/core/CssBaseline';
import '../styles/globals.scss';

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
        <MuiThemeProvider>
          <CssBaseline />
          <CartProvider>
            <AlertProvider>
              <Navbar />
              <AlertComponent />
              <Component {...pageProps} />
            </AlertProvider>
          </CartProvider>
        </MuiThemeProvider>
      </Provider>
    </>
  );
}

export default MyApp;
