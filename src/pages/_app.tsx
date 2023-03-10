import type { AppProps } from "next/app";
import Head from "next/head";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { store } from "../store";
import GlobalStyles from "../styles/globalStyles";
import theme from "../styles/theme";

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <Head>
        <title key="title">Brushbids</title>
        <meta name="description" content="Bid on curated artwork" />
      </Head>

      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <GlobalStyles />
          <Component {...pageProps} />
        </Provider>
      </ThemeProvider>
    </>
  );
};

export default App;
