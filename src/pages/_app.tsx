import "../styles/globals.css";
import type { AppProps } from "next/app";
import React, { FC, useState } from "react";
import { Provider as ReduxProvider } from "react-redux";
import Head from "next/head";
import { createStore } from "../redux/store";
import { EnhancedStore } from "@reduxjs/toolkit";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { COLOR_TOKENS } from "../consts/design-system/global-tokens/colors";
import Layout from "../components/layout";

const theme = createTheme({
  palette: {
    primary: COLOR_TOKENS.primary,
    secondary: COLOR_TOKENS.secondary,
    info: COLOR_TOKENS.info,
  },
});

const App: FC<AppProps> = ({ Component, pageProps }) => {
  const [store, setStore] = useState<EnhancedStore | null>(null);

  React.useEffect(() => {
    const client = new ApolloClient({
      cache: new InMemoryCache(),
      uri: "/graphql",
    });

    const store = createStore({ epicDependencies: { client } });
    setStore(store);
  }, []);

  if (!store) return <>{"Loading..."}</>;
  return (
    <>
      <Head>
        <title>{"Coolmovies Frontend"}</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <ReduxProvider store={store}>
        <ThemeProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </ReduxProvider>
    </>
  );
};

export default App;
