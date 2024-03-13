import "@/styles/globals.css";
import type { AppProps } from "next/app";
import {withFronteggApp} from "@frontegg/nextjs/pages";

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default withFronteggApp(App, {
  hostedLoginBox: true,
  lazyLoadAdminPortal: true,
  authOptions: {
    keepSessionAlive: true,
  },
});