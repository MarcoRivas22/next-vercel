import { NextPage } from "next";
import "../styles/globals.css";
import { ReactElement, ReactNode } from "react";
import { AppProps } from "next/app";

type NextPageWithLayout = NextPage & {
  getLayout?: (pase: ReactElement) => ReactNode; // JSX.Element == ReactNode
};

type AppPropsWhithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWhithLayout) {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(<Component {...pageProps} />);
}
