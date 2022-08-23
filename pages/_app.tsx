import React from "react";
import Head from 'next/head'
import type { AppProps } from "next/app";
import Layout from '../components/frontend/Layout/Layout'

import "../css/style.css";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps): React.ReactElement => (
  <Layout>
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </Head>
    <Component {...pageProps} />
  </Layout>
);

export default MyApp;
