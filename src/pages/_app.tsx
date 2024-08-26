import "../styles/globals.css";
import type { AppProps } from "next/app";
import React, { FC, useState } from "react";
import { Provider as ReduxProvider } from "react-redux";
import Head from "next/head";
import { createStore } from "@redux/store";
import { EnhancedStore } from "@reduxjs/toolkit";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { SYSTEM_COLORS } from "@consts/design-system/global-tokens/colors";
import Layout from "../components/layout";
import { client } from "@core/apolloClient";

const theme = createTheme({
  palette: {
    primary: {
      main: SYSTEM_COLORS.primary[500],
      contrastText: SYSTEM_COLORS.neutral[100],
    },
    secondary: {
      main: SYSTEM_COLORS.secondary[500],
      contrastText: SYSTEM_COLORS.neutral[100],
    },
    info: {
      main: SYSTEM_COLORS.info[500],
      contrastText: SYSTEM_COLORS.neutral[100],
    },
  },
});

const App: FC<AppProps> = ({ Component, pageProps }) => {
  const [store, setStore] = useState<EnhancedStore | null>(null);

  React.useEffect(() => {
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
